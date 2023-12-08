import styles from "./CustomerPage.module.css";
import Computer from "../../components/computer/CustomerComputer";
import Store from "../../components/store/FilterStore";
import {api} from "../../api/api-client";
import {useEffect, useState} from "react";

export default function CustomerPage() {
  const [computers, setComputers] = useState([]);
  const [stores, setStores] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const loadComputers = () => { 
      // console.log(stores);
      var totalChecked = 0
      var checkAll = false;
      for(var i = 0; i < stores.length; i++){
        if(document.getElementById(stores[i].storeName).checked){
          totalChecked += 1;
        }
      }
      if(totalChecked === 0){
        totalChecked = stores.length;
        checkAll = true;
      }
  
      var num_processed = 0;
      for(var i = 0; i < stores.length; i++){
        var computers = [];
        const getStoreComputers = async () => {
          if(checkAll || document.getElementById(stores[i].storeName).checked){
            const resp = await api.generateStoreInventory(stores[i].storeName);
            const new_computers = resp.computers;
  
            if (resp.statusCode !== 200) {
                alert("invalid login");
            }
            else{
              computers.push(new_computers);
              num_processed += 1;
              if(num_processed === totalChecked){
                computers = computers.flat(1);
                setComputers(computers);
              }
            }
          }
        }
        
        getStoreComputers();
      }
    }

    const getStores = async () => {
      const resp = await api.listStores();
      const stores = resp.stores;

      if (resp.statusCode !== 200) {
          alert("invalid login")

      } else {
          setStores(stores);
          // loadComputers();
      }
    };

    getStores()
  }, [refresh]);


  const compare = () => {
    //TODO: implement
    //refreshParent()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div id={styles.filter_view}>
          <h3>Filter</h3>

          <label>Choose a store: </label>
          <form>
            <div className={styles.checkbox_div}>
              {stores.map((store) => <Store key={store.store_name}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    store_data={store}/>)}
            </div>
          </form>
          <br></br>

          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="4GB" name="RAM" value="4GB or less" />4GB or less</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="8GB" name="RAM" value="8GB"></input>8GB</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="16GB" name="RAM" value="16GB"></input>16GB</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="32GB" name="RAM" value="32GB or more"></input>32GB or more</label>
            </div>
          </form>
          <br></br>

          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="256GB" name="Storage" value="256GB or less"></input>256GB or less</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="512GB" name="Storage" value="512GB"></input>512GB</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="1TB" name="Storage" value="1TB"></input>1TB</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="2TB" name="Storage" value="2TB or more"></input>2TB or more</label>
            </div>
          </form>
          <br></br>


          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="AllIntel" name="ProcessorType" value="All Intel"></input>All Intel</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="AllAMD" name="ProcessorType" value="All AMD"></input>All AMD</label>
            </div>
          </form>
          <br></br>

          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="AllIntel" name="Graphics" value="All Intel"></input>All Intel</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="AllAMD" name="Graphics" value="All AMD"></input>All AMD</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="AllNVIDIA" name="Graphics" value="All NVIDIA"></input>All NVIDIA</label>
            </div>
          </form>
          <br></br>


          <form>
            <div className={styles.checkbox_div}>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="500" name="Price" value="$500 or less"></input>$500 or less</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="1000" name="Price" value="$501 to $1000"></input>$501 to $1000</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="1500" name="Price" value="$1001 to $1500"></input>$1001 to $1500</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="2000" name="Price" value="$1501 to $2000"></input>$1501 to $2000</label>
              <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id="2500" name="Price" value="$2001 or more"></input>$2001 or more</label>
            </div>
          </form>
          <br></br>

          {/* <button onClick>Filter Computers</button> */}
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
