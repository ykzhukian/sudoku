import React, { Component } from 'react';
import Sudoku from './Sudoku';

export default class Index extends Component {

  render() {

    return (
      <div className="container">
      	<h1 className="title">Playing Sudoku</h1>
        <Sudoku prefilled={30} />
      </div>
    );
  }
}

