import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({ user: state.auth.user }),
  {})
export default class ForgotPassword extends Component {
  static propTypes = {
    user: PropTypes.object
  };
  render() {
    return (
      <div className="container">
        <div className="row">

            <div className="form-group">

              <div className="col-sm-10 col-md-offset-1"
                   style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Forgot password?</h4>
                    </div>

                    <div className="modal-body">
                      <div className="form-horizontal">
                        <div className="form-group">
                          <label className="col-sm-2">Email</label>
                          <div className="col-sm-8">
                            <input type="email" className="form-control" ref="email" required />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
      </div>
      </div>);
  }
}
