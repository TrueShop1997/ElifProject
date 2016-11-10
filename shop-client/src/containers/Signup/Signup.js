import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { SignupForm } from 'components';
import { signup } from 'redux/modules/signup';

@connect(
  () => ({}),
  { signup })
export default class Signup extends Component {
   static propTypes = {
     signup: PropTypes.func.isRequired
   }

  handleSubmit = (data) => {
    this.props.signup(data);
  }

  render() {
    return (
      <div className="container">
        <div className = "row">
          <div className="col-sm-8">
            <h1>Signup</h1>
            <Helmet title="Signup"/>
            <SignupForm onSubmit={this.handleSubmit}/>
            </div>
          <div className="col-sm-4">
            <h2>Cards</h2>
          </div>
        </div>
      </div>
    );
  }
}
