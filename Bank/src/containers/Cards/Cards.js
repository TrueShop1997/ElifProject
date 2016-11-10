import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import {isLoaded, load as loadCards} from 'redux/modules/cards';
// import {isLoaded, load as loadCards} from 'redux/modules/cards';
import Helmet from 'react-helmet';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadCards());
    }
  }
}])
@connect(
  state => ({
    cards: state.cards.data,
    error: state.cards.error,
    review: state.cards.review,
    loading: state.cards.loading,
  }),
  //{addButton}
 // {...cards}
)
export default class Cards extends Component {
  static propTypes = {
    cards: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired,
    reviewCard: PropTypes.func,
    showAddForm: PropTypes.bool,
    addButton: PropTypes.func
  };

  render() {
    const style = require('./Cards.scss');
    const {addButton, cards} = this.props;

    console.log(cards + 'loaded' + isLoaded);

    const handleReview = (card) => {
      const {reviewCard} = this.props; // eslint-disable-line no-shadow
      return () => reviewCard(String(card));
    };
    const {showAddForm} = this.props;
    // const addButton = (card) => {
    //   const {reviewCard} = this.props; // eslint-disable-line no-shadow
    //   return () => reviewCard(String(card));
    // };

    return (
      <div className={style.widgets + ' container'}>
        <Helmet title="Cards"/>
        <h1 className={style}>My Cards</h1>
        <div className="row">
          <div className="col-md-4">
            <table className="table table-hover">
              <thead>
              <tr>
                <th className={style.colorCol}>Type</th>
                <th className={style.sprocketsCol}>Number</th>
                <th className={style.ownerCol}>Bal</th>
                <th className={style.buttonCol}>Button</th>
              </tr>
              </thead>
              <tbody>
              {
                cards.map((card) =>
                  <tr key={card.id}>
                    <td className={style.idCol}>visa</td>
                    <td className={style.colorCol}>{card.number}</td>
                    <td className={style.sprocketsCol}>balance</td>
                    <td className={style.buttonCol}>
                      <button className="btn btn-primary btn-sm" onClick={handleReview(card.id)}>
                        <i className="fa fa-credit-card"/>
                      </button>
                    </td>
                  </tr>)
              }
              </tbody>
            </table>
          </div>
          <div className="col-md-8 pull-right">
            <button className="btn btn-primary" onClick={() => addButton(!showAddForm)}>
              Add new card
            </button>


                <div className="btn-group">
                  <button type="button" className="btn btn-success">Add Mastercard</button>
                  <button type="button" className="btn btn-success">Add VISA</button>

                </div>

          </div>
        </div>
      </div>
    );
  }
}
