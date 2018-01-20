import React, { Component } from 'react';
import ReactMixin from 'react-mixin';

import Cell from './Cell';
import RestoreList from './RestoreList';
import Util from '../helpers/Util';

import '../helpers/Fireworks.js';
import '../helpers/General.js';

export default class Sudoku extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sudoku: '',
      prefilledArr: '',
      currentSudoku: '',
      errors: [],
      initial: false,
      flags: [],
      saved: []
    };
  }

  componentWillMount() {
    this.initialiseSudoku(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.finished) {
      this.initialiseSudoku(nextProps);
    }
  }

  addFlag(position) {
    let flags = this.state.flags;
    flags.push([position.row, position.col]);
    this.setState({
      flags: flags
    })
  }

  removeFlag(position) {
    let flags = this.state.flags;
    Util.removeFromArr(flags,[position.row, position.col]);
    this.setState({
      flags: flags
    })
  }

  clear() {
    Util.confirm("Cannot recover, sure?", () => {
      let currentSudoku = this.state.currentSudoku;
      currentSudoku.forEach((row, rowIndex) => {
        row.forEach((value, index) => {
          if (
              !Util.checkDuplicate(this.state.prefilledArr, [rowIndex, index]) &&
              !Util.checkDuplicate(this.state.flags, [rowIndex, index])
            ) {
            currentSudoku[rowIndex][index] = ''; 
          }
        })
      });
      let errors = Util.verifyValue(currentSudoku);
      this.setState({
        currentSudoku: currentSudoku,
        errors: errors
      });
    });
  }

  save() {
    let currentSudoku = this.state.currentSudoku;
    let saved = this.state.saved;

    let toBeSavedSudoku = currentSudoku.slice();
    currentSudoku.forEach((row, rowIndex) => {
      toBeSavedSudoku[rowIndex] = currentSudoku[rowIndex].slice();
      row.forEach((value, index) => {
        toBeSavedSudoku[rowIndex][index] = value;
      })
    });

    let toBeSaved = {
      time: Date.now(),
      sudoku: toBeSavedSudoku
    }
    saved.push(toBeSaved);
    this.setState({
      saved: saved
    }, () => {Util.message('Saved! You can restore this progress anytime.')})
  }

  initialiseSudoku(props) {
    let prefilledArr = Util.generatePrefilled(props.prefilled);

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
    this.setState({
      sudoku: newSudoku,
      prefilledArr: prefilledArr,
      currentSudoku: currentSudoku,
      errors: [],
      initial: true
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
      errors: errors,
      initial: false
    });

    if (errors === 'finished') {
      this.props.win();
    }
  }

  render() {

    const sudokuBlock = this.state.currentSudoku.length
    ?
    this.state.currentSudoku.map((row, rowIndex) => (
      <tr className="sudoku-row" key={rowIndex}>
        {row.map((value, index) => (
          <Cell 
            key={index} 
            data={{
              value: value,
              activated: !Util.checkDuplicate(this.state.prefilledArr, [rowIndex, index]) && !this.props.finished,
              errors: this.state.errors,
              row: rowIndex,
              col: index,
              flag: Util.checkDuplicate(this.state.flags, [rowIndex, index])
            }} 
            updateSudoku={ (value, position) => this.update(value, position) } 
            removeFlag={ (value, position) => this.removeFlag(value, position) } 
            addFlag={ (position) => this.addFlag(position) }/> 
        ))}
      </tr>
    ))
    : (<tr><td>Loading...</td></tr>);
    
    return (
      <div className="content-container">

        <div className="sudoku-container">
          <h1 className="title">
            {this.props.finished ? 'You Win!' : 'Playing Sudoku'}
          </h1>
        
          <div className='sudoku-wrapper'>
            <table className="sudoku">
              <tbody>{sudokuBlock}</tbody>
            </table>
          </div>
        </div>

        <div className="wrapper">
          <div className="tools-wrapper">
            <h3 className="info-text">Tools</h3>
            <div 
              className="info-text btn"
              onClick={() => this.clear()}><span>></span> Clear (except flagged cells)</div>
            <div 
              className="info-text btn"
              onClick={() => this.save()}><span>></span> Save current progress</div>
            <div className="info-text">Double click a filled cell to flag.</div>
            <h3 className="info-text">Restore from saved</h3>
            <RestoreList stores={this.state.saved}/>
            <h3 className="info-text">Change Difficulty</h3>
            <div className="difficulty">
              <span className={this.props.prefilled === 45 ? 'active' : ''} onClick={(e) => this.props.changeDifficulty(e, 45)} >Beginner</span>
              <span className={this.props.prefilled === 35 ? 'active' : ''} onClick={(e) => this.props.changeDifficulty(e, 35)} >Normal</span>
              <span className={this.props.prefilled === 25 ? 'active' : ''} onClick={(e) => this.props.changeDifficulty(e, 25)} >Hard</span>
              <span className={this.props.prefilled === 17 ? 'active' : ''} onClick={(e) => this.props.changeDifficulty(e, 17)} >Challenging</span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

ReactMixin(Sudoku.prototype, Util);
