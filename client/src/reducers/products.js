import { FETCH_ALL, CREATE, UPDATE, DELETE, } from '../constants/actionTypes';

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...products, action.payload];
    case UPDATE:
      return products.map((product) => product._id === action.payload._id ? action.payload : product);// action.payload return updated product/ output of map is array
    case DELETE:
      return products.filter((product) => product._id !== action.payload);//return all product except one <- where product'is is equal to action.payload
    default:
      return products;
  }
}; 