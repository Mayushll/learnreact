import React, {useEffect, useState} from 'react';
import {Input} from "../../../../shared/Input/Input";
import {PromiseText} from "./PromiseText/PromiseText";
import {Button} from "../../../../shared/Button/Button";

export function LearnPromise() {
    const [seconds, setSeconds] = useState("")
    const [value, setValue] = useState(0)
    const [textResolve, setTextResolve] = useState("")
    const [textRejected, setTextRejected] = useState("")
    const [isFirst, setIsFirst] = useState(true)
    useEffect( () => {
        if (isFirst) {
            setIsFirst(false);
            return
        }
        function promise() {
            return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let isWork = Math.floor(Math.random() * 10)
                        if (isWork > 7) {
                            reject()
                        }
                        resolve()
                    }, seconds * 1000)
            })
        }
        promise().then(() => {
            setTextResolve("Сработало")
            setTimeout(() => {setTextResolve("")
                }, 1000
            )
        })
        promise().catch( (e) => {
            setTextRejected("ОШИБКА")
            setTimeout(() => {setTextRejected("")}, 1000
            )
        })
        return () => {
            
        }
    }, [seconds, isFirst])
    return (
        <div>
            <div>
                <p>
                    Функцию для перевода секунд в текст взял со своего <a href="https://www.codewars.com/users/MayushiiChan/stats">CodeWars</a>. < br/>
                    Завел недавно, но стараюсь там сидеть. <br />
                    <br />
                    <b> Настраиваем таймер для Promise </b> <br />
                </p>
            </div>
            <Input
                 onChange={(e) => {
                     setValue(e.target.value)
                 }}
                 value={value}
                 maxlength="10"
                 checked=""
                 placeholder="Таймер для Promise"
            />
            <Button onClick={ () => setSeconds(value)}>Отправить запрос</Button>
            <PromiseText
                seconds={seconds}
                textResolve={textResolve}
                textRejected={textRejected}
            />
        </div>
    );
}