import React, { Component } from 'react';
import Util from '../helpers/Util';


export default class Restore extends Component {

	constructor(props) {
    super(props)
    this.state = {}
  }

  onClick(e) {
    Util.confirm('It will lose the current progress.', () => {
      this.props.restore(this.props.sudoku);
    })
  }

  render() {

    const sudoku = this.props.sudoku.map((row, rowIndex) => (
        <div key={rowIndex} className="restore-sudoku-row">
          {row.map((value, index) => (
            <div key={index} className="restore-sudoku-value">{value === '' ? '' : '·'}</div>
          ))}
        </div>
    ));

    return (
      <div 
        className="restore-sudoku" 
        data-sudoku={this.props.sudokuIndex} 
        onClick={(e) => this.onClick(e)} >
        {sudoku}
      </div>
    );
  }
}


