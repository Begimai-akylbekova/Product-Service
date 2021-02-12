import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createProduct, updateProduct } from '../actions/products.js';


//get the current ID 
const Form = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({ title: '', price: '', description: '', image: '' });
  const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const handleSubmit = (e) => {//send post req with all data 
    e.preventDefault();

    if (currentId) {
      dispatch(updateProduct(currentId, productData));
    } else {
      dispatch(createProduct(productData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setProductData({ title: '', price: '', description: '', image: '' });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${product.title}"` : 'Creating a product'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
        <TextField name="price" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />

        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );

}

export default Form;
