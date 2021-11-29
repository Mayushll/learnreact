import {makeAutoObservable} from "mobx";

class Theme {
    theme = false
    constructor() {
        makeAutoObservable(this)
    }
    setIsChecked() {
        this.isChecked = !this.isChecked
    }
}

export default new Theme()