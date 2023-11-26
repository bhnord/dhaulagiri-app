import { api } from "../../api/api-client";
export default function Store({store_data, refresh, setRefresh}) {
  const store_name = store_data.storeName;

  const removeStore = async() => {
    const resp = await api.removeStore(store_name);
    
    if(resp.statusCode !== 200){
      alert("invalid login: please login as admin user")
    } else {
      setRefresh(refresh+1);
    }
  }

  return (
    <option value={store_name} key={store_name}>{store_name}</option>
  );
}
