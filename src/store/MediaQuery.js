import {makeAutoObservable} from "mobx";

class MediaQuery {
    mQuery = false
    constructor() {
        makeAutoObservable(this)
    }
    matchQuery (){
        this.mQuery = window.matchMedia("(max-width: 830px)").matches
        console.log(this.mQuery)
    }
}

export default new MediaQuery()