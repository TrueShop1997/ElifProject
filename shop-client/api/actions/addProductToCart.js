import Order from '../models/order';
import Product from '../models/product';

export default function addProductToCart(req) {
  return new Promise((resolve, reject) => {
    const { userId, productId, quantity } = req.body;
    Order.create({
      userId,
      products: [{
        productId,
        quantity
      }],
      date: {
        created: new Date(),
        paid: '',
        delivered: ''
      },
      status: 'IN_CART'
    })
    .then(order => Order.populate(order, { path: 'products.productId', select: 'name price' }))
    .then(
      order => resolve({ order: order, total: order.findTotal() }),
      error => reject(error)
    );
  });
}
