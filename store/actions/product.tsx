import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { ProductActions, ProductScheme } from '../types/products';

export const loadProducts = () => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await axiosClient.get<ProductScheme[]>('products');
      dispatch({
        type: 'SUCCESS',
        payload: {
          isLoading: false,
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
