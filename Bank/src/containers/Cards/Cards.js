import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(
  state => ({user: state.auth.user})
)
export default class Chat extends Component {

  render() {
    const style = require('./Cards.scss');

    return (
      <div className={style.chat + ' container'}>
        <h1 className={style}>Cards</h1>

      </div>
    );
  }
}
