import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  categoryId: String,
  name: String,
  price: Number,
  inStock: Boolean,
  // images: [String],
  // addedDate: Date,
  // company: String
  description: String,
  properties: [{
    name: String,
    value: String
  }]
});

export default mongoose.model('Product', ProductSchema);
