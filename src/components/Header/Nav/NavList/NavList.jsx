import React, {useContext, useEffect, useRef} from 'react';
import styles from "./NavList.module.scss"
import {NavItem} from "./NavItem/NavItem";
import {BurgerMenu} from "../../../../shared/BurgerMenu/BurgerMenu";
import BurgerChecked from "../../../../store/BurgerChecked";
import {observer} from "mobx-react-lite";
import ThemeContext from "../../../../Context/ThemeContext";


export const NavList = observer((props) =>  {
    const burger = useRef()
    const contextTheme = useContext(ThemeContext)
    useEffect(
        () => {
            if (document.documentElement.clientWidth < 800) {
                burger.current.style.opacity = BurgerChecked.isChecked ? "1" : "0"
                burger.current.style.pointerEvents = BurgerChecked.isChecked ? "auto" : "none"
            }
        }, [BurgerChecked.isChecked]
    )
    useEffect(
        () => {
            if (document.documentElement.clientWidth < 800) {
                contextTheme.theme === "dark" ? burger.current.style.backgroundColor = "rgb(30, 30, 30)" : burger.current.style.backgroundColor = "rgb(210, 210, 210)"
            }
        }, [contextTheme.theme]
    )

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <NavItem className={styles.item} post={{title: "Profile", url:""}}/>
                <NavItem className={styles.item} post={{title: "Posts", url:"posts"}}/>
                <NavItem className={styles.item} post={{title: "Settings", url:"Settings"}}/>
                <NavItem className={styles.item} post={{title: "Games", url:"Games"}}/>
                     <div ref={burger} className={`${styles.burger} ${BurgerChecked.isChecked ? styles.active : styles.notActive}`}>
                        <NavItem className={styles.item} post={{title: "Todo", url:"todo"}}/>
                        <NavItem className={styles.item} post={{title: "Learning", url:"Learning"}}/>
                        <NavItem className={styles.item} post={{title: "AboutSite", url:"aboutSite"}}/>
                    </div>
                <BurgerMenu/>
            </ul>
        </div>
    );
})
