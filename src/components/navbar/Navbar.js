import styles from "./Navbar.module.css"
import Navbutton from "./Navbutton/Navbutton";
export default function Navbar() {
  return <div id={styles.navbar}>
    <Navbutton text="Home" link="/"/>
    <Navbutton text="Site Manager Home" link="/sitemanager"/>
    <Navbutton text="Store Manager Home" link="/storemanager"/>
  </div>
}
