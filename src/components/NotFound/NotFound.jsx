import React, {useContext} from 'react';
import NotFoundWhite from "./images/NotFoundWhite.webp"
import NotFoundBlack from "./images/NotFoundBlack.webp"
import ThemeContext from "../../Context/ThemeContext";
export function NotFoundComponent(props) {
    const contextTheme = useContext(ThemeContext)
    return (
        <div>
            Похоже, вы где-то накосячили и ничего не нашли.
            {contextTheme.theme === "dark" ? <img src={NotFoundBlack} alt={404}/> : <img src={NotFoundWhite} alt={404}/>}
        </div>
    );
}