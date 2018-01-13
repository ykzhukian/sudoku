import React, { Component } from 'react';
import Cell from './Cell';

import ReactMixin from 'react-mixin';
import Util from '../helpers/Util';

export default class Sudoku extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sudoku: '',
      prefilled: this.props.prefilled,
      prefilledArr: '',
      currentSudoku: '',
      errors: []
    };
  }

  componentDidMount() {
    let prefilledArr = Util.generatePrefilled(this.state.prefilled);

    let newSudoku = Util.newSudoku();
    let currentSudoku = newSudoku.slice();
    newSudoku.forEach((row, rowIndex) => {
      currentSudoku[rowIndex] = newSudoku[rowIndex].slice();
      row.forEach((value, index) => {
        if (!Util.checkDuplicate(prefilledArr, [rowIndex, index])) {
          currentSudoku[rowIndex][index] = ''; 
        }
      })
    });
    console.log(newSudoku);
    console.log(currentSudoku);
    this.setState({
      sudoku: newSudoku,
      prefilledArr: prefilledArr,
      currentSudoku: currentSudoku
    });
  }

  verify(value, position) {
    Util.verifyValue(value, position);
  }

  update(value, position) {
    let currentSudoku = this.state.currentSudoku;

    currentSudoku[position.row][position.col] = value;
    
    let errors = Util.verifyValue(currentSudoku);
    
    this.setState({
      currentSudoku: currentSudoku,
      errors: errors
    })
  }


  render() {

    let sudoku = this.state.currentSudoku;
    const sudokuBlock = sudoku.length
    ?
    sudoku.map((row, rowIndex) => (
      <tr className="sudoku-row" key={rowIndex}>
        {row.map((value, index) => (
          <Cell 
            key={index} 
            data={{
              value: Util.checkDuplicate(this.state.prefilledArr, [rowIndex, index]) ? value : '',
              activated: !Util.checkDuplicate(this.state.prefilledArr, [rowIndex, index]),
              errors: this.state.errors,
              row: rowIndex,
              col: index
            }} 
            updateSudoku={ (value, position) => this.update(value, position) } /> 
        ))}
      </tr>
    ))
    : (<tr><td>'Loading...'</td></tr>);
    
    return (
      <div className='sudoku-wrapper'>
        <table className="sudoku">
          <tbody>{sudokuBlock}</tbody>
        </table>
      </div>
    );
  }
}

ReactMixin(Sudoku.prototype, Util);
