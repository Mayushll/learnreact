import axios from "axios";
import {useEffect, useState} from "react";

export function useAxios(url, setLoading, startNumber, endNumber, controller) {
    const [data, setData] = useState(null)

    useEffect( () => {
            if(url) {
                setLoading(true)
                axios.get(url + "?_limit=" + startNumber + "&_page=" + endNumber , {
                    signal: controller.signal,
                    headers: {
                    }})
                    .then(response => {
                        setData(response.data)
                        setLoading(false)
                    })
                    .catch( () =>
                        console.log(123)
                    )
            }
        }, [url, startNumber, endNumber, setLoading, controller.signal]
    )

    if (data) {
        return data
    }
}
