import mongoose from 'mongoose';
import ProductMessage from '../models/productMessage.js';
import express from 'express';

const router = express.Router();

export const getProducts = async (req, res) => {// call back function 
    try {
        const productMessages = await ProductMessage.find();//find function takes time, that's why we need await

        console.log(productMessages);
        res.status(200).json(productMessages);//array of all messages that we have 

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {// asyncronik call back function 
    const product = req.body;

    const newProduct = new ProductMessage(product);
    try {
        await newProduct.save();

        res.status(201).json(newProduct);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
// products/123-->123 is ID
export const updateProduct = async (req, res) => {
    const { id: _id } = req.params;// get ID by req and make id is _id
    const product = req.body;//is going to be send from frontend

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');

    const updatedProduct = await ProductMessage.findByIdAndUpdate(_id, product, { new: true });//product is data for update/ new:true - is updated product

    res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');

    await ProductMessage.findByIdAndRemove(id);

    res.json({ message: 'Product deletes successfully' });

}