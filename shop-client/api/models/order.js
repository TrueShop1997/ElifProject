import mongoose, { Schema } from 'mongoose';

import Product from './product';

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    products: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      name: String,
      price: Number,
      // images: [String]
      quantity: Number
    }],
    date: {
      created: Date,
      paid: Date,
      delivered: Date
    },
    status: { type: String, enum: [
      'IN_CART',
      'PAID',
      'DELIVERING',
      'DELIVERED'
    ],
    required: true
  },
  total: { type: Number, required: true }
  // shippingAddress: String
});

OrderSchema.methods.findTotal = function total() {
  return this.products
    .map(function(item) {
      return item.productId.price * item.quantity;
    })
    .reduce(function(prev, curr) {
      return prev + curr;
    });
};

export default mongoose.model('Order', OrderSchema);
