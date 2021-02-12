import axios from 'axios'; //we need it to make api calls

const url = 'https://onlineshop-project.herokuapp.com/products';
//return all post what we already have in database

export const fetchProducts = () => axios.get(url);
export const createProduct = (newProduct) => axios.post(url, newProduct);
export const updateProduct = (id, updatedProduct) => axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);