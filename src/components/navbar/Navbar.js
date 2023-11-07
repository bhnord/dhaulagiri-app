import styles from "./Navbar.module.css"
import Navbutton from "./Navbutton/Navbutton";
import { useAuth } from "../../auth/AuthContext";
export default function Navbar() {
  const {auth, user} = useAuth()
  return <div id={styles.navbar}>
    {auth ? <span>Logged in as: "{user?.username}" of "{user?.storeName}"</span> : <span>Not Logged In</span>}
    <Navbutton text="Login" link="/login"/>
    <Navbutton text="Home" link="/"/>
    <Navbutton text="Site Manager Home" link="/sitemanager"/>
    <Navbutton text="Store Owner Home" link="/storeowner"/>
    <Navbutton text="Customer Home" link="/customer"/>
    <Navbutton text="Create Store" link="/createstore"/>
  </div>
}
