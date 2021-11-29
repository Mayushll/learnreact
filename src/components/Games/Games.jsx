import React, {useState} from 'react';
import {Clicker}from "./Clicker/Clicker";
import {useTitle} from "../../hooks/useTitle";
import {Modal} from "../../shared/Modal/Modal";
import {Button} from "../../shared/Button/Button";

export const Games = React.memo((props) => {
    const [clickerModalActive, setClickerModalActive] = useState(false)
    useTitle("Игры")
    return (
        <div>
                <Modal active={clickerModalActive} setActive={setClickerModalActive}>
                    <Clicker/>
                </Modal>
            <Button onClick={() => {setClickerModalActive(true)}}>Clicker</Button>
        </div>
    );
})