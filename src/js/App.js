import React, { Component } from 'react';
import NineBlock from './components/NineBlock';

import ReactMixin from 'react-mixin';
import Util from './helpers/Util';

import '../css/App.scss';

export default class App extends Component {

  componentDidMount() {
    this.setState({
      
    })

    Util.newSudoku();
  }

  render() {

    return (
      <div className="App">
        <NineBlock data={{}}/>
      </div>
    );
  }
}

ReactMixin(App.prototype, Util);
