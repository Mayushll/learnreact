import React from 'react';
import styles from "./PostItem.module.scss"
import {DeleteButton} from "../../../../shared/DeleteButton/DeleteButton";

export function PostItem(props) {

    return (
        <div className={styles.post}>
            <span className={styles.title}>{props.post.title}</span>
            <div>
                {props.post.body}
            </div>
            <div style={{position: "absolute", bottom: 0, right: 0}}>
                 <DeleteButton  onClick={() => props.remove(props.post)} />
            </div>
        </div>
    );
}