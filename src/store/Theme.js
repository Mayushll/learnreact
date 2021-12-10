import {makeAutoObservable} from "mobx";

class Theme {
    lightTheme = {
        color: "rgb(20, 20, 20)",
        background: "rgb(220, 220, 220)",
    }
    darkTheme = {
        color: "rgb(220, 220, 220)",
        background: "rgb(20, 20, 20)",
    }
    constructor() {
        makeAutoObservable(this)
    }
    setIsChecked() {
        this.isChecked = !this.isChecked
    }
}

export default new Theme()