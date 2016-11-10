import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from 'redux/modules/addProductToCartReducer';

@connect(
  (state) => ({ ...state.addProductToCartReducer }),
  { addProductToCart }
)
export default class AddProductToCartButton extends Component {
  static propTypes = {
    cartOrder: PropTypes.object,
    addToCartError: PropTypes.string,
    addProductToCart: PropTypes.func
  }

  handleOnClick = () => {
    const productId = '123'; // hardcoded "productId"
    const userId = '345'; // hardcoded "userId"
    const count = 2; // hardcoded "count"

    this.props.addProductToCart({ userId, productId, count });
  }

  render() {
    return (
      <div>
        <button onClick = {this.handleOnClick}>Add to cart</button>
      </div>
    );
  }
}
