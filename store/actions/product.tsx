import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { ProductActions, ProductModel } from '../types/products';
import { RedeemResponse, UserActions } from '../types/user';

/**
 *
 * @returns Dispatch action to Redux Store fetching all the available products for purchase
 */
export const loadProducts = () => {
  return async (dispatch: Dispatch<ProductActions>) => {
    dispatch({
      type: 'LOADING',
      payload: {
        isLoadingProducts: true,
      },
    });

    const { data } = await axiosClient.get<ProductModel[]>('products');
    dispatch({
      type: 'SUCCESS',
      payload: {
        isLoadingProducts: false,
        error: false,
        errorMessage: null,
        products: data,
      },
    });
  };
};

/**
 *
 * @param productCost Selected product cost
 * @param productId Selected product ID
 * @returns Dispatch action to Redux Store to redeem points
 */
export const redeemPoints = (
  productCost: ProductModel['cost'],
  productId: ProductModel['_id']
) => {
  return async (
    dispatch: Dispatch<ProductActions | UserActions>
  ): Promise<void> => {
    dispatch({
      type: 'REDEEMING_POINTS',
      payload: {
        redeeming: true,
        productId: productId,
      },
    });

    const body = {
      productId,
    };
    await axiosClient.post<RedeemResponse>('redeem', body);

    dispatch({
      type: 'REDEEM_POINTS_SUCCESS',
      payload: {
        points: productCost,
      },
    });
  };
};
