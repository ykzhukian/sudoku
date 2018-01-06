import React, { Component } from 'react';
import Cell from './Cell';

import ReactMixin from 'react-mixin';
import Util from '../helpers/Util';

export default class Sudoku extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sudoku: ''
    };
  }

  componentDidMount() {
    this.setState({
      sudoku: Util.newSudoku()
    })
  }

  render() {

    let sudoku = this.state.sudoku;
    const sudokuBlock = sudoku.length
    ?
    sudoku.map((row, rowIndex) => (
      <tr className="sudoku-row" key={rowIndex}>
        {row.map((value, index) => (
          <Cell key={index} data={{value: value}} /> 
        ))}
      </tr>
    ))
    : (<tr><td>'Loading...'</td></tr>);
    

    return (
      <table className="sudoku">
        <tbody>{sudokuBlock}</tbody>
      </table>
    );
  }
}

ReactMixin(Sudoku.prototype, Util);
