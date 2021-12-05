import React, {useState} from 'react';
import first from "../../storage/music/SAO Alicization ED.mp3";
import second from "../../storage/music/Luminious Sword.mp3";
import third from "../../storage/music/Everlasting Summer.mp3"
import MusicPlayer from "../../store/MusicPlayer";
import {observer} from "mobx-react-lite";

export const Music = observer((props) => {
    const [songs] = useState([first, second, third])
    const [activeSong, setActiveSong] = useState(0);

    return (
        <div style={{position: "absolute", bottom: 0, right: 0,}}>

            <div>
                {MusicPlayer.isVisible ? <div>
                        <audio volume="0.1" style={{color: "black"}} autoPlay controls onEnded={() => {
                            if (activeSong < songs.length - 1) {
                                setActiveSong(activeSong + 1)
                            }
                            else {
                                setActiveSong(0)
                            }
                        }}
                               src={MusicPlayer.radioUrl}> </audio>
                    </div> : null }

            </div>
        </div>
    );
})

