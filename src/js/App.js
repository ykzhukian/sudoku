import React, { Component } from 'react';
import Cell from './components/Cell';

import '../css/App.scss';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Cell data={{value: 6}}/>
      </div>
    );
  }
}

export default App;
