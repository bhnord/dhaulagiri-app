import { api } from "../../api/api-client";
import styles from "./FilterStore.module.css"

export default function Store({store_data, refresh, setRefresh}) {
  const store_name = store_data.storeName;

  // const removeStore = async() => {
  //   const resp = await api.removeStore(store_name);
    
  //   if(resp.statusCode !== 200){
  //     alert("invalid login: please login as admin user")
  //   } else {
  //     setRefresh(refresh+1);
  //   }
  // }

  return (
    <label><input className={styles.checkbox} onClick={() => setRefresh(refresh+1)} type="checkbox" id={store_name} name={store_name} value={store_name} />{store_name}</label>
  );
}
