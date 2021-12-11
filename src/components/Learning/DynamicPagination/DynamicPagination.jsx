import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./DynamicPagination.module.scss"
import {Loading} from "../../../shared/Loading/Loading";

export const DynamicPagination = (props) => {
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
            if (fetching) {
                axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
                    .then(response => {
                            setPhotos( [...photos, ...response.data])
                            setCurrentPage(prevState => prevState + 1)
                        }
                    )
                    .then(
                        setLoading(false)
                    )

                    .finally(() => setFetching(false))
                 }


    }, [fetching]
    )



    useEffect(() => {
                document.addEventListener("scroll", scrollhander)
        return () => {
                document.removeEventListener("scroll", scrollhander)
        }
    }, []
    )

    function scrollhander (e) {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div>
            {photos.map(
                (photo, index) =>
                    <div className={styles.wrapper} key={index+1}>
                        <div style={{display: "flex"}}>
                            <div className={styles.photobox}>
                                <div className={styles.photo}>{photo.id} photo</div>
                                <img src={photo.thumbnailUrl} alt=""/>
                            </div>
                                <div className={styles.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                                    aspernatur atque commodi consectetur deleniti dicta distinctio doloribus
                                    dolorum earum eos
                                </div>
                        </div>
                    </div>
            )}
            {loading ? <Loading /> : null}
        </div>

    );
}

