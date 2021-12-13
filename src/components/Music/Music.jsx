import React from 'react';
import MusicPlayer from "../../store/MusicPlayer";
import {observer} from "mobx-react-lite";
import styles from "./Music.module.scss"

export const Music = observer((props) => {

    return (
            <div className={styles.MusicPlayer}>
                {MusicPlayer.isVisible ? <div>
                        <audio autoPlay controls onEnded={() => {}}
                               src={MusicPlayer.radioUrl}> </audio>
                    </div> : null }

            </div>
    );
})

