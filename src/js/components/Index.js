import React, { Component } from 'react';
import Sudoku from './Sudoku';
import ColorPicker from './ColorPicker';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showColor: false
    };
  }

  showColor() {
    this.setState({
      showColor: true
    })
  }

  hideColor() {
    // this.setState({
    //   showColor: false
    // })
  }

  render() {

    const colorpicker = this.state.showColor
    ?
    <ColorPicker />
    :
    <div>Loading</div>;

    return (
      <div className="container">
      	<div className="wrapper main-wrapper">
	      	<h1 className="title">Playing Sudoku</h1>
	        <Sudoku 
            prefilled={40} 
            showColor={() => this.showColor()}
            hideColor={() => this.hideColor()} />
        </div>
        <div className="wrapper tools">
          <div className="tools-wrapper">
            {colorpicker}
          </div>
        </div>
      </div>
    );
  }
}

