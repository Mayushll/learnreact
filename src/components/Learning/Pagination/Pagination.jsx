import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./DynamicPagination.module.scss"

export const DynamicPagination = (props) => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [photosPerPage, setPhotosPerPage] = useState()
    const [fetching, setFetching] = useState()

    useEffect(
        () => {
            if (fetching) {
                axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${photosPerPage}&_page=${currentPage}`)
                    .then(response => {
                            setPhotos( [response.data])
                            setCurrentPage(prevState => prevState + 1)
                        }
                    )
                    .finally(() => setFetching(false))
            }
        }
    )

    return (
        <div>
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
            </div>
            <div>

            </div>
        </div>
    );
}

