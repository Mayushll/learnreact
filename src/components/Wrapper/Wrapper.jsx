import React from 'react';
import scss from "./Wrapper.module.scss";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";

export function Wrapper(props) {
    return (
        <div className={scss.app}>
            <div className={scss.header} style={props.theme}>
                <Header/>
            </div>
            <div className={scss.main}>
                <Main/>
            </div>
        </div>
    );
}