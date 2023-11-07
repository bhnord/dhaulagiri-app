import styles from "./Navbar.module.css"
import Navbutton from "./Navbutton/Navbutton";
import { useAuth } from "../../auth/AuthContext";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { auth, setUser, user } = useAuth();

  const logout = () => {
    setUser(null);
  }

  return <div className={styles.navbar}>
    <Navbutton text="Home" link="/" />
    <Navbutton text="Site Manager Home" link="/sitemanager" />
    <Navbutton text="Store Owner Home" link="/storeowner" />
    {auth ?
      (<div>
        <Link to="/login">
          <button className={styles.button} onClick={logout}>Logout</button>
        </Link>
          (Logged in as {user?.username})
      </div>) :
      (<div>
        <Link to="/login">
          <button className={styles.button}>Login/Sign Up</button>
        </Link>
      </div>)}

  </div>
}
