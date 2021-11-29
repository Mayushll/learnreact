import React from 'react';

export function PromiseText({textPromise, textResolve, textRejected}) {
    return (
        <div>
            {textPromise ?
                <div>Этот промис сработает
                    {textPromise > 0 ?
                        <span> через {textPromise} секунд</span> :
                        <span> моментально </span>
                    }
                </div> :
                <div> </div>}
            {textResolve  ?  <div> Cработал </div> : <div> </div>}
            {textRejected ?  <div> Ошибка </div> : <div> </div>
            }
        </div>
    );
}