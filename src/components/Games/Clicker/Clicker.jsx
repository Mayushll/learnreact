import React from 'react';
import {Box} from "./Box/Box";
import {useSessionStorage} from "../../../hooks/useSessionStorage";
import {Settings} from "./Settings/Settings";

export const Clicker = React.memo( () => {

    const [position, setPosition] = useSessionStorage(0, "ClickerPosition")
    const [clickListener1, setClickListener1] = useSessionStorage(0, "ClickListener1")
    const [clickListener2, setClickListener2] = useSessionStorage(0, "ClickListener2")
    return (
        <div>
            <Box
                setClickListener1={setClickListener1}
                setClickListener2={setClickListener2}
                clickListener1={clickListener1}
                clickListener2={clickListener2}
                position={position}
                setPosition={setPosition}
            />
            <Settings/>

       </div>
    );
})
