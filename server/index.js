import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/products.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/products', productRoutes);// middleware
app.get('/', (req, res) => {
    res.send('Hello to Products API');
});

const PORT = process.env.PORT || 8080;


mongoose.connect('process.env.CONNECTION_URL', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);//makes sure we get any wornings in the console 