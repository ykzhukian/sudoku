import React, { Component } from 'react';
import Util from '../helpers/Util';
import Restore from './Restore';
import RestoreDetail from './RestoreDetail';


export default class RestoreList extends Component {

	constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const stores = this.props.stores;
    const restoreList = stores.length
    ?
    stores.map((store, index) => (
      <div key={index} className="restore-wrapper">
        <div className="restore-time">
          {Util.formatDate(store.time)}
        </div>
        <Restore sudokuIndex={index + ''} sudoku={store.sudoku} />
        <RestoreDetail sudokuIndex={index + ''} sudoku={store.sudoku} />
      </div>
    ))
    :
    (<div className="restore-no">No Saved Progress.</div>);

    return (
      <div className="restore-list">
        {restoreList}
      </div>
    );
  }
}


