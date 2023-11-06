import {createContext, useContext, useEffect, useState} from "react";
import { api } from "../api/api-client";
const AuthContext = createContext({
    auth: null,
    user: null,
    setAuth: () => {}
})

export let useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuth = async () => {
            // TODO: implement user checking
            // TODO: set checking
            if (user) {
                api.login(user.username, user.password, user.storeName);
                setAuth(true);
            } else {
                api.logout();
                setAuth(false);
            }
        };
        isAuth();
    }, [user])

    return (
        <AuthContext.Provider value={
            {auth, setUser, user}
        }>
            {children} </AuthContext.Provider>
    )

}
