import React, { Component } from 'react';

export default class Color extends Component {

  onClick() {
    console.log('clicked');
  }

  render() {

    return (
      <div 
        className="color" 
        data-color={this.props.value} 
        onClick={(e) => this.onClick(e)} />
    );
  }
}
