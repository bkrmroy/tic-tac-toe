const gameBlock = document.querySelectorAll(".game-block")
const startButton = document.querySelector(".btn-start")
const restartButton = document.querySelector('.btn-restart')
const overlay = document.querySelector(".overlay")
const form = document.querySelector(".start-form")
const dialogBox =document.querySelector('.dialog-box')

const gameBoard = (()=>{
    let gameArray = ['','','','','','','','','']

    gameBlock.forEach(item =>{
        item.textContent = gameArray[item.dataset.index]
    })

    const updateGameArray1 = (index)=>{
        gameArray[index] = player1.getValue()
    }
    const updateGameArray2 = (index)=>{
        gameArray[index] = player2.getValue()
    }
    const getArrayItem = (num)=>{
        return gameArray[num]
    }
    const resetGameArray = ()=>{
        gameArray = ['','','','','','','','','']
    }
    return {updateGameArray1, updateGameArray2, getArrayItem, resetGameArray}
})()

const player = (name,value)=>{
    const getName = () => name
    const getValue  = () => value;
    return {getName, getValue}
}
window.player1 = player(player1name, 'X')
window.player2 = player(player2name, 'O')


