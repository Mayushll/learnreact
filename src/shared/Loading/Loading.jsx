import React from 'react';
import "./Loading.scss"
import spinner from "./spinner-kaneki.png"
export function Loading(props) {
    return (
            <div className="lds-dual-ring">
                <img src={spinner} alt="spinner">

                </img>
            </div>
    );
}

