import Order from '../../models/order';

// TODO: check if products still exist
export default function load(req) {
  return new Promise((resolve, reject) => {
    if (req.user) {
      Order.findOne({ userId: req.user._id.toString(), status: 'IN_CART' })
        .then(
          order => !order || !order.products.length? resolve(null) : resolve({ order: order, total: order.findTotal() }),
          err => reject(err)
        );
    } else {
      resolve(null);
    }
  });
}
