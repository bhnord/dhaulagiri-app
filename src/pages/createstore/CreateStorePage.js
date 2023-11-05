import styles from './CreateStorePage.module.css'
import { api } from '../../api/api-client'
import { useNavigate } from 'react-router-dom'

export default function CreateStorePage(){
    const navigate = useNavigate();
    const createStoreButton = async() => {
        const user = document.getElementById("usr").value
        const pass = document.getElementById("pass").value
        const pass2 = document.getElementById("pass2").value
        const storeName = document.getElementById("storeName").value
        const lat = parseFloat(document.getElementById("lat").value)
        const long = parseFloat(document.getElementById("long").value)
        if(pass !== pass2){
            console.log(pass, pass2)
            alert("passwords do not match")
            return 
        }

       let resp = await api.createStore(storeName,user,pass,long,lat) 
       if(resp.statusCode != 200){
        alert("Store or User already Exists")
       } else {
        alert("Store Created.")
        navigate("/")
       }
    }

    return (<div>

        <p>Create Store</p>
        <input id="usr" className={styles.inputStyle} type="text" placeholder="Enter your username"/>
        <input id="pass" className={styles.inputStyle} type="password" placeholder="Enter your password"/>
        <input id="pass2" className={styles.inputStyle} type="password" placeholder="Re-enter your password"/>
        <input id="storeName" className={styles.inputStyle} type="text" placeholder="Enter your store name"/>
        <input id="lat" className={styles.inputStyle} type="number" placeholder="Enter your latitude"/>
        <input id="long" className={styles.inputStyle} type="number" placeholder="Enter your longitude"/>
        <button id={styles.createButton} onClick={createStoreButton}>Create Store</button>
    </div>)

}