import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/settings'>Settings</Link>
        </nav>
    )
}