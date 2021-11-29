import React from 'react';
import {TodoForm} from "./TodoForm/TodoForm";
import {TodoList} from "./TodoList/TodoList";

export function Todo(props) {
    return (
        <div>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}
