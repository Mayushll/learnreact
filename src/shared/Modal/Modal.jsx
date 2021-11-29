import React, {useContext} from 'react';
import scss from "./Modal.module.scss"
import ThemeContext from "../../Context/ThemeContext";


export function Modal({children, active, setActive}) {
    const context = useContext(ThemeContext)
    return (
        <div className={scss.modal}
             onClick={() => {setActive(false)}}
             style={{
                 opacity: active ? "1" : "0",
                 pointerEvents: active ? "all" : "none",
             }}
        >
            <div  className={scss.modal__content} onClick={event => event.stopPropagation()}
                  style={{
                      backgroundColor: context.theme === "dark" ? "rgb(40, 40, 40)" : "rgb(200, 200, 200)"
                  }}>
                {children}
            </div>
        </div>
    );
}

