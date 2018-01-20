import React, { Component } from 'react';
// import Util from '../helpers/Util';


export default class Restore extends Component {

	constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    console.log(this.props.sudoku);

    const sudoku = this.props.sudoku.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
    ));

    return (
      <div className="restore-sudoku">
        <table><tbody>{sudoku}</tbody></table>
      </div>
    );
  }
}


