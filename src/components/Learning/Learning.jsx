import React from 'react';
import {useTitle} from "../../hooks/useTitle";
import {NavItem} from "../Header/Nav/NavList/NavItem/NavItem";
import {Outlet} from "react-router-dom"
import styles from "./Learning.module.scss"

export function Learning(props) {
    useTitle("Материалы")
    return (
        <div>
            <h3 className={styles.title}>Сюда добавляю всякие штучки, которые не знаю где применить на странице.</h3>
            <div style={{display: "flex"}}>
                <NavItem className={styles.item} post={{title: "Promises", url: "learning/promises"}}/>
                <NavItem className={styles.item} post={{title: "Axios", url: "learning/axios"}}/>
                <NavItem className={styles.item} post={{title: "Pagination", url: "learning/pagination"}}/>
            </div>
            <Outlet/>
        </div>
    );
}