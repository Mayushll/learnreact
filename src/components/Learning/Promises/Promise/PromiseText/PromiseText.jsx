import React, {useEffect, useRef, useState} from 'react';
import {formatDuration} from "../../../../../Functions/formatDuration"
export function PromiseText({seconds, textResolve, textRejected}) {
    const [textPromise, setTextPromise] = useState()
    const firstUpdate = useRef(true);
    useEffect(
        () => {
            if (firstUpdate.current) {
                firstUpdate.current = false;
                return;
            }
                setTextPromise(formatDuration(seconds))

                 console.log(textPromise)
        }, [seconds]
    )

    return (
        <div>
            {(textPromise || textPromise === 0) ?
                <div>This promise will be triggered
                    {textPromise === 0 ?
                        <span> now </span> :
                        <span> in {textPromise} </span>
                    }
                </div> :
                <div> </div>}
            {textResolve  ?  <div> Cработал </div> : <div> </div>}
            {textRejected ?  <div> Ошибка(Рандом) </div> : <div> </div>
            }
        </div>
    );
}