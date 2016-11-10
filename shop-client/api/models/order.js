import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-as-promised';

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    count: { type: Number, required: true},
    status: { type: String, enum: [
      'IN_CART',
      'PAID',
      'DELIVERING',
      'DELIVERED'
    ],
    required: true
  }
});

export default mongoose.model('Order', OrderSchema);
