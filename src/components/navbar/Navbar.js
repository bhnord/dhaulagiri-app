import styles from "./Navbar.module.css"
import Navbutton from "./Navbutton/Navbutton";
import { useAuth } from "../../auth/AuthContext";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const { auth, setUser, user } = useAuth();

  const logout = () => {
    setUser(null);
    navigate("/login")
  }

  const home = () => {
    navigate("/customer")
  }

  return <div className={styles.navbar}>
    {auth ?
      (<div className={styles.navbar}>
        <label className = {styles.navbarlabel}> {"Welcome, " + (user?.username) + '!'} </label>
        <button className={styles.button} onClick={home}>Home</button>
        <Navbutton text="Site Manager Home" link="/sitemanager" />
        <Navbutton text="Store Owner Home" link="/storeowner" />
        <button className={styles.button} onClick={logout}>Logout</button>
      </div>) :
      (<div className={styles.navbar}>
        <label className = {styles.navbarlabel}> {"Welcome, Customer!"} </label>
        <button className={styles.button} onClick={home}>Home</button>
        <Navbutton text="Site Manager Home" link="/sitemanager" />
        <Navbutton text="Store Owner Home" link="/storeowner" />
        <button className={styles.button} onClick={logout}>Log In/Sign In</button>
      </div>)}

  </div>
}
