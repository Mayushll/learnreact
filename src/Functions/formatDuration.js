export function formatDuration (seconds) {
    const timeForHuman = (name, condition) => {
        let time = 0
        while(seconds >= condition) {
            seconds-= condition
            time++
        }
        if (time){
            if(time===1){
                time = time + ` ${name}`
            }
            else{
                time = time + ` ${name}s`
            }
        }
        else{
            time = ""
        }
        return time
    }
    let years = timeForHuman("year", 31536000)
    let days = timeForHuman("day", 86400)
    let hours = timeForHuman("hour", 3600)
    let minutes = timeForHuman("minute", 60)
    let sec = timeForHuman("second", 1)
    let helperMassive = []
    let massive = []
    helperMassive.push(years, days, hours, minutes, sec)
    helperMassive.forEach( (item) => {
            if (item){
                item = item+", "
                massive.push(item)
            }
        }
    )
    if(massive.length > 1) {
        massive[massive.length-1] = " " + massive[massive.length-1].slice(0, -2)
        massive.splice(massive.length-1, 0, "and")
        massive[massive.length-3] = massive[massive.length-3].slice(0, -2) + massive[massive.length-3].slice(-1)
    }
    if (massive.length === 1){
        massive = massive[0].slice(0, -2)
    }
    else if (massive.length === 0){
        massive = 0
    }
    else {
        massive = massive.join("")
    }
    return massive
}