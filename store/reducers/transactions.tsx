import { TransactionsActions, TransactionsState } from '../types/transactions';

const initialState: TransactionsState = {
  isLoadingTransactions: false,
  transactions: [],
};

export const transactionReducer = (
  state: TransactionsState = initialState,
  action: TransactionsActions
): TransactionsState => {
  switch (action.type) {
    case 'LOADING_TRANSACTIONS':
      return {
        ...state,
        isLoadingTransactions: action.payload.isLoadingTransactions,
      };
    case 'TRANSACTIONS_SUCCESS':
      return {
        ...state,
        isLoadingTransactions: action.payload.isLoadingTransactions,
        transactions: action.payload.transactions.sort((a, b) => {
          return (
            new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
          );
        }),
      };
    default:
      return state;
  }
};
