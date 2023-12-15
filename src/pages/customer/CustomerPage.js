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
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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
            alert("Error fetching store's list.")

        } else {
            setStores(stores);
        }
    };
    getStores();
  }, [computers, selectedComputers, refresh]);

  const compare = async () => {
    if (latitude && longitude){
      if (selectedComputers.length === 2) {
        const computer1 = computers.find((comp) => comp.computerID === selectedComputers[0]);
        const computer2 = computers.find((comp) => comp.computerID === selectedComputers[1]);
    
        const compareContainer = document.getElementById(styles.computer_compare);
        compareContainer.innerHTML = '';
    
        const createComputerContainer = async (computer) => {
          const container = document.createElement('div');
          container.classList.add(styles.compareSpecs, styles.container);
    
          const resp = await api.generateStoreInventory(computer.storeName, latitude, longitude);
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
      }
      else {
        alert("Please select exactly two computers for comparison.");
      }
    } else {
      alert("Please input a valid latitude and longitude.");
    }
  };



  const filter = async () => {
    console.log("Filter button clicked");
    const elem = document.getElementById("StoreSelect");
    const storeName = elem.value;
  
    try {
      if (storeName !== "any") {
        const features = collectSelectedFeatures();

        if (features.length == 0){
          const resp = await api.filterComputer(storeName, null);
          if (resp && resp.statusCode && resp.statusCode === 200) {
            setComputers(resp.computers);
          } else {
            alert("Error filtering computers.");
          }
        }

        else{
          const resp = await api.filterComputer(storeName, features);
          console.log(features)
          console.log(resp)
          if (resp && resp.statusCode && resp.statusCode === 200) {
            setComputers(resp.computers);
          } else {
            alert("Error filtering computers.");
          }
        }

      }
      else if (storeName == "any") {
        const features = collectSelectedFeatures();
        
        if (features.length == 0){
          const resp = await api.filterComputer(null, null);
          if (resp && resp.statusCode && resp.statusCode === 200) {
            setComputers(resp.computers);
          } else {
            alert("Error filtering computers.");
          }
        }

        else{
          const resp = await api.filterComputer(null, features);
          if (resp && resp.statusCode && resp.statusCode === 200) {
            setComputers(resp.computers);
          } else {
            alert("Error filtering computers.");
          }
        }
      }
    } 
    catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while filtering computers.");
    }
    setRefresh(refresh + 1);
  };
  
const buyComputer = (compID) => {
  console.log("test1");
  if (latitude && longitude){
    const buyComp = async () => {
      console.log("test2");
      const resp = await api.buyComputer(compID, latitude, longitude);
      if(resp.statusCode !== 200){
        console.log("test3");
        alert("An error occured while attempting to buy the computer");
        console.log("An error occured: " + resp);
      }
      else{
        setRefresh(refresh+1)
      }
    };
    buyComp();
  } else {
   alert("Please input a valid latitude and longitude in order to buy a computer.");
  }
}

const collectSelectedFeatures = () => {
  const features = [];

  //ram
  if (document.getElementById("4GB").checked) {
      features.push("4GB or Less");
  }
  if (document.getElementById("8GB").checked) {
    features.push("8GB");
  }
  if (document.getElementById("16GB").checked) {
    features.push("16GB");
  }
  if (document.getElementById("32GB").checked) {
    features.push("32GB or more");
  }

  //storage stuff
  if (document.getElementById("256GB").checked) {
    features.push("256GB or less");
  }
  if (document.getElementById("512GB").checked) {
    features.push("512GB");
  }
  if (document.getElementById("1TB").checked) {
    features.push("1TB");
  }
  if (document.getElementById("2TB").checked) {
    features.push("2TB or more");
  }

  //processor stuff
  if (document.getElementById("AllIntelProcessor").checked) {
    features.push("All Intel Processor");
  }
  if (document.getElementById("AllAMDProcessor").checked) {
    features.push("All AMD Processor");
  }

  //graphics stuff
  if (document.getElementById("AllIntelGraphics").checked) {
    features.push("All Intel Graphics");
  }
  if (document.getElementById("AllAMDGraphics").checked) {
    features.push("All AMD Graphics");
  }
  if (document.getElementById("AllNVIDIAGraphics").checked) {
    features.push("All NVIDIA Graphics");
  }

  //price stuff
  if (document.getElementById("500").checked) {
    features.push("$500 or less");
  }
  if (document.getElementById("1000").checked) {
    features.push("$501 to 1000");
  }
  if (document.getElementById("1500").checked) {
    features.push("$1001 to 1500");
  }
  if (document.getElementById("2000").checked) {
    features.push("$1501 to 2000");
  }
  if (document.getElementById("2500").checked) {
    features.push("$2001 or more");
  }
  return features;
};

useEffect(() => {
  const getStoresAndComputers = async () => {
    try {
      const storesResp = await api.listStores();
      const stores = storesResp.stores;

      if (storesResp.statusCode !== 200) {
        alert("Error fetching store's list.");
        return;
      }

      setStores(stores);

      const initialComputersResp = await api.filterComputer(null, null);

      if (initialComputersResp.statusCode === 200) {
        setComputers(initialComputersResp.computers);
      } else {
        alert("Error fetching initial list of computers.");
      }
    } 
    catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while fetching data.");
    }
  };

  getStoresAndComputers();
}, [refresh]);


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
          <label>RAM: </label>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="4GB" name="RAM" value="4GB or less" />4GB or less</label>
              <label><input className={styles.checkbox} type="checkbox" id="8GB" name="RAM" value="8GB"></input>8GB</label>
              <label><input className={styles.checkbox} type="checkbox" id="16GB" name="RAM" value="16GB"></input>16GB</label>
              <label><input className={styles.checkbox} type="checkbox" id="32GB" name="RAM" value="32GB or more"></input>32GB or more</label>
            </div>
          </form>
          <br></br>

          <form>
          <label>Storage: </label>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="256GB" name="Storage" value="256GB or less"></input>256GB or less</label>
              <label><input className={styles.checkbox} type="checkbox" id="512GB" name="Storage" value="512GB"></input>512GB</label>
              <label><input className={styles.checkbox} type="checkbox" id="1TB" name="Storage" value="1TB"></input>1TB</label>
              <label><input className={styles.checkbox} type="checkbox" id="2TB" name="Storage" value="2TB or more"></input>2TB or more</label>
            </div>
          </form>
          <br></br>


          <form>
          <label>Processor: </label>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="AllIntelProcessor" name="ProcessorType" value="All Intel"></input>All Intel</label>
              <label><input className={styles.checkbox} type="checkbox" id="AllAMDProcessor" name="ProcessorType" value="All AMD"></input>All AMD</label>
            </div>
          </form>
          <br></br>

          <form>
          <label>Graphics: </label>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} type="checkbox" id="AllIntelGraphics" name="Graphics" value="All Intel"></input>All Intel</label>
              <label><input className={styles.checkbox} type="checkbox" id="AllAMDGraphics" name="Graphics" value="All AMD"></input>All AMD</label>
              <label><input className={styles.checkbox} type="checkbox" id="AllNVIDIAGraphics" name="Graphics" value="All NVIDIA"></input>All NVIDIA</label>
            </div>
          </form>
          <br></br>


          <form>
          <label>Price: </label>
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
                buyComp={buyComputer}
              />
            </div>
          ))}
        </div>
        <div id={styles.compare_view}>
        <form className={styles.formRow}>
        <div>
            <label>Latitude: </label>
            <input id="lat" type="number" className={styles.inputBoxes} value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </div>
        <div>
            <label>Longitude: </label>
            <input id="long" type="number" className={styles.inputBoxes} value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div>
        </form>
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