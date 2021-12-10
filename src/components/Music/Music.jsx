import React, {useState} from 'react';

import MusicPlayer from "../../store/MusicPlayer";
import {observer} from "mobx-react-lite";

export const Music = observer((props) => {

    return (
        <div style={{position: "absolute", top: 0, right: 0,}}>
            <div>
                {MusicPlayer.isVisible ? <div>
                        <audio volume="0.1" style={{color: "black"}} autoPlay controls onEnded={() => {}}
                               src={MusicPlayer.radioUrl}> </audio>
                    </div> : null }

            </div>
        </div>
    );
})

