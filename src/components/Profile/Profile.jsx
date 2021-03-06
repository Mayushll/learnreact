import React, {useEffect,  useState} from 'react';
import avatar from "./Avatar.webp"
import styles from "./Profile.module.scss"
import {getAge} from "../../Functions/getAge";
import {Spoilers} from "./Spoilers/Spoilers";
export const Profile = () => {
    const [avatarScope, setAvatarScope] = useState(false)
    useEffect(
        () => {
            document.documentElement.addEventListener("click", ()=>setAvatarScope(false))
            return () => {
                document.documentElement.removeEventListener("click", ()=>setAvatarScope(false))
            }
        }
    )

    return (
        <div >
            <div className={styles.profile}>
                    <img
                        onClick={(e) => {
                            e.stopPropagation()
                            setAvatarScope(!avatarScope)
                        }
                        }
                        className={avatarScope ? styles.avatarScope : styles.avatar} src={avatar} alt="Аватар"
                    />
                <div>
                    <span className={styles.name}>Бородин Владислав</span> <br/>
                    {getAge("2003.6.27")} <br/>
                    <a className={styles.url} href="https://wa.me/+79193930621">WhatsApp</a> <br />
                    <a className={styles.url} href="tel:+79193930621">+7-919-393-06-21</ a> <br />
                    <a className={styles.url} href="https://vk.com/mayushiides">ВКонтакте</ a> <br />
                    <a className={styles.url} href="https://github.com/Mayushll">GitHub</ a> <br />
                    <a href="https://www.codewars.com/users/MayushiiChan/stats">CodeWars</a>
                </div>
            </div>
            <br />
            Ищу вакансию желательно в Екатеринбурге или удаленно на должность <b>Trainee/Junior Frontend разработчика.</b> <br />
            С радостью готов к стажировке <br />
            Возможен релокейт, если вычтите деньги на билеты из зарплаты =) <br />
            Нравится React, но готов перейти на другой фреймворк. <br />
            Сайт находится в режиме вечной разработки (до вката), нужен для портфолио и мотивации учиться - поэтому ежедневно обновляется.
            <Spoilers/>

        </div>
    );
};