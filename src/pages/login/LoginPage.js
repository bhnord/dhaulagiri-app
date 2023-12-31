import {useAuth} from "../../auth/AuthContext";
import styles from "./LoginPage.module.css";
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const {setUser} = useAuth();
    const loginStoreOwner = () => {
        setUser({username: "sam", password: "samantha", storeName: "Sam Store"})
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }
    const loginSiteAdmin = () => {
        setUser({username: "computerStoreAdmin", password: "dhaulagiri", storeName: "computerStore"})
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }

    const login = () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const storeName = document.getElementById("storeName").value
        setUser({username: username, password: password, storeName: storeName})
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }

    return (<div className={styles.container}>
        <div className="button-container">
            <button className={styles.topLeftLoginButton}>Login</button>
            <Link to="/createstore">
            <button className={styles.topRightLoginButton}>Create Store</button>
            </Link>
        </div>
        <input id="username" className={styles.inputBoxes} type="text" placeholder="Enter Username" />
        <input id="password" className={styles.inputBoxes} type="password" placeholder="Enter Password"/>
        <input id="storeName" className={styles.inputBoxes} type="text" placeholder="Enter Store Name"/>
        <button id={styles.loginbutton} onClick={login}>Login</button>
        <div style={{marginTop: 20}}>
            Dev Tools: <br/>
            <button onClick={loginStoreOwner}>Login Store Owner [Dev]</button>
            <button onClick={loginSiteAdmin}>Login Site Admin [Dev]</button>
        </div>
    </div>)
}
