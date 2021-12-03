/*
function validSolution(board){
    let index = 0
    let index2 = 0
    let isValid = true
    function checkingRows() {
        let rowBoard = JSON.parse(JSON.stringify(board))
        while(index < 9) {
            rowBoard[index].sort((a, b) => a - b)
            rowBoard[index] = rowBoard[index].join(" ")
            if (rowBoard[index] !== '1 2 3 4 5 6 7 8 9'){
                isValid = false
            }
            index++
        }
    }
    checkingRows()
}


validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 7, 9]])*/


function likes(names) {
    switch (true) {
        case names.length === 0:
            return("no one like this")
        case names.length === 1:
            return(names[0] + " like this")
        case names.length === 2:
            return(names[0] + " and " + names[1] + " like this")
        case names.length === 3:
            return(names[0] + ", " + names[1] + " and " + names[2] + " like this")
        default:
            return(names[0] + ", " + names[1] + " and " + JSON.stringify(names.length - 2) + " others like this")
    }
}

let x = likes([])
console.log(x)














