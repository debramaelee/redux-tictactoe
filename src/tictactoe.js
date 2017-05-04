import React from 'react';

// console.log(this.board);



export default class TicTacToe extends React.Component {
	render() {
		return (
			<div className="tictactoe">
        		{this.props.board.map((piece, idx) =>
        			<button key={idx} 
        			onClick= {() => this.props.marked(idx)}
        			> {piece} </button>
        			)}
	      	</div>
		)
	}
}