import {makeAutoObservable} from "mobx";

class BurgerChecked {
    isChecked = false
    constructor() {
        makeAutoObservable(this)
    }
    setIsChecked() {
        this.isChecked = !this.isChecked
    }
}

export default new BurgerChecked()