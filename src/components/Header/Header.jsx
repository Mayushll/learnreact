import React from 'react';
import elka from "./elka.png"
import styles from "./Header.module.scss"
import {NavList} from "./NavList/NavList";
export function Header(props) {
    return (
        <div className={styles.header}>
            <NavList/>
            <img className={styles.elka} src={elka} alt="elka"/>
        </div>
    );
}