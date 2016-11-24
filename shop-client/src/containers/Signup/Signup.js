import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';

import { SignupForm } from 'components';
import { signup } from 'redux/modules/signup';

@connect(
  () => ({}),
  { signup, pushState: push })
export default class Signup extends Component {
   static propTypes = {
     signup: PropTypes.func.isRequired,
     pushState: PropTypes.func.isRequired
   }

  handleSubmit = (data) => {
    this.props.signup(data);
    this.props.pushState('/login');
  }

  render() {
    const styles = require('./Signup.scss');
    return (
      <div className="container">
        <div className = "row">
          <div className="col-md-7">
            <h1>Signup</h1>
            <Helmet title="Signup"/>

            <div className = "panel panel-default">
              <div className = "panel-body">
              <SignupForm onSubmit={this.handleSubmit}/>
              </div>
            </div>

            </div>
          <div className="col-md-5">
            <h2>Connection with social networks</h2>
            You can signup for TrueShop1997 using the social network accounts <br />
            <div>
              <a href="#" className={styles.btnFacebook + ' btn btn-lg btn-block'}>
                <i className="fa fa-facebook visible-xs"></i>
                <span className="hidden-xs"><font color="white">Facebook</font></span>
              </a>
            </div>
            <br />
            <div>
              <a href="#" className={styles.btnTwitter + ' btn btn-lg btn-block'}>
                <i className="fa fa-twitter visible-xs"></i>
                <span className="hidden-xs"><font color="white">Twitter</font></span>
              </a>
            </div>
            <br />
            <div>
              <a href="#" className={styles.btnGoogle + ' btn btn-lg btn-block'}>
              <i className="fa fa-google-plus visible-xs"></i>
              <span className="hidden-xs"><font color="white">Google+</font></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
