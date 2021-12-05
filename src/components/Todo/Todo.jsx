import React from 'react';
import {TodoForm} from "./TodoForm/TodoForm";
import {TodoList} from "./TodoList/TodoList";

export function Todo(props) {
    return (
        <div>
            <h1>Список дел</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}
