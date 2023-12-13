import styles from "./CustomerPage.module.css";
import Computer from "../../components/computer/CustomerComputer";
import Store from "../../components/store/FilterStore";
import {api} from "../../api/api-client";
import {useEffect, useState} from "react";

export default function CustomerPage() {
  const [computers, setComputers] = useState([]);
  const [stores, setStores] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [selectedComputers, setSelectedComputers] = useState([]);

  const handleRadioClick = (computerID, checked) => {
    setSelectedComputers((prevSelected) => {
      if (checked) {
        if (prevSelected.length < 2) {
          return [...prevSelected, computerID];
        } else {
          return [prevSelected[1], computerID];
        }
      } else {
        return prevSelected.filter((id) => id !== computerID);
      }
    });
  };

  useEffect(() => {
    const getStores = async () => {
        const resp = await api.listStores();
        const stores = resp.stores;

        if (resp.statusCode !== 200) {
            alert("invalid login")

        } else {
            setStores(stores);
        }
    };
    getStores();
  }, [computers, selectedComputers, refresh]);

  const compare = async () => {
    if (selectedComputers.length === 2) {
      const computer1 = computers.find((comp) => comp.computerID === selectedComputers[0]);
      const computer2 = computers.find((comp) => comp.computerID === selectedComputers[1]);
  
      const compareContainer = document.getElementById(styles.computer_compare);
      compareContainer.innerHTML = '';
  
      const createComputerContainer = async (computer) => {
        const container = document.createElement('div');
        container.classList.add(styles.compareSpecs, styles.container);
  
        const resp = await api.generateStoreInventory(computer.storeName, 100, 19.5);
        console.log("Shipping")
        console.log(resp)
        const shippingPrice = resp.computers.find((comp) => comp.computerID === computer.computerID)?.shippingPrice;
  
        container.innerHTML = `
          <div>
            <h2>${computer.computerName}</h2>
            <h4>Price: <span style="font-weight:normal">$${computer.price}</span></h4>
            <h4>Shipping Price: <span style="font-weight:normal">$${shippingPrice.toFixed(2)}</span></h4>
            <li><b>Ram:</b> ${computer.ram}</li>
            <li><b>Storage:</b> ${computer.storage}</li>
            <li><b>Processor:</b> ${computer.processor}</li>
            <li><b>Processor Gen: </b>${computer.processGen}</li>
            <li><b>Graphics:</b> ${computer.graphics}</li>
          </div>
        `;
        return container;
      };
  
      const container1 = await createComputerContainer(computer1);
      const line = document.createElement('div');
      line.classList.add(styles.compareLine);
      const lineContainer = document.createElement('div');
      lineContainer.appendChild(line);
      const container2 = await createComputerContainer(computer2);
  
      compareContainer.appendChild(container1);
      compareContainer.appendChild(lineContainer);
      compareContainer.appendChild(container2);
    } else {
      alert("Please select exactly two computers for comparison.");
    }
  };  



  const filter = () => { 
    const elem = document.getElementById("StoreSelect");
    const v = elem.value;

    if(v !== "any"){
      const getStoreComputers = async () => {
          const resp = await api.generateStoreInventory(v);
          const computers = resp.computers;

          if (resp.statusCode !== 200) {
              alert("invalid login")

          } else {
              setComputers(computers);
          }
      };
      getStoreComputers();
    }

    else {
      var num_processed = 1;
      for(var i = 1; i < elem.options.length; i++){
        var computers = [];
        const getStoreComputers = async () => {
          const resp = await api.generateStoreInventory(elem.options[i].value);
          const new_computers = resp.computers;

          if (resp.statusCode !== 200) {
              alert("invalid login");
          }
          else{
            computers.push(new_computers);
            num_processed += 1;
            if(num_processed === elem.options.length){
              computers = computers.flat(1);
              setComputers(computers);
            }
          }
        }
        getStoreComputers();
      }
    }
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
              {stores.map((store) => <Store key={store.store_name}
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
        {computers.map((comp) => (
            <div key={comp.computerID}>
              <Computer
                refresh={refresh}
                setRefresh={setRefresh}
                computer_data={comp}
                selectedComputers={selectedComputers}
                onRadioChange={handleRadioClick}
              />
            </div>
          ))}
        </div>
        <div id={styles.compare_view}>
          <button className = {styles.compareButton} onClick={compare}>Compare Computers</button>
          <div id={styles.compare_div}>
            <div id={styles.computer_compare}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
