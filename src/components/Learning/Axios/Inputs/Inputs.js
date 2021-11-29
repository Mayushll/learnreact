import React from 'react';
import {Input} from "../../../../shared/Input/Input";
import {Button} from "../../../../shared/Button/Button";

export function Inputs({url, setUrl, startNumber, setStartNumber, setEndNumber, endNumber, setPostUrl}) {
    return (
        <div>
            <Input
                text={"Ссылка на get-запрос"}
                style={{width: "50vw"}}
                value={url}
                onChange={(e) => {
                    setUrl(e.target.value)
                }}
            />
            <Button
                onClick={() => {
                    setPostUrl(url)
                }}
            >
                Отправить запрос
            </Button>
            <Input
                text={"Количество фото на странице"}
                value={startNumber}
                onChange={(e) => {
                    setStartNumber(+e.target.value)
                }}
            />
            <Input
                text={"Номер страницы"}
                value={endNumber}
                onChange={(e) => {
                    setEndNumber(+e.target.value)
                }}
            />
        </div>
    );
}