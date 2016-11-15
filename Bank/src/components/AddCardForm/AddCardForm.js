import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardsActions from 'redux/modules/cards';
// import { createCard } from 'redux/modules/cards';

@connect(() => ({}),
  dispatch => bindActionCreators(cardsActions, dispatch)
)

@reduxForm({
  form: 'newCard',
  fields: ['cardName', 'cardType'],
})
export default class AddCardForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
   // createCard: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {cardName, cardType},
      handleSubmit,
      resetForm,
      //createCard
    } = this.props;
    return (

      <form onSubmit={handleSubmit}>
        <div className="center-block">
          <div className="row">
            <div className="form-group">
              <div className="col-sm-9">
                <label htmlFor="cardName">Cards name:</label>
                <input type="name" className="col-xs-3 form-control" id="cardName" {...cardName} placeholder="name"/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="radio">
              <label>
                <input type="radio" {...cardType} value="VISA" checked={cardType.value === 'VISA'}/>
                   VISA
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" {...cardType} value="Mastercard" checked={cardType.value === 'Mastercard'} />
                   Mastercard
              </label>
            </div>

            <button className="btn btn-success" onClick={handleSubmit}>
              <i className="fa fa-plus"/> Add
            </button>
            <button className="btn btn-warning" onClick={resetForm} style={{marginLeft: 20}}>
              <i className="fa fa-undo"/> Reset
            </button>
          </div>
        </div>
      </form>
    );
  }
}
