function duplicateCount(text){
    let i = 0
    let sum = 0
    let set = new Set()
    text = text.toLowerCase().split("").sort()
    text.forEach(
        item => set.add(item)
    )
    for (let word of set){
        while(text.includes(word)){
            text.splice(text.indexOf(word), 1)
            i = i + 1
        }
        if (i>1){
            sum++
        }
        i = 0
    }
    console.log(sum)
}
duplicateCount("aabbcde")