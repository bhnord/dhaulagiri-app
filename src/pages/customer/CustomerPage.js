import styles from "./CustomerPage.module.css";
import Computer from "../../components/computer/CustomerComputer";
import Store from "../../components/store/FilterStore";
import {api} from "../../api/api-client";
import {useEffect, useState} from "react";

export default function CustomerPage() {
  const [computers, setComputers] = useState([]);
  const [stores, setStores] = useState([]);
  const [refresh, setRefresh] = useState(0);

  //will be returned from lambda
  // const c_data = {
  //   name: "Computer X",
  //   ram: 12,
  //   storage: 10,
  //   processor: "AMD",
  //   processor_generation: 10,
  //   graphics: "NVDIA",
  //   price: 1000,
  // };

  //load examples
  // const computers = [];
  // for (let i = 0; i < 3; i++) {
  //   computers.push(<Computer key={i} computer_data={c_data} />);
  // }

  // useEffect(() => {
  //   const getComputers = async () => {
  //       const resp = await api.generateStoreInventory();
  //       const computers = resp.computers;
  //       // const inventory = resp ?. inventory ?. toFixed(2);

  //       if (resp.statusCode !== 200) {
  //           alert("invalid login")

  //       } else {
  //           setComputers(computers)
  //           // setInventory(inventory)
  //       }
  //   };
  //   getComputers();
  // }, [refresh])

  useEffect(() => {
    const getStores = async () => {
        const resp = await api.listStores();
        const stores = resp.stores;
        // const inventory = resp ?. inventory ?. toFixed(2);

        if (resp.statusCode !== 200) {
            alert("invalid login")

        } else {
            setStores(stores);
            // setInventory(inventory)
        }
    };
    getStores();
  }, [refresh])

  const compare = () => {
    //TODO: implement
    //refreshParent()
  }

  const filter = () => { 
    //TODO: implement
    const elem = document.getElementById("StoreSelect");
    const v = elem.value;

    const getStoreComputers = async () => {
        const resp = await api.generateStoreInventory(v);
        const computers = resp.computers;

        if (resp.statusCode !== 200) {
            alert("invalid login")

        } else {
            setComputers(computers)
        }
    };
    getStoreComputers();
    setRefresh(refresh+1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div id={styles.filter_view}>
          <h3>Filter</h3>

          <label>Choose a store: </label>
          <form>
            <select name="Store" id="StoreSelect">
              <option value="any" key="any">Any from list</option>
              {stores.map((store) => <Store 
                    key={store.store_name}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    store_data={store}/>)}
            </select>
          </form>
          <br></br>

          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="4GB" name="RAM" value="4GB or less" />4GB or less</label>
              <label><input className={styles.checkbox} type="checkbox" id="8GB" name="RAM" value="8GB"></input>8GB</label>
              <label><input className={styles.checkbox} type="checkbox" id="16GB" name="RAM" value="16GB"></input>16GB</label>
              <label><input className={styles.checkbox} type="checkbox" id="32GB" name="RAM" value="32GB or more"></input>32GB or more</label>
            </div>
          </form>
          <br></br>

          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="256GB" name="Storage" value="256GB or less"></input>256GB or less</label>
              <label><input className={styles.checkbox} type="checkbox" id="512GB" name="Storage" value="512GB"></input>512GB</label>
              <label><input className={styles.checkbox} type="checkbox" id="1TB" name="Storage" value="1TB"></input>1TB</label>
              <label><input className={styles.checkbox} type="checkbox" id="2TB" name="Storage" value="2TB or more"></input>2TB or more</label>
            </div>
          </form>
          <br></br>


          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="AllIntel" name="ProcessorType" value="All Intel"></input>All Intel</label>
              <label><input className={styles.checkbox} type="checkbox" id="AllAMD" name="ProcessorType" value="All AMD"></input>All AMD</label>
            </div>
          </form>
          <br></br>

          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="AllIntel" name="Graphics" value="All Intel"></input>All Intel</label>
              <label><input className={styles.checkbox} type="checkbox" id="AllAMD" name="Graphics" value="All AMD"></input>All AMD</label>
              <label><input className={styles.checkbox} type="checkbox" id="AllNVIDIA" name="Graphics" value="All NVIDIA"></input>All NVIDIA</label>
            </div>
          </form>
          <br></br>


          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="500" name="Price" value="$500 or less"></input>$500 or less</label>
              <label><input className={styles.checkbox} type="checkbox" id="1000" name="Price" value="$501 to $1000"></input>$501 to $1000</label>
              <label><input className={styles.checkbox} type="checkbox" id="1500" name="Price" value="$1001 to $1500"></input>$1001 to $1500</label>
              <label><input className={styles.checkbox} type="checkbox" id="2000" name="Price" value="$1501 to $2000"></input>$1501 to $2000</label>
              <label><input className={styles.checkbox} type="checkbox" id="2500" name="Price" value="$2001 or more"></input>$2001 or more</label>
            </div>
          </form>
          <br></br>

          <button onClick={filter}>Filter Computers</button>
        </div>
        <div id={styles.computer_view}>
          {computers.map((comp) => <Computer key={
                        comp.computerID
                    }
                    refresh={refresh}
                    setRefresh={setRefresh}
                    computer_data={comp}/>)}
        </div>
        <div id={styles.compare_view}>
          <button className = {styles.compareButton} onClick={compare}>Compare Computers</button>
          <div id={styles.compare_div}>
            <div id={styles.computer_compare}>

            </div>
            <div id={styles.computer_compare}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
