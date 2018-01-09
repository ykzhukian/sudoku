import React, { Component } from 'react';
import Util from '../helpers/Util';

export default class Cell extends Component {

	constructor(props) {
    super(props)
  
    this.state = {
      activated: this.props.data.activated,
      value: this.props.data.activated ? '' : this.props.data.value,
      correctValue: this.props.data.value,
      row: this.props.data.row,
      col: this.props.data.col
    }
  }

  componentDidMount() {

  }

  onChange(event) {
    const numbers = new RegExp("[0-9]");
    let value = parseInt(event.target.value, 10);
    if (this.state.activated && (numbers.test(value) || !value)) {
      if (!value) {
        value = '';
      }
      this.setState({value: value});
      this.props.updateSudoku(value, {row: this.state.row, col: this.state.col});
    }
  }


  render() {

    let error = Util.checkDuplicate(this.props.data.errors, [this.props.data.row, this.props.data.col]);

    return (
      <td className={"cell-block " + (error ? 'error ' : '' + (this.state.activated ? '' : 'prefilled'))}>
        <input
          className="cell-input" 
          type="text" 
          value={this.state.value} 
          maxLength="1"
          readOnly={!this.state.activated}
          onChange={e => this.onChange(e)} />
      </td>
    );
  }
}


