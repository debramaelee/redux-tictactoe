//Create a file for the reducer, say TicTacToe.reducer.js, create the initial state of the app, and have the reducer return that as the initial state.

const INITIAL_STATE = {
  boardState: {
  	currentPlayer: 'X',
  	board: [null, null, null, null, null, null, null, null, null]
  }
}

// function reducer(state=INITIAL_STATE, action) {
// 	return {
// 		boardState: tictactoeReducer(state.boardState, action)
// 	}
// }

// function getWinner(board) {

// }

// function isWin(a, b, c, board) {

// }


export default function reducer(state = INITIAL_STATE, action) {
	function markSquare(idx) {
	
		state.board[action.idx] = state.currentPlayer;
		console.log('after mark sqare')
	
}
	if (action.type === 'marked') {
	if (state.board[action.idx] === null) {
		// let newCurrentPlayer = 'O'
		// let newBoard = state.board.slice();

			let newBoard = state.board.slice();

			var newBoard = state.board.map(markSquare)
			newBoard[action.idx] = state.currentPlayer
			
			console.log(newBoard);

		// console.log(newCurrentPlayer)
		// let newCurrentPlayer = 'O'
		if (state.currentPlayer === 'X') {
			state.currentPlayer = 'O';
			console.log(state.currentPlayer);
		} else {
			state.currentPlayer = 'X';
			console.log(state.currentPlayer);
		}


	}

		
	}

	
	return state;
}