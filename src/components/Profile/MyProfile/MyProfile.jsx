import React, {useEffect, useState} from 'react';
import avatar from "./Avatar.webp"
import styles from "./MyProfile.module.scss"
import {getAge} from "../../../Functions/getAge";
import {Spoilers} from "./Spoilers/Spoilers";
export const MyProfile = () => {
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
        <div>
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
                    <span> <b> Возьмите на работу пожалуйста </b> </span><br/>
                    Бородин Владислав <br/>
                    {getAge("2003.6.27")} <br/>
                    <a className={styles.url} href="https://wa.me/+79193930621">WhatsApp</a> <br />
                    <a className={styles.url} href="tel:+79193930621">+7-919-393-06-21</ a> <br />
                    <a className={styles.url} href="https://vk.com/mayushiides">ВКонтакте</ a> <br/>
                    <a className={styles.url} href="https://github.com/Mayushll">GitHub</ a>
                </div>
            </div>
            <br />
            Ищу вакансию желательно в Екатеринбурге или удаленно на должность Trainee/Junior Frontend разработчика. <br />
            Возможен релокейт. <br />
            Нравится React, но готов перейти на другой фреймворк. <br />
            Сайт находится в режиме вечной разработки (до вката), нужен для портфолио и мотивации учиться - поэтому ежедневно обновляется.
            <Spoilers/>
        </div>
    );
};