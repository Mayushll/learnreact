import React from 'react';
import {Button} from "../../../../shared/Button/Button";
import {observer} from "mobx-react-lite";
import styles from "./TodoItem.module.scss"
import {DeleteButton} from "../../../../shared/DeleteButton/DeleteButton";

export const TodoItem = observer(({id, index, children, remove, todo, checked}) => {
    return (
        <div className={styles.wrapper}>
            <input
                onChange={
                    () =>{
                        checked(todo)
                        console.log(todo.checked)
                    }
                }
                checked={todo.checked ? "checked" : ""}
                type="checkbox"
            />
            <b>{index}</b>
            {children}
            <DeleteButton onClick={() => remove(id)} style={{
                marginLeft: "3px",
                width: "15px"
            }}/>
        </div>
    );
})