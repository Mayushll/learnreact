import React from 'react';
import scss from "./Settings.module.scss";

export function Settings() {
    return (
        <div className={scss.settings}>
            <div className={scss.settings__title}>Управление</div>
            <div className={scss.controls}>
                <div className={scss.controls__one}>Q, E на клавиатуре или кнопка под персонажем</div>
                <div className={scss.controls__two}>I, P на клавиатуре или кнопка под персонажем</div>
            </div>
        </div>
    );
}
