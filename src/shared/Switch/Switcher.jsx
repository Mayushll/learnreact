import React from 'react';
import scss from "./Switch.module.scss"
import {useLocalStorage} from "../../hooks/useLocalStorage";

export function Switcher(props) {
    const [check, setCheck] = useLocalStorage(false, props.keyStorage)
    return (
        <label className={scss.checkbox} >
            <input type="checkbox"
                   onChange={() => {
                       setCheck(!check)
                       props.change()
                   }}
                   checked={check ? "checked" : ""}
            />
            <span className={scss.switcher}
                  style={{background: check ?  props.color :  props.activeColor}}>
            </span>
            <span className={scss.switch}> </span>
        </label>
    );
}
