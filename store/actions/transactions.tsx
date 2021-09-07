import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { TransactionModel, TransactionsActions } from '../types/transactions';

/**
 *
 * @returns Dispatch action to Redux Store that loads the user's latest transactions
 */
export const fetchUserTransactions = () => {
  return async (dispatch: Dispatch<TransactionsActions>) => {
    dispatch({
      type: 'LOADING_TRANSACTIONS',
      payload: {
        isLoadingTransactions: true,
      },
    });

    const response = await axiosClient.get<TransactionModel[]>('user/history');
    dispatch({
      type: 'TRANSACTIONS_SUCCESS',
      payload: {
        isLoadingTransactions: false,
        transactions: response.data,
      },
    });
  };
};
