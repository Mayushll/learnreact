import React, {useContext} from 'react';
import styles from "./NavItem.module.scss";
import {NavLink} from "react-router-dom";
import ThemeContext from "../../../../../Context/ThemeContext";



export function NavItem(props) {
    const contextTheme = useContext(ThemeContext)
    return (
        <div>
            <NavLink   className={
                contextTheme.theme === "dark"
                    ? styles.itemDark
                    : styles.itemWhite
            }
                     style={({ isActive }) => ({
                         color: contextTheme.theme === "dark" ?
                             isActive ? "rgb(30, 144, 255)" : "rgb(220,220,220)" :
                             isActive ? "rgb(30, 144, 255)" : "rgb(20, 20, 20)",
                         }
                         )}
                     to={"/"+ props.post.url}>{props.post.title}</NavLink>
        </div>
    );
}