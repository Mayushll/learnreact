import React, {useState} from 'react';
import {useAxios} from "./useAxios";
import {Inputs} from "./Inputs/Inputs";
import {ShowData} from "./ShowData/ShowData";
import {Button} from "../../../shared/Button/Button";
import {debounce} from "../../../Functions/debounce";

export function Axios() {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/photos/")
    const [postUrl, setPostUrl] = useState()
    const [startNumber, setStartNumber] = useState(0)
    const [endNumber, setEndNumber] = useState(5)
    const [loading, setLoading] = useState(false)
    let data = useAxios(postUrl, setLoading, startNumber, endNumber)

    return (
        <div>
            <div>Вызываем картинки c JSONPlaceholder</div>
            <Inputs
                url={url}
                setUrl={setUrl}
                startNumber={startNumber}
                endNumber={endNumber}
                setStartNumber={setStartNumber}
                setEndNumber={setEndNumber}
                setPostUrl={setPostUrl}
            />
            <div>
              <ShowData
                  data={data}
                  loading={loading}
              />
            </div>
        </div>
    );
}

export default Axios;