import axios from "axios";
import {useEffect, useState} from "react";

export function useAxios(url, setLoading, startNumber, endNumber) {
    const [data, setData] = useState(null)
    useEffect( () => {
            if(url) {
                setLoading(true)
                axios.get(url + "?_limit=" + startNumber + "&_page=" + endNumber , {
                    headers: {
                    }})
                    .then(response => {
                        setData(response.data)
                        setLoading(false)
                    })
            }
        }, [url, startNumber, endNumber, setLoading]
    )

    if (data) {
        return data
    }
}
