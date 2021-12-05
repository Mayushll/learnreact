import React, {useRef, useState} from 'react';
import scss from "./Box.module.scss";
import Asuna from "./images/Asuna.png";
import Kirito from "./images/Kirito.png";
import Lizbeth from "./images/Lizbeth.png";
import {useScore} from "../useScore";
import {Button} from "../../../../shared/Button/Button";
import {reset} from "../reset";

export const Box = (({position, setPosition, clickListener1, clickListener2, setClickListener1, setClickListener2}) => {
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const kirito = useRef(null)
    const asuna = useRef(null)
    const lizbeth = useRef(null)
    useScore(position, setPosition, kirito, lizbeth, asuna, clickListener1, clickListener2, setClickListener1, setClickListener2, setScore1, setScore2, score1, score2)
    return (
        <div>
            <div className={scss.box} >
                <div className={scss.player}>
                        <div>Player One</div>
                        <div> Счет {score1}</div>
                        <div> Клики {clickListener1}</div>
                </div>
                <div className={scss.chibi} ref={asuna} style={{marginRight: 10 + "vw"}}>
                    <img src={Asuna} alt="Asuna"/>
                </div>
                <div className={scss.chibi} ref={kirito} style={{position: "relative", right: position + "vw", marginRight: 10 + "vw"}}>
                    <img src={Kirito} alt="Kirito"/>
                </div>
                <div className={scss.chibi} ref={lizbeth} style={{width: 8 + "vw", height: 10 + "vw"}}>
                    <img src={Lizbeth} alt="Lizbeth"/>
                </div>
                <div className={scss.player}>
                    <div>Player Two</div>
                    <div>{score2} Счет </div>
                    <div>{clickListener2} Клики </div>
                </div>
            </div>
            <Button style={{margin: "30px auto",}}
                onClick={() => reset(setPosition, setClickListener1, setClickListener2, setScore1, setScore2)}>
                RESET
            </Button>
        </div>
    );
})
