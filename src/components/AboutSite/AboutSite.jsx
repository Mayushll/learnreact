import React, {useContext} from 'react';
import styles from "./AboutSite.module.scss"
import ThemeContext from "../../Context/ThemeContext";

export function AboutSite(props) {
    const contextTheme = useContext(ThemeContext)
    return (
        <div className={`${styles.background} ${contextTheme.theme === "light" ? styles.light : styles.dark}`}>
            <div className={styles.colors}>
                <span className={styles.title}>Colors:</span>
                <div className={styles.wrapper}>
                    <div className={`${styles.circle} ${styles.black}`}> </div>
                    <div className={styles.blackText}>rgb(20, 20, 20),</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={`${styles.circle} ${styles.white}`}> </div>
                    <div className={styles.whiteText}>rgb(220, 220, 220)</div>
                </div>
                <div className={styles.wrapper}>
                    <div className={`${styles.circle} ${styles.blue}`}> </div>
                    <div className={styles.blueText}>rgb(30, 144, 255)</div>
                </div>
            </div>
            <div className={styles.fonts}>
                <span className={styles.title}> Fonts: </span>
                <div className={styles.ubuntu}>Ubuntu</div>
            </div>
        </div>
    );
}