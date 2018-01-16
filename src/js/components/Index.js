import React, { Component } from 'react';
import Sudoku from './Sudoku';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      difficulty: 80,
      win: false
    };
  }

  onClick(event, value) {
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
      <div className="container">
      	<div className="wrapper main-wrapper">
	      	<h1 className="title">
            {this.state.win ? 'You Win!' : 'Playing Sudoku'}
          </h1>
	        <Sudoku 
            prefilled={this.state.difficulty}
            finished={this.state.win}
            win={() => this.win()} />
          <div className="info-text">Double click a cell to flag.</div>
          <div className="info-text difficulty">
            Change Difficulty:
            <span className={this.state.difficulty === 40 ? 'active' : ''} onClick={(e) => this.onClick(e, 40)} >Beginner</span>
            <span className={this.state.difficulty === 30 ? 'active' : ''} onClick={(e) => this.onClick(e, 30)} >Normal</span>
            <span className={this.state.difficulty === 25 ? 'active' : ''} onClick={(e) => this.onClick(e, 25)} >Hard</span>
            <span className={this.state.difficulty === 17 ? 'active' : ''} onClick={(e) => this.onClick(e, 17)} >Challenging</span>
          </div>
          {this.state.win ? (<div className="particles"></div>) : ''}
        </div>
        {/*<div className="wrapper tools">
          <div className="tools-wrapper">
            {colorpicker}
          </div>
        </div>*/}
      </div>
    );
  }
}

