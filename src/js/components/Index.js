import React, { Component } from 'react';
import Sudoku from './Sudoku';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      difficulty: 45,
      win: false
    };
  }

  changeDifficulty(event, value) {
    this.setState({
      difficulty: value,
      win: false
    })
  }

  win() {
    this.setState({
      win: true
    })
  }

  render() {

    return (
      <div className="container" id="container">
      	<div className="wrapper main-wrapper">
	        <Sudoku 
            prefilled={this.state.difficulty}
            finished={this.state.win}
            win={() => this.win()} 
            changeDifficulty={(e, value) => this.changeDifficulty(e, value)}/>
          {this.state.win ? (<div className="particles"></div>) : ''}
        </div>
      </div>
    );
  }
}

