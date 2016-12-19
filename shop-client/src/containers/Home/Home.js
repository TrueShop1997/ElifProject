import React, { Component, PropTypes } from 'react';
import { AddProductToCartButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {isLoaded, load as loadCart} from 'redux/modules/cart';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    if (getState().auth.user && !isLoaded(getState())) {
      dispatch(loadCart());
    }
  }
}])
@connect(
  state => ({ user: state.auth.user }),
  {})
export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  };
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
              <p>
                <img src={logoImage}/>
              </p>
            <h1>{config.app.title}</h1>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <AddProductToCartButton disabled={!this.props.user} productId="582b016dea52341ad8d333be" />
            <AddProductToCartButton disabled={!this.props.user} productId="582b0108ea52341ad8d333bd"/>
            <AddProductToCartButton disabled={!this.props.user} productId="5838a7cdd444979a27846b63"/>
          </div>
        </div>
      </div>
    );
  }
}
