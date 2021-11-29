import {useEffect, useState} from "react";

export function useTitle (pageName) {
    const [title, setTitle] = useState("")
    useEffect(() => {
            setTitle(pageName)
            document.title = title
        }, [pageName, title]
    )
}
