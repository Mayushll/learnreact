import React, {useContext} from 'react';
import {Switcher} from "../../shared/Switch/Switcher";
import ThemeContext from "../../Context/ThemeContext";
import {useTitle} from "../../hooks/useTitle";
import MusicPlayer from "../../store/MusicPlayer";
import {Input} from "../../shared/Input/Input";
import {observer} from "mobx-react-lite";

export const Settings = observer((props) => {
    const context = useContext(ThemeContext)
    useTitle("Настройки")

    function changeVisible() {
        MusicPlayer.changeVisible(MusicPlayer.isVisible)
    }
    return (
        <div>
            <h1>Настройки</h1> {<br/>}
            Сменить тему: {<br/>}
            <Switcher
                color={"white"}
                activeColor={"black"}
                change={context.change}
                keyStorage={"theme"}
            >
            </Switcher> {<br/>}
            Включить музыкальный плеер{<br/>}
            <Switcher
                color={"white"}
                activeColor={"black"}
                change={changeVisible}
                keyStorage={"music"}
            >
            </Switcher> <br />
            Ccылка (на радиостанцию или трек)
            <Input
                value={MusicPlayer.radioUrl}
                onChange={ (e) => MusicPlayer.changeRadio(e.target.value)}
            />
        </div>
    );
})