export interface TransactionsState {
  isLoadingTransactions: boolean;
  transactions: TransactionModel[];
}

export interface TransactionModel {
  productId: string;
  name: string;
  cost: number;
  category: string;
  _id: string;
  createDate: string;
  img: Img;
}

export interface Img {
  url: string;
  hdUrl: string;
}

export interface LoadingTransactionsAction {
  readonly type: 'LOADING_TRANSACTIONS';
  payload: {
    isLoadingTransactions: boolean;
  };
}

export interface TransactionsFetchedAction {
  readonly type: 'TRANSACTIONS_SUCCESS';
  payload: {
    isLoadingTransactions: boolean;
    transactions: TransactionsState['transactions'];
  };
}

export type TransactionsActions =
  | LoadingTransactionsAction
  | TransactionsFetchedAction;
