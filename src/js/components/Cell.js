import React, { Component } from 'react';


export default class Cell extends Component {

	constructor(props) {
    super(props)
  
    this.state = {
      activated: true,
      value: 0
    }
  }

  componentDidMount() {
  	this.setState({
  		value: this.props.data.value
  	})
  }

  render() {

    return (
      <td className="cell-block">{this.state.value}</td>
    );
  }
}


