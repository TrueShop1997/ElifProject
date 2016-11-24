import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func,
  }

  handleSubmit = (event) => {
    const email = this.refs.email;
    const password = this.refs.password;
    if (email.value && password.value) {
      event.preventDefault();
      this.props.login({ email: email.value, password: password.value });
      email.value = '';
      password.value = '';
    } else {
      this.refs.errorMsg.value = 'Smth wrong. try again';
    }
  };

  render() {
    // const { user, logout } = this.props;
    const styles = require('./Login.scss');

    return (
      <div className={styles.loginPage + ' container'}>
        <div>
          <h3>Login</h3>
          <div className={styles.blockMedia + ' row'}>
            <div className="col-xs-4 col-sm-2">
              <a href="/api/login/facebook/" className={styles.btnFacebook + ' btn btn-lg btn-block'}>
                <i className="fa fa-facebook visible-xs"></i>
                <span className="hidden-xs"><font color="white">Facebook</font></span>
              </a>
            </div>
            <div className="col-xs-4 col-sm-2">
              <a href="#" className={styles.btnTwitter + ' btn btn-lg btn-block'}>
                <i className="fa fa-twitter visible-xs"></i>
                <span className="hidden-xs"><font color="white">Twitter</font></span>
              </a>
            </div>
            <div className="col-xs-4 col-sm-2">
              <a href="#" className={styles.btnGoogle + ' btn btn-lg btn-block'}>
              <i className="fa fa-google-plus visible-xs"></i>
              <span className="hidden-xs"><font color="white">Google+</font></span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <hr />
                <span className="omb_spanOr">or</span>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <form className = "form-signin" onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user"></i></span>
                  <input ref="email" type="email" className="form-control" placeholder="email address" required />
                </div>
                <span className="help-block"></span>

                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                  <input ref="password" type="password" className="form-control" placeholder="Password" required />
                </div>
                <label className="help-block" ref="errorMsg"></label>

                <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <label className="checkbox">
                <input type="checkbox" value="remember-me" />Remember Me
              </label>
            </div>
            <div className="col-xs-12 col-sm-3">
              <p>
                <a href="#">Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
        </div>
        );
  }
}
