import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: String,
    price: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const ProductMessage = mongoose.model('ProductMessage', productSchema);

export default ProductMessage;