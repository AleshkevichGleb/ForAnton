import { Link } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation"
import styles from "./Header.module.css"

export const Header = () => {
    return(
        <div className={styles.header}>
            <Link to = '/'>LOGO</Link>
            <Navigation/>
        </div>
    )
}