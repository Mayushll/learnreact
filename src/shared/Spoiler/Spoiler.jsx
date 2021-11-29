import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from "./Spoiler.module.scss"
import ThemeContext from "../../Context/ThemeContext";

export function Spoiler(props) {
    const [isOpen, setIsOpen] = useState(false)
    const spoiler = useRef()
    const div = useRef()
    const contextTheme = useContext(ThemeContext)
    const [height, setHeight] = useState()


    useEffect (
        () => {
            setHeight(div.current.clientHeight)
        }, []
    )
    useEffect(
        () => {
            console.log("1ef")
            if(!isOpen) {
                spoiler.current.style.height = "7vh"
                div.current.style.height = 0

            }
            else{
                spoiler.current.style.height = height + 50 + "px" //+50 - это временный рабочий костыль, потом вместо 50 буду вычислять высоту тайтла
                div.current.style.height = height
            }
        }, [isOpen, height]
    )

    return (
        <div className={styles.wrapper} ref={spoiler}>
                <div >
                    <summary onClick={(e) =>{
                        setIsOpen(!isOpen)
                    }}
                        style={{backgroundColor: contextTheme.theme === "dark" ? "rgb(40, 40, 40)" : "rgb(200, 200, 200)"}}
                        className={styles.title}
                    >
                        {props.title}
                    </summary>
                    <div
                        className={`${styles.text} ${isOpen ? styles.open : styles.close}`}
                    >
                        <div ref={div}>{props.children}</div>
                    </div>
                </div>
        </div>
    );
}

