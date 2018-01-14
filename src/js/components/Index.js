import React, { Component } from 'react';
import Sudoku from './Sudoku';

export default class Index extends Component {

  render() {

    return (
      <div className="container">
      	<div className="wrapper main-wrapper">
	      	<h1 className="title">Playing Sudoku</h1>
	        <Sudoku 
            prefilled={40} 
            showColor={(position) => this.showColor(position)}
            hideColor={() => this.hideColor()} />
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

