import React, { Component } from 'react';
import Util from '../helpers/Util';
import Restore from './Restore';
import RestoreDetail from './RestoreDetail';

const FontAwesome = require('react-fontawesome');

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
          {index + 1}
        </div>
        <Restore restore={this.props.restore} sudokuIndex={index + ''} sudoku={store.sudoku} />
        <RestoreDetail sudokuIndex={index + ''} sudoku={store.sudoku} />
        <div>
          <div>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div></div>
        </div>
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


