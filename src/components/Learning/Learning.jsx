import React from 'react';
import {useTitle} from "../../hooks/useTitle";
import scss from "../Header/Nav/NavList/NavList.module.scss";
import {NavItem} from "../Header/Nav/NavList/NavItem/NavItem";
import {Outlet} from "react-router-dom"

export function Learning(props) {
    useTitle("Материалы")
    return (
        <div>
            <div style={{display: "flex"}}>
                <NavItem className={scss.item} post={{title: "Promises", url: "learning/promises"}}/>
                <NavItem className={scss.item} post={{title: "Axios", url: "learning/axios"}}/>
                <NavItem className={scss.item} post={{title: "Pagination", url: "learning/pagination"}}/>
            </div>
            <Outlet/>
        </div>
    );
}