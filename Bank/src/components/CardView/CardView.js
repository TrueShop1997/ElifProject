import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as cardsActions from 'redux/modules/cards';
// import { createCard } from 'redux/modules/cards';
//
// @asyncConnect([{
//   deferred: true,
//   promise: ({store: {dispatch, getState}}) => {
//     if (!isLoaded(getState())) {
//       return dispatch(loadCards());
//     }
//   }
// }])
@connect(() => ({}),
  dispatch => bindActionCreators(cardsActions, dispatch)
)

export default class CardView extends Component {
  // static propTypes = {
  //
  // };

  render() {
    // const {
    //   fields: {cardName, cardType},
    //   resetForm,
    //   //createCard
    // } = this.props;
    return (
    <div className ="panel panel-info">
      <h3>
        Card
      </h3>


    </div>
    );
  }
}
