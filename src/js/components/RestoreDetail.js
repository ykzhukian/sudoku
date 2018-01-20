import React, { Component } from 'react';
// import Util from '../helpers/Util';


export default class RestoreDetail extends Component {

	constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const sudoku = this.props.sudoku.map((row, rowIndex) => (
        <div key={rowIndex} className="restore-detail-row">
          {row.map((value, index) => (
            <div key={index} className="restore-detail-value">{value}</div>
          ))}
        </div>
    ));

    return (
      <div className="restore-detail" data-detail={this.props.sudokuIndex}>
        {sudoku}
      </div>
    );
  }
}


