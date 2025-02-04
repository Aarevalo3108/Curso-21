const boardArray = ['', '', '',   // [0] [1] [2]
                    '', '', '',   // [3] [4] [5] 
                    '', '', ''];  // [6] [7] [8]

let currentPlayer = 'X';

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const condition of winConditions) {
    // const [a, b, c] = condition;

    const a = condition[0];
    const b = condition[1];
    const c = condition[2];

    if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
      return true;
    }
  }

  return false;
}

function makeMove(index) {
  if (boardArray[index] === '') {
    boardArray[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].textContent = currentPlayer;
    // currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if(currentPlayer === 'X'){
      currentPlayer = 'O';
    } else{
      currentPlayer = 'X';
    }
    console.log(boardArray);
  }
  if (checkWin()) {
    alert(`El jugador ${currentPlayer === 'O' ? 1 : 2} ha ganado!`);
  }
}