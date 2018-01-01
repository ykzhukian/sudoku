import React, { Component } from 'react';
import Cell from './components/Cell';
import NineBlock from './components/NineBlock';

import '../css/App.scss';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NineBlock data={{}}/>
      </div>
    );
  }
}

export default App;
