import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
