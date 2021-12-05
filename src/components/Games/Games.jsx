import React, {useState} from 'react';
import {Clicker}from "./Clicker/Clicker";
import {useTitle} from "../../hooks/useTitle";
import {Modal} from "../../shared/Modal/Modal";
import styles from "./Games.module.scss"
import {Button} from "../../shared/Button/Button";

export const Games = React.memo((props) => {
    const [clickerModalActive, setClickerModalActive] = useState(false)
    useTitle("Игры")
    return (
        <div>
            <h1>Игры</h1>
                <Modal active={clickerModalActive} setActive={setClickerModalActive}>
                    <Clicker/>
                </Modal>
            <div className={styles.clicker} onClick={() => {setClickerModalActive(true)}}>Clicker</div>
        </div>
    );
})