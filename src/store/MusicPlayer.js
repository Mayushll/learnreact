import {makeAutoObservable} from "mobx";

class MusicPlayer {
    isVisible = false
    radioUrl = "https://pool.anison.fm/AniSonFM(320)"
    constructor() {
        makeAutoObservable(this)
    }
    changeVisible() {
      this.isVisible = !this.isVisible
    }
    changeRadio(url) {
        this.radioUrl = url
    }
}

export default new MusicPlayer()