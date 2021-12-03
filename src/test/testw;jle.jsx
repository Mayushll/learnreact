import React from 'react';

export const BeastForm = () => {
    let beastToRelease = {
        value: null
    }
    return(
        <form id="beastForm">
            <input
                value={beastToRelease.value}
            />
            <button id="submit" onClick={
                (e) => {
                    e.preventDefault()
                }
            }>
            </button>
        </form>
    )
};