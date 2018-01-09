import React, { Component } from 'react';

export default class Cell extends Component {

	constructor(props) {
    super(props)
  
    this.state = {
      activated: this.props.data.activated,
      value: this.props.data.activated ? '' : this.props.data.value,
      correctValue: this.props.data.value,
      row: this.props.data.row,
      col: this.props.data.col,
      error: this.props.data.error
    }
  }

  componentDidMount() {
  	this.setState({
      error: this.props.data.error
    })
    console.log(this.props.data.error);
  }

  onChange(event) {
    const numbers = new RegExp("[0-9]");
    let value = parseInt(event.target.value, 10);
    console.log(value);
    if (this.state.activated && (numbers.test(value) || !value)) {
      if (!value) {
        value = '';
      }
      this.setState({value: value});
      this.props.updateSudoku(value, {row: this.state.row, col: this.state.col});
    }
  }


  render() {

    return (
      <td className={"cell-block" + (this.state.error ? 'error' : '')}>
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


