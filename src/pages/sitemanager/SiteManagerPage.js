import styles from "./SiteManagerPage.module.css";
import Store from "../../components/store/Store";
import { api } from "../../api/api-client";
import { useEffect, useState } from "react";
export default function SiteManagerPage() {
  const [stores, setStores] = useState([]);
  const [totalInventory, setTotalInventory] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [siteBalance, setSiteBalance] = useState(0);
  const [ascending, setAscending] = useState(true);

  //will be returned from lambda

  useEffect(() => {
    const getStores = async () => {
      const respInventory = await api.generateTotalInventory();
      if (respInventory.statusCode !== 200) {
        alert("invalid login");
      } else {
        setSortedStores(respInventory.stores);
        setTotalInventory(respInventory.totalInventory);
        setSiteBalance(respInventory.adminBalance);
      }
    };
    getStores();
    const setSortedStores = (s) => {
      let k = 1;
      if (ascending === false) {
        k = -1;
      }
      setStores(s.sort((a, b) => k * a.storeName.localeCompare(b.storeName)));
    };
  }, [refresh, ascending]);

  const toggleAscending = () => {
    setAscending(!ascending)
  }

  return (
    <div className={styles.wrapper}>
      <h3>SiteManagerPage</h3>
      <button onClick={toggleAscending}>Toggle Ascending / Descending</button>
      <div className={styles.content}>
        <div id={styles.site_reports}>
          {stores.map((x) => (
            <Store
              key={x.storeName}
              store_data={x}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ))}
        </div>
        <div id={styles.store_view}>
          <p>Total Inventory $ Amount: ${totalInventory}</p>
          <p>Site Balance: ${siteBalance}</p>
          {/* <p>Generate Site Reports:</p>
          <button className={styles.buttons}>Internal Profit Report</button>
          <button className={styles.buttons}>Total Inventory Report</button> */}
        </div>
      </div>
    </div>
  );
}
