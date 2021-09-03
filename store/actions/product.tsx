import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { ProductActions, ProductModel } from '../types/products';

export const loadProducts = () => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await axiosClient.get<ProductModel[]>('products');
      dispatch({
        type: 'SUCCESS',
        payload: {
          isLoadingProducts: false,
          error: false,
          errorMessage: null,
          products: response.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
