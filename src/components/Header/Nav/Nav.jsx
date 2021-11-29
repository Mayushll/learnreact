import React from 'react';
import {NavList} from "./NavList/NavList";
import {Logo} from "./Logo/Logo";
export function Nav(props) {
    return (
        <div>
            <Logo/>
            <NavList/>
        </div>
    );
}

