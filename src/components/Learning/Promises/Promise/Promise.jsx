import React, {useEffect, useState} from 'react';
import {Input} from "../../../../shared/Input/Input";
import {PromiseText} from "./PromiseText/PromiseText";

export function LearnPromise() {
    const [seconds, setSeconds] = useState("")
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
            setTimeout(() => {setTextResolve("")}, 1000
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
                    Настраиваем таймер для Promise <br />
                    Функцию для перевода секунд в текст взял со своего <a href="https://www.codewars.com/users/MayushiiChan/stats">CodeWars</a>)
                </p>
            </div>
            <Input
                 onChange={(e) => {
                     setSeconds(e.target.value)
                 }}
                 value={seconds}
                 checked=""
                 placeholder="Таймер для Promise"
            />
            <PromiseText
                seconds={seconds}
                textResolve={textResolve}
                textRejected={textRejected}
            />
        </div>
    );
}