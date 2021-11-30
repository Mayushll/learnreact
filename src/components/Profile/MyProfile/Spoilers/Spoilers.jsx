import React from 'react';
import {Spoiler} from "../../../../shared/Spoiler/Spoiler";
import styles from "./Spoilers.module.scss"

export function Spoilers(props) {
    return (
        <div>
            <Spoiler title="Hard-skills">
                <b> Умею пользоваться: </b>
                <ul className={styles.list}>
                    <li>HTML (БЭМ, адаптивная верстка)</li>
                    <li> CSS (SASS/SCSS/module)</li>
                    <li> JS</li>
                    <li> React</li>
                    <li> MobX</li>
                    <li> Git (на уровне git add+git push+git commit)</li>
                    <li> Gulp (свободно пользуюсь)</li>
                    <li> Photoshop</li>
                    <li> Figma (на уровне верстки макета оттуда)</li>
                    <li> Векторные редакторы (запилить лого, перевести из растрового в векторный и т.п.)</li>
                    <li> Есть опыт работы копирайтером/переводчиком</li>
                    <li> Английский - Intermediate (B1)</li>
                </ul>

                <b> Готов быстро выучить при необходимости: </b>
                <ul className={styles.list}>
                <li>  Bootstrap </li>
                <li>  jQuery </li>
                <li>  styled-components </li>
                <li>  redux </li>
                </ul>
            </Spoiler>
            <Spoiler title="Soft-skills">
                <ul className={styles.list}>
                    <li> Дружелюбный </li>
                    <li>  Трудолюбивый </li>
                    <li>  Общительный </li>
                    <li>  Cтрессоустойчивый  </li>
                    <li> Иногда смешно шучу  </li>
                </ul>
            </Spoiler>
            <Spoiler title={<span>Другие навыки <i>(not necessary)</i></span>}>
                <ul className={styles.list}>
                    <li>   Могу поддержать разговор на темы:  </li>
                        <ul>
                            &nbsp;&nbsp;&nbsp;      - музыка (музыкальные инструменты, рок/метал). <br />
                            &nbsp;&nbsp;&nbsp;      - игры (Dota 2, LoL, Герои 3, Warcraft, шутеры). <br />
                            &nbsp;&nbsp;&nbsp;      - аниме: <a className={styles.url} href="https://shikimori.one/InversionSpells/list/anime/order-by/rate_score">Shikimori</a> <br />
                            &nbsp;&nbsp;&nbsp;      - фильмы, сериалы, книги <br />
                        </ul>
                    <li>    Умею играть в шахматы, шашки, покер.  </li>
                    <li>    Хорошо играю на гитаре </li>
                    <li>   Немного умею рисовать </li>
                    <li>   Практикую заваривание кофе и изготовление бутербродов.  </li>
                    <li>    Хорошо фотографирую, есть зеркальный фотик. </li>
                </ul>
            </Spoiler>
        </div>
    );
}