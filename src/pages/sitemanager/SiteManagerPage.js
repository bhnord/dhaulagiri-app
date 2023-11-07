import styles from "./SiteManagerPage.module.css";
import Store from "../../components/store/Store";
import { api } from "../../api/api-client";
import { useEffect, useState } from "react";
export default function SiteManagerPage() {

  const [stores, setStores] = useState([]);
  const [refresh, setRefresh] = useState(0);

  //will be returned from lambda
  const totalInventoryAmt = 10000;
  const siteManagerBalance = 43005;
  const siteBalance = 100000;

  useEffect(() => {
    const getStores = async() => {
      const c = await api.listStores();
      if(c.statusCode !== 200){
        alert("invalid login")
      } else {
        setStores(c.stores)
      }
    }
    getStores();
  }, [refresh]);
  //will be returned from lambda
  const c_data = {
    name: "Store1",
    balance: 1000,
    inventory: 1000,
    computersInStock: 43,
  };

  //load examples

  return (
    <div className={styles.wrapper}>
      <h3>SiteManagerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>{stores.map((x) => 
          <Store key={x.storeName} store_data={x}/>
        )}</div>
        <div id={styles.store_view}>
          <p>Total Inventory $ Amount: ${totalInventoryAmt}</p>
          <p>Site Manager Balance: ${siteManagerBalance}</p>
          <p>Site Balance: ${siteBalance}</p>
          <p>Generate Site Reports:</p>
          <button className={styles.buttons}>Internal Profit Report</button>
          <button className={styles.buttons}>Total Inventory Report</button>
        </div>
      </div>
    </div>
  );
}
