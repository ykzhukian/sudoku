import React, { Component } from 'react';
import Util from '../helpers/Util';
import Restore from './Restore';


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
      <div key={index}>
        <div className="resotre-time">
          {Util.formatDate(store.time)}
        </div>
        <Restore sudoku={store.sudoku} />
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


