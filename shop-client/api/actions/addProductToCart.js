import Order from '../models/order';

export default function addProductToCart(req) {
  return new Promise((resolve, reject) => {
    const { userId, productId, count } = req.body;
    const newOrder = {
      userId,
      productId,
      count,
      status: 'IN_CART'
    };

    Order.create(newOrder, (err, order) => {
      if (err) {
        reject('creating order error');
      } else {
        resolve(order);
      }
    })
  });
}
