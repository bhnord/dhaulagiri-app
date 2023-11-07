import {useAuth} from "../../auth/AuthContext";
import {api} from "../../api/api-client";
export default function LoginPage() {
    const {setUser, user} = useAuth();
    const loginStoreOwner = () => {
        setUser({username: "sam", password: "samantha", storeName: "Sam Store"})
    }
    const loginSiteAdmin = () => {
        setUser({username: "computerStoreAdmin", password: "dhaulagiri", storeName: "Computer Store"})
    }

    const login = () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const storeName = document.getElementById("storeName").value
        setUser({username: username, password: password, storeName: storeName})
    }

    const logout = () => {
        setUser(null)
    }


    return (<div>
        <input id="username" type="text" placeholder="username"/>
        <input id="password" type="password" placeholder="password"/>
        <input id="storeName" type="text" placeholder="store name"/>
        <button onClick={loginStoreOwner}>Login Store Owner [Dev]</button>
        <button onClick={loginSiteAdmin}>Login Site Admin [Dev]</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>)
}
