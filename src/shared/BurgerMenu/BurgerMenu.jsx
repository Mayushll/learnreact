import React from 'react';
import styles from "./BurgerMenu.module.scss"
import BurgerChecked from "../../store/BurgerChecked";
import {observer} from "mobx-react-lite";


export const BurgerMenu = observer((props) => {
    return (
        <div className={styles.wrapper}>
            <div className={`  ${styles.button} ${BurgerChecked.isChecked ? styles.active : styles.notActive}`}
                 onClick={() => BurgerChecked.setIsChecked(BurgerChecked.isChecked)}>
                <span className={styles.span}> </span>
                <span className={styles.span}> </span>
                <span className={styles.span}> </span>
            </div>
        </div>
    );
})
