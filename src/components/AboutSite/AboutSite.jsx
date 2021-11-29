import React from 'react';
import styles from "./AboutSite.module.scss"

export function AboutSite(props) {
    return (
        <div className={styles.background}>
            <span className={styles.title}>COLORS:</span>
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
            <span className={styles.title}> Fonts: </span>
            <div className={styles.ubuntu}>Ubuntu</div>
        </div>
    );
}