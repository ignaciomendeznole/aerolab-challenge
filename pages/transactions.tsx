import { Center } from '@chakra-ui/layout';
import { TransactionsHeader } from '../components/TransactionsHeader';
import { ScaleFade, Spinner } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionsList } from '../components/TransactionsList';
import { fetchUserTransactions } from '../store/actions/transactions';
import { AppState } from '../store/reducers';

const Transactions: NextPage = (): JSX.Element => {
  const { isLoadingTransactions, transactions } = useSelector(
    (state: AppState) => state.transactionReducer
  );
  const dispatch = useDispatch();

  /**
   * Method to call for dispatch Redux Action to fetch user's latest transactions.
   */
  const getTransactions = useCallback(() => {
    dispatch(fetchUserTransactions());
  }, []);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <React.Fragment>
      <TransactionsHeader />
      {isLoadingTransactions ? (
        <Center>
          <Spinner colorScheme='orange' />
        </Center>
      ) : (
        <ScaleFade in={!isLoadingTransactions} initialScale={0.9}>
          <TransactionsList transactions={transactions} />
        </ScaleFade>
      )}
    </React.Fragment>
  );
};

export default Transactions;
