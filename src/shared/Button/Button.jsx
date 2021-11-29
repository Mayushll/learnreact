import React, {useContext} from 'react';
import styles from "./Button.module.scss"
import ThemeContext from "../../Context/ThemeContext";
export function Button(props) {
    const contextTheme = useContext(ThemeContext)
    return (
           <button {...props} className={`${styles.button} ${contextTheme.theme === "light" ? styles.light : styles.dark}`}>
               {props.children}
           </button>
    );
}

