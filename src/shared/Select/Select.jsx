import React, {useContext} from 'react';
import styles from "../Select/Select.module.scss";
import ThemeContext from "../../Context/ThemeContext";

export function Select(props) {
    const contextTheme = useContext(ThemeContext)
    return (
        <select
            {...props} className={`${styles.select} ${contextTheme.theme === "light" ? styles.light : styles.dark}`}
        />
    );
}

