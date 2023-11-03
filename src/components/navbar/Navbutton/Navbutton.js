import styles from './Navbutton.module.css'
export default function Navbutton({text, link}){
    return (
        <a className={styles.link} href={link}>{text}</a>
    )
}