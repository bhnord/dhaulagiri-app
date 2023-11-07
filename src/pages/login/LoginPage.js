import {useAuth} from "../../auth/AuthContext";
import {api} from "../../api/api-client";
import styles from "./LoginPage.module.css";
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const {setUser, user} = useAuth();
    const loginStoreOwner = () => {
        setUser({username: "sam", password: "samantha", storeName: "Sam Store"})
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }
    const loginSiteAdmin = () => {
        setUser({username: "computerStoreAdmin", password: "dhaulagiri", storeName: "Computer Store"})
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }

    const login = () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const storeName = document.getElementById("storeName").value
        setUser({username: username, password: password, storeName: storeName})
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }

    const logout = () => {
        setUser(null)
        Array.from(document.getElementsByTagName("input")).forEach(e=>{e.value=""});
    }

    return (<div class={styles.container}>
        <button id={styles.topLeftLoginButton} onClick={login}>Login</button>
        <Link to="/createstore">
        <button id={styles.topRightLoginButton}>Create Store</button>
        </Link>        
        <input id={styles.username} className="inputField" type="text" placeholder="Enter Username" />
        <input id={styles.password} className="inputField" type="password" placeholder="Enter Password"/>
        <input id={styles.storeName} className="inputField" type="text" placeholder="Enter Store Name"/>
        <button id={styles.loginbutton} onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <div style={{marginTop: 20}}>
            Dev Tools: <br/>
            <button onClick={loginStoreOwner}>Login Store Owner [Dev]</button>
            <button onClick={loginSiteAdmin}>Login Site Admin [Dev]</button>
        </div>
    </div>)
}
