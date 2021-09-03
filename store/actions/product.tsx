import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { AppState } from '../reducers';
import { ProductActions, ProductModel } from '../types/products';
import { RedeemResponse, UserActions } from '../types/user';

export const loadProducts = () => {
  return async (dispatch: Dispatch<ProductActions>) => {
    dispatch({
      type: 'LOADING',
      payload: {
        isLoadingProducts: true,
      },
    });
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

export const redeemPoints = (
  productCost: ProductModel['cost'],
  productId: ProductModel['_id']
) => {
  return async (dispatch: Dispatch<ProductActions | UserActions>) => {
    const body = {
      productId,
    };
    dispatch({
      type: 'REDEEMING_POINTS',
      payload: {
        redeeming: true,
        productId: productId,
      },
    });

    try {
      await axiosClient.post<RedeemResponse>('redeem', body);

      dispatch({
        type: 'REDEEM_POINTS_SUCCESS',
        payload: {
          points: productCost,
        },
      });
    } catch (error) {}
  };
};
