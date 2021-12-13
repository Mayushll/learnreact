import React, {useContext} from 'react';
import styles from "./NavItem.module.scss";
import {NavLink} from "react-router-dom";
import ThemeContext from "../../../../Context/ThemeContext";



export function NavItem(props) {
    const contextTheme = useContext(ThemeContext)
    return (
            <NavLink className={
                contextTheme.theme === "light"
                    ? styles.itemWhite
                    : styles.itemDark
            }
                     to={"/"+ props.post.url}>{props.post.title}</NavLink>
    );
}