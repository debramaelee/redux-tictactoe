import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import TicTacToe from './tictactoe';
import tictactoeReducer from './tictactoe.reducer';
import './index.css';

//needs to be declared before reducer function
const INITIAL_STATE = {
  boardState: {
  	currentPlayer: 'X',
  	board: [null, null, null, null, null, null, null, null, null]
  }
};

function reducer(state=INITIAL_STATE, action) {
	return {
		boardState: tictactoeReducer(state.boardState, action)
	}
};



let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);







const TictactoeContainer = ReactRedux.connect (
	state => ({ 
		currentPlayer: state.boardState.currentPlayer, 
		board: state.boardState.board
	}),
	dispatch => ({
		marked: (idx) => dispatch({
			type: 'marked',
			idx: idx
		})

	})
	)(TicTacToe);



ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <TictactoeContainer/>

    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
