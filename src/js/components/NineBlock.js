import React, { Component } from 'react';
import Cell from './Cell';


export default class NineBlock extends Component {

	constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }

  componentDidMount() {
  	this.setState({
  		
  	})
  }

  render() {

    return (
      <div className="nine-block">
		<Cell data={{value: 1}} />
		<Cell data={{value: 2}} />
		<Cell data={{value: 3}} />
		<Cell data={{value: 4}} />
		<Cell data={{value: 5}} />
		<Cell data={{value: 6}} />
		<Cell data={{value: 7}} />
		<Cell data={{value: 8}} />
		<Cell data={{value: 9}} />
      </div>
    );
  }
}


