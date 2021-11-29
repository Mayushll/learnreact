import React from 'react';
import Todo from "../../../store/Todo";
import {TodoItem} from "./TodoItem/TodoItem";
import {observer} from "mobx-react-lite";

export const TodoList = observer((props) => {
    function remove(id) {
        Todo.removeTodo(id)
    }
    function checked(todo){
        Todo.checkedTodo(todo)
    }
    return (
        <div>
            {Todo.filteredList.map((todo, index) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        remove={remove}
                        id={todo.id}
                        index={index+1}
                        checked={checked}
                    >{todo.name}</TodoItem>
            ))}
        </div>
    );
})
