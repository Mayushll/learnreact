import React, {useEffect, useRef, useState} from 'react';
import styles from "./Input.module.scss"
export function Input(props) {
    const [width, setWidth] = useState(0)
    const input = useRef()
    const div = useRef()
    useEffect(
        () => {
            if(input.current?.value && width < document.documentElement.clientWidth/1.5) {
                div.current.innerText = input.current.value;
                setWidth(div.current?.offsetWidth)
            }
        }, [input.current?.value]
    )
    return (
        <div>
            <p>{props.text}</p>
            <input
                style={{width: width + 20 + "px"}}
                ref={input}
                className={styles.input}
                {...props}
            />
            <div
                ref={div}
                className={styles.div}>
            </div>
        </div>
    );
}

