import {useAuth} from "../../auth/AuthContext";
import {api} from "../../api/api-client";
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


    return (<div>
        <input id="username" type="text" placeholder="username"/>
        <input id="password" type="password" placeholder="password"/>
        <input id="storeName" type="text" placeholder="store name"/>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <div style={{marginTop: 20}}>
            Dev Tools: <br/>
            <button onClick={loginStoreOwner}>Login Store Owner [Dev]</button>
            <button onClick={loginSiteAdmin}>Login Site Admin [Dev]</button>
        </div>
    </div>)
}
