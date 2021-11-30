import {makeAutoObservable} from "mobx";

class Todo {
    todo = {
        name: ""
    }
    list = [
        {name: "Адаптивный дизайн постов, туду, AboutSite", id: 1},
        {name: "Добавить свою фотографию", id: 2},
        {name: "Избавится от useContext (перенести в MobX)", id: 3},
        {name: "Сделать верстку для перевернутых телефонов", id: 4},
        {name: "Куда-то ложить добавленные мной Todo (надо разобраться с Node.js, базами данных)", id: 5},
        {name: "Пофиксить спойлеры, добавить к ним debouncer", id: 6},
        {name: "Сделать адаптив для меню-бургера"},
    ]
    filteredList = [

    ]
    constructor() {
        makeAutoObservable(this)
    }
    changeTodo (data) {
        this.todo.name = data
    }
    addTodo (post) {
        this.list.push(post)
        this.todo.name = ""
    }
    removeTodo (id) {
       this.list = this.list.filter(todo => todo.id !== id)
    }
    checkedTodo(todo){
        todo.checked = !todo.checked
    }
    AllTodos(){
        this.filteredList = this.list
        console.log(this.filteredList)
    }
    CheckedTodos(){
        this.filteredList = this.list.filter(todo => todo.checked)
        console.log(this.filteredList)
    }
    NotCheckedTodos(){
        this.filteredList = this.list.filter(todo => !todo.checked)
        console.log(this.filteredList)
    }
}

export default new Todo()