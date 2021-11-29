let x = {name: 5 }

switch(JSON.stringify(x)){
    case{name: 5 }:
        console.log("yes")
        break
    default:
        console.log("no")
}