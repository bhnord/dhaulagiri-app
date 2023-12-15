import styles from "./Store.module.css";
import { api } from "../../api/api-client";
export default function Store({store_data, refresh, setRefresh}) {
  const store_name = store_data.storeName;
  const balance = store_data.balance;
  const inventory = store_data.inventory;
  const computersInStock = store_data.numComputers;

  const removeStore = async() => {
    const resp = await api.removeStore(store_name);
    
    if(resp.statusCode !== 200){
      alert("invalid login: please login as admin user")
    } else {
      setRefresh(refresh+1);
    }
  }

  return (
    <div id={styles.company}>
      <div id={styles.companySpecs}>
        <h2> {store_name} </h2>
        <div>
          <ul>
            <li>Inventory: ${inventory}</li>
            <li>Balance: ${balance}</li>
            <li>Computers in Stock: {computersInStock}</li>
          </ul>
        </div>
      </div>
      <div id={styles.companyButtons}>
        {/* <button className={styles.buttons}>Inventory Report</button> */}
        <button className={styles.buttons} onClick={removeStore}>Delete Store</button>
      </div>
    </div>
  );
}
