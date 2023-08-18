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

const gameController = (()=>{
    let turn = 1
    const draw = (event)=>{
        let specificBlock = event.target
        if(specificBlock.textContent === ''){
            if(turn % 2 !== 0){
                specificBlock.textContent = player1.getValue()
                gameBoard.updateGameArray1(specificBlock.dataset.index)
            }
            else{
                specificBlock.textContent = player2.getValue()
                gameBoard.updateGameArray2(specificBlock.dataset.index)
            }
            turn += 1
            checkWinner()
        }
    }
    resetTurn = ()=>{
        turn = 1
    }
    return{draw, resetTurn}
})()

const checkWinner = ()=>{
    let newArrayItem
    function checkForMatches(arr){
        if(arr.every((item) => item !== '') && arr.every((item) => item === arr[0])){
            arr[0] === player1.getValue() ? alert(`${player1.getName()} has won the game`): null;
            arr[0] === player2.getValue() ? alert(`${player2.getName()} has won the game`): null;
  
            gameBlock.forEach(item=>{
                item.removeEventListener("click", gameController.draw)
            })
        }
    }
    const checkRows = (()=>{
        let rowArray = [[],[],[]]
        for(j=0;j<3;j++){
            for(i = (j+2*j); i < 3*(j+1); i++){
                newArrayItem = gameBoard.getArrayItem(i)
                rowArray[j].push(newArrayItem)
            }
        }
        rowArray.forEach(array => {
            checkForMatches(array)
        })
    })()
    const checkColumns = (()=>{
        let columnArray = [[],[],[]]
        for(j=0;j<3;j++){
            for(i = j; i < 9; i += 3){
                newArrayItem = gameBoard.getArrayItem(i)
                columnArray[j].push(newArrayItem)
            }
        }
        columnArray.forEach(array =>{
            checkForMatches(array)
        })
    })()
    const checkDiagonals = (()=>{
        let diagonalArray = [[],[]]
        for(i=0; i<9 ; i+=4){
            newArrayItem = gameBoard.getArrayItem(i)
            diagonalArray[0].push(newArrayItem)
        }
        for(i=2;i<7;i+=2){
            newArrayItem = gameBoard.getArrayItem(i)
            diagonalArray[1].push(newArrayItem)
        }
        diagonalArray.forEach(array =>{
            checkForMatches(array)
        })
    })()
  }

  
