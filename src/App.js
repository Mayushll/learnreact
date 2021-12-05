import React, {useContext, useEffect} from 'react';
import {darkTheme, lightTheme} from "./Context/ThemeContext";
import {Wrapper} from "./components/Wrapper/Wrapper";
import "./App.styles/App.scss";
import "./App.styles/fonts.scss"
import "./App.styles/reset.scss"
import ThemeContext from "./Context/ThemeContext";
import {Music} from "./components/Music/Music";

export function App(props) {
    const contextTheme = useContext(ThemeContext)

    useEffect(
        () => {
            let body = document.querySelector("html")//так делать нельзя, но пока не знаю как избавится
            body.style.backgroundColor = contextTheme?.theme === "light" ? "rgb(220, 220, 220)" : "rgb(20, 20, 20)"
        }
    )
        return (
                <div className="App"
                    style={contextTheme?.theme === "light" ? lightTheme : darkTheme}>
                    <Wrapper/>
                    <Music/>
                </div>
        );
}
