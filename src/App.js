import React, {useContext, useEffect, useState} from 'react';
import {darkTheme, lightTheme} from "./Context/ThemeContext";
import {Wrapper} from "./components/Wrapper/Wrapper";
import "./App.styles/App.scss";
import "./App.styles/fonts.scss"
import "./App.styles/reset.scss"
import ThemeContext from "./Context/ThemeContext";
import {Music} from "./components/Music/Music";
import MediaQuery from "./store/MediaQuery";

export function App(props) {
    const contextTheme = useContext(ThemeContext)
        useEffect(
            () => {
                console.log("-")
                console.log("Здарова, сталкер. Я тебя спас и в благородство играть не буду:" +
                    " подскажешь мне как убрать оповещения о недостающих зависимостях useEffect в консольке и мы в расчете." +
                    " А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе эти джуны сдались, но я в чужие дела не лезу, хочешь нанять - значит есть за что." +
                " И страничку надо обновлять после F12, чтобы корректно отображалось т.к. стили зависят от состояния, не знаю нужно ли это фиксить и как это сделать, буду рад если кто-нибудь обьяснит."
                )
                console.log("-")
            }
        )
        useEffect(
            () => {
                let body = document.querySelector("html")//так делать нельзя, но пока не знаю как по-другому сделать.
                body.style.backgroundColor = contextTheme?.theme === "light" ? "rgb(220, 220, 220)" : "rgb(20, 20, 20)"
            }
        )

    useEffect(() => {
            window.addEventListener('resize', MediaQuery.matchQuery)
            return () => window.removeEventListener('resize', MediaQuery.matchQuery)
        }, [MediaQuery.matchQuery]
    )



        return (
                <div className="App"
                    style={contextTheme?.theme === "light" ? lightTheme : darkTheme}>
                    <Wrapper/>
                    <Music/>

                </div>
        );
}
