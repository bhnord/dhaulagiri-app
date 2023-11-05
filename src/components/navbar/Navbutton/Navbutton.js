import { useNavigate } from 'react-router-dom'
import styles from './Navbutton.module.css'
import { Link } from 'react-router-dom';
export default function Navbutton({text, link}){
    const navigate = useNavigate();
    return (
        <Link className={styles.link} to={link}>{text}</Link>
    )
}