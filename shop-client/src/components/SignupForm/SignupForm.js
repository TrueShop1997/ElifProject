import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import signupValidation from './signupValidation';
import * as signupActions from 'redux/modules/signup';

function asyncValidate(data, dispatch, { isValidEmail }) {
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidEmail(data);
}
@connect(() => ({}),
  dispatch => bindActionCreators(signupActions, dispatch)
)
@reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'phoneNumber', 'address', 'email', 'password'],
  validate: signupValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})
export default class SignupForm extends Component {
  static propTypes = {
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      asyncValidating,
      fields: {firstName, lastName, phoneNumber, address, email, password},
      handleSubmit,
      } = this.props;
    const styles = require('./SignupForm.scss');
    const renderInput = (field, label, type = 'text', showAsyncValidating) =>
      <div className={'form-group' + (field.error && field.touched ? ' has-error' : '')}>
        <label htmlFor={field.name} className="col-sm-2">{label}</label>
        <div className={'col-sm-8 ' + styles.inputGroup}>
          {showAsyncValidating && asyncValidating && <i className={'fa fa-cog fa-spin ' + styles.cog}/>}
          <input type={type} className="form-control" id={field.name} {...field} required/>
          {field.error && field.touched && <div className="text-danger">{field.error}</div>}
        </div>
      </div>;

    return (
      <div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {renderInput(firstName, 'First Name')}
          {renderInput(lastName, 'Last Name')}
          {renderInput(phoneNumber, 'Phone Number', 'number')}
          {renderInput(address, 'Address')}
          {renderInput(email, 'Email', 'email', true)}
          {renderInput(password, 'Password', 'password')}

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
