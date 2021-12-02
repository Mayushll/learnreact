import React, {useEffect, useState} from 'react';
import {Input} from "../../../../shared/Input/Input";
import {PromiseText} from "./PromiseText/PromiseText";

export function LearnPromise() {
    const [textPromise, setTextPromise] = useState("")
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
                    }, textPromise * 1000)
            })
        }
        promise().then(() => {
            setTextResolve("Сработало")
            setTimeout(() => {setTextResolve("")}, 1000
            )
        })
        promise().catch( () => {
            setTextRejected("ОШИБКА")
            setTimeout(() => {setTextRejected("")}, 1000
            )
        })
        return () => {
            
        }
    }, [textPromise, isFirst])
    return (
        <div>
            <div>Настраиваем таймер для Promise</div>
            <Input
                 onChange={(e) => {
                     setTextPromise(e.target.value)
                 }}
                 value={textPromise}
                 checked=""
                 placeholder="Таймер для Promise"
            />
            <PromiseText
                textPromise={textPromise}
                textResolve={textResolve}
                textRejected={textRejected}
            />
        </div>
    );
}