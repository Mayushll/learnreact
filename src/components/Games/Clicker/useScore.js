import {useEffect,useState} from "react";
export function useScore (position, setPosition, kirito, lizbeth, asuna, clickListener1, clickListener2, setClickListener1, setClickListener2, setScore1, setScore2, score1, score2) {

    const [isFirst, setIsFirst] = useState(true)
    const [KiritoXY, setKiritoXY] = useState("")
    const [AsunaXY, setAsunaXY] = useState("")
    const [LizbethXY, setLizbethXY] = useState("")

    useEffect( () => {
        function score (e) {
            switch (e.key) {
                case "q": case "Q": case "й": case "Й": case "E": case "e":case "У": case "у":
                    setPosition(position + 2)
                    setClickListener1(clickListener1 + 1)
                    setKiritoXY(kirito.current.getBoundingClientRect())
                    break
                case "I": case "i": case "Ш": case "ш": case "P": case "p": case "З": case "з":
                    setPosition(position - 2)
                    setKiritoXY(kirito.current.getBoundingClientRect())
                    setClickListener2(clickListener2 + 1)
                    break
                default:
            }
        }
        document.addEventListener('keydown', score);
        return () => {
            document.removeEventListener('keydown', score);
        };
    }, [position, setPosition, kirito, setClickListener1, setClickListener2, clickListener1, clickListener2])

    useEffect(
        () => {
            setAsunaXY(asuna.current.getBoundingClientRect())
        }, [asuna]
    )
    useEffect(
        () => {
            setLizbethXY(lizbeth.current.getBoundingClientRect())
        }, [lizbeth]
    )

    useEffect (
        () => {
            if (isFirst) {
                setIsFirst(false);
                return
            }
             if (KiritoXY.x < AsunaXY.x) {
                 setPosition(0)
                 setScore1(score1 + 1)
                 setClickListener1(0)
                 setClickListener2(0)
             }
            else if (KiritoXY.x > LizbethXY.x) {
                setPosition(0)
                 setScore2(score2 + 1)
                 setClickListener1(0)
                 setClickListener2(0)
            }
        },
        [KiritoXY, AsunaXY, LizbethXY, setPosition, setClickListener2, setClickListener1, isFirst]
    )

}
