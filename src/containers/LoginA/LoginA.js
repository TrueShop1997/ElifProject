import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  }

  render() {
    const {user, logout} = this.props;
    const styles = require('./jquery-jvectormap-2.0.3');
    return (
      <div className={styles.loginPages }>
        <Helmet title="LoginA"/>
        <h1>LoginA</h1>
        {!user &&

        <div>
          <div className="login_wrapper">
            <div className="animate form login_form">
              <section className="login_content">
                <form>
                  <h1>Login Form</h1>
                  <div>
                    <input type="text" className="form-control" placeholder="Username" required="" />
                  </div>
                  <div>
                    <input type="password" className="form-control" placeholder="Password" required="" />
                  </div>
                  <div>
                    <a className="btn btn-default submit" href="index.html">Log in</a>
                    <a className="reset_pass" href="#">Lost your password?</a>
                  </div>

                  <div className="clearfix"></div>

                  <div className="separator">
                    <p className="change_link">New to site?
                      <a href="#signup" className="to_register"> Create Account </a>
                    </p>

                    <div className="clearfix"></div>
                    <br />

                    <div>
                      <h1><i className="fa fa-paw"></i> Gentelella Alela!</h1>
                      <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>

        }
        {user &&
        <div>
          <p>You are currently logged in as {user.name}.</p>

          <div>
            <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out"/>{' '}Log Out</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
