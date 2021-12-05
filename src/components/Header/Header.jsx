import React from 'react';
import {Nav} from "./Nav/Nav";
import elka from "./elka.png"
import styles from "./Header.module.scss"
export function Header(props) {
    return (
        <div className={styles.header}>
            <Nav/>
            <img className={styles.elka} src={elka} alt="elka"/>
        </div>
    );
}