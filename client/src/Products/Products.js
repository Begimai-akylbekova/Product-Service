import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Product from './Product/Product.js';
import useStyles from './styles.js';
import { useSelector } from 'react-redux';

const Products = ({ setCurrentId }) => {
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  console.log(products);

  return (
    !products.length ? <CircularProgress /> : (// if products.length is't 0, then below
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={6}>
            <Product product={product} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};
export default Products;
