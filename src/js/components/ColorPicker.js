import React, { Component } from 'react';
import Color from './Color';

export default class ColorPicker extends Component {

  render() {

    return (
      <div className="colors">
      	<h3 className="colors-title">Mark As</h3>
				<Color value="aff7b0" />
				<Color value="42bcf4" />
				<Color value="f9de7a" />
      </div>
    );
  }
}
