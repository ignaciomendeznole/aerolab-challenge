import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { TransactionModel, TransactionsActions } from '../types/transactions';

export const fetchUserTransactions = () => {
  return async (dispatch: Dispatch<TransactionsActions>) => {
    dispatch({
      type: 'LOADING_TRANSACTIONS',
      payload: {
        isLoadingTransactions: true,
      },
    });
    try {
      const response = await axiosClient.get<TransactionModel[]>(
        'user/history'
      );
      dispatch({
        type: 'TRANSACTIONS_SUCCESS',
        payload: {
          isLoadingTransactions: false,
          transactions: response.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
