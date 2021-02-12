import React from 'react';
import useStyles from './styles.js';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteProduct } from '../../actions/products.js';

const Product = ({ product, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.image || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffastexpo.net%2Fapple-watch-apple-watch-iwatch-png-image%2F&psig=AOvVaw2r3Yj0Q1jvNLTxm3CrFr11&ust=1612874846203000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiq95Sp2u4CFQAAAAAdAAAAABAP'} title={product.title} />
      <div className={classes.overlay}>
        <Typography variant="body2">{moment(product.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(product._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="inherit" component="h2">{product.title}</Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{product.description}</Typography>
      </div>
      <div className={classes.details2}>
        <Typography variant="body2" gutterBottom variant="subtitle1" component="h2">{product.price}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteProduct(product._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
