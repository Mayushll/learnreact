import React from 'react';
import {MyProfile} from "./MyProfile/MyProfile";
import {useTitle} from "../../hooks/useTitle";

export function Profile(props) {
    useTitle("Профиль")
    return (
        <div>
            <MyProfile/>
        </div>
    );
}