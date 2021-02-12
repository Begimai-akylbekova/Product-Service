import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';


//Action Creators
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();//take from backend

    dispatch({ type: FETCH_ALL, payload: data });//sending data to the payload
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);

  }
}

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);//return updated product

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);

  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error);

  }
}