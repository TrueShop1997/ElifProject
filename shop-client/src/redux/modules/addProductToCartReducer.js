const ADD_PRODUCT_TO_CART = 'shop-client/addToCart/ADD_PRODUCT_TO_CART';
const ADD_PRODUCT_TO_CART_SUCCESS = 'shop-client/addToCart/ADD_PRODUCT_TO_CART_SUCCESS';
const ADD_PRODUCT_TO_CART_FAIL = 'shop-client/addToCart/ADD_PRODUCT_TO_CART_FAIL';

const initialState = {
  addToCartError: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return state;
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        cartOrder: action.result,
        addToCartError: null,
      };
    case ADD_PRODUCT_TO_CART_FAIL:
      return {
        ...state,
        addToCartError: action.error
      };
    default:
      return state;
  }
}

export function addProductToCart(data) {
  return {
    types: [ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAIL],
    promise: (client) => client.post('/addProductToCart', {
      data
    })
  };
}
