import styles from './CreateStorePage.module.css'
import {api} from '../../api/api-client'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CreateStorePage() {
    const navigate = useNavigate();
    const createStoreButton = async () => {
        const user = document.getElementById("usr").value
        const pass = document.getElementById("pass").value
        const pass2 = document.getElementById("pass2").value
        const storeName = document.getElementById("storeName").value
        const lat = parseFloat(document.getElementById("lat").value)
        const long = parseFloat(document.getElementById("long").value)
        if (pass !== pass2) {
            console.log(pass, pass2)
            alert("passwords do not match")
            return
        }

        let resp = await api.createStore(storeName, user, pass, long, lat)
        if (resp.statusCode !== 200) {
            alert("Store or User already Exists")
        } else {
            alert("Store Created.")
            navigate("/")
        }
    }

    return (<div className={styles.container}>
        <Link to="/login">
        <button id={styles.topLeftLoginButton}>Login</button>
        </Link>
        <button id={styles.topRightLoginButton}>Create Store</button>

        <p>Create Store</p>
        <input id="usr" className={styles.inputBoxes} type="text" placeholder="Enter your username"/>
        <input id="pass" className={styles.inputBoxes} type="password" placeholder="Enter your password"/>
        <input id="pass2" className={styles.inputBoxes} type="password" placeholder="Re-enter your password"/>
        <input id="storeName" className={styles.inputBoxes} type="text" placeholder="Enter your store name"/>
        <input id="lat" className={styles.inputBoxes} type="number" placeholder="Enter your latitude"/>
        <input id="long" className={styles.inputBoxes} type="number" placeholder="Enter your longitude"/>
        <button id={styles.createstorebutton} onClick={createStoreButton}>Create Store</button>
    </div>)

}
