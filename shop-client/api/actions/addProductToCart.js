import Order from '../models/order';
import Product from '../models/product';
import mongoose from 'mongoose';

export default function addProductToCart(req) {
  return new Promise((resolve, reject) => {
    const { userId, productId, quantity } = req.body;
    const productIdObj = mongoose.Types.ObjectId(productId);
    Product.findById(productIdObj, (err, product) => {
      if (err) {
        throw err;
      } else {
        Order.create({
          userId,
          products: [{
            productId: productIdObj,
            name: product.name,
            price: product.price,
            quantity
          }],
          date: {
            created: new Date(),
            paid: '',
            delivered: ''
          },
          status: 'IN_CART'
        })
        .then(
          order => resolve({ order: order, total: order.findTotal() }),
          error => reject(error)
        );
      }
    });
  });
}
