import React, {useEffect, useState} from 'react';
import {Input} from "../../../shared/Input/Input";
import {Select} from "../../../shared/Select/Select";
import Todo from "../../../store/Todo";
import {observer} from "mobx-react-lite";
import {Button} from "../../../shared/Button/Button";

export const TodoForm = observer((props) => {
    const [filter, setFilter] = useState(`all`)
    const [isTodoClear, setIsTodoClear] = useState(false)
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addNewTodo()
        }
    }
    const addNewTodo = () => {
        if (Todo.todo.name) {
        let newTodo = {
            ...Todo.todo, id: Date.now(), checked: false
        }
        Todo.addTodo(newTodo)
    }
        else{
                setIsTodoClear(true)
            }
    }
    useEffect(
        () => {
                Todo.AllTodos()
                switch (filter) {
                    case "All":
                        Todo.AllTodos()
                        break
                    case"Done":
                        Todo.CheckedTodos()
                        break
                    case "NotDone":
                        Todo.NotCheckedTodos()
                        break
                    default:
                        console.log("WARNING")
                }
        }, [filter, Todo.list]
    )
    return (
        <div>
            <Input
                onChange={ (e) => {
                    Todo.changeTodo(e.target.value)
                    setIsTodoClear(false)
                }}
                value={Todo.todo.name}
                onKeyDown={handleKeyDown}
            />  {isTodoClear && <span>Нужно обязательно что-то написать!</span>}

            <Button
                onClick={addNewTodo}
            >Добавить задачу</Button>
            <Select onChange={(e)=>setFilter(e.target.value)}>
                 <option value="All">Все</option>
                 <option value="Done">Выполненные</option>
                 <option value="NotDone">Невыполненные</option>
            </Select>
        </div>
    );
})