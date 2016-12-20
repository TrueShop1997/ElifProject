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
            <AddProductToCartButton disabled={!this.props.user} productId="5823a1d4f0489be3da46c636" />
            <AddProductToCartButton disabled={!this.props.user} productId="5858705aa484501faee644ef"/>
            <AddProductToCartButton disabled={!this.props.user} productId="5858dd0f85342f121236cc2f"/>
          </div>
        </div>
      </div>
    );
  }
}
