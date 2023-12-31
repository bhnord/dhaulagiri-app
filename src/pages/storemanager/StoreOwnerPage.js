import styles from "./StoreOwnerPage.module.css";
import Computer from "../../components/computer/Computer";
import { api } from "../../api/api-client";
import { useEffect, useState } from "react";
export default function StoreOwnerPage() {
  const [computers, setComputers] = useState([]);
  const [inventory, setInventory] = useState(null);
  const [refresh, setRefresh] = useState(0);

  // XXX: UPDATE LAMBDA
  // will be returned from lambda
  const [storeBalance, setStoreBalance] = useState(null);

  useEffect(() => {
    const getComputers = async () => {
      const resp = await api.generateStoreInventory();
      const computers = resp.computers;
      const inventory = resp?.inventory?.toFixed(2);
      const balance = resp.balance

      if (resp.statusCode !== 200) {
        alert("invalid login");
      } else {
        setComputers(computers);
        setInventory(inventory);
        setStoreBalance(balance)
      }
    };
    getComputers();
  }, [refresh]);

  const addComputer = async () => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const ram = document.getElementById("ram").value;
    const storage = document.getElementById("storage").value;
    const processor = document.getElementById("processor").value;
    const processorGen = document.getElementById("processorGen").value;
    const graphics = document.getElementById("graphics").value;

    const resp = await api.addComputer(
      name,
      ram,
      storage,
      processor,
      processorGen,
      graphics,
      price
    );
    if (resp.statusCode !== 200) {
      alert("Invalid Input or User");
    } else {
      setRefresh(refresh + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>StoreOwnerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>
          {" "}
          {computers.map((computer) => (
            <Computer
              key={computer.computerID}
              refresh={refresh}
              setRefresh={setRefresh}
              computer_data={computer}
            />
          ))}{" "}
        </div>
        <div id={styles.store_view}>
          <p>Total Store Balance: ${storeBalance}</p>
          <p>Total Inventory $ Amount: ${inventory}</p>
          <button>Inventory Report</button>
          <div className="addComputer">
            <p>Add A Computer</p>
            <input id="name" type="text" placeholder="Name" />
            <input id="price" type="number" placeholder="Price" />
            <input id="ram" type="number" placeholder="RAM (GB)" />
            <input id="storage" type="number" placeholder="Storage (GB)" />
            <input id="processor" type="text" placeholder="Processor" />
            <input
              id="processorGen"
              type="text"
              placeholder="Processor Generation"
            />
            <input id="graphics" type="text" placeholder="Graphics" />
            <button onClick={addComputer}>Add Computer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
