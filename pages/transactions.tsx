//React and React Redux
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Chakra UI Components
import { Center } from '@chakra-ui/layout';
import { ScaleFade, Spinner } from '@chakra-ui/react';

//Custom Components
import { TransactionsHeader } from '../components/TransactionsHeader';
import { TransactionsList } from '../components/TransactionsList';
import { NextPage } from 'next';

//Redux Actions
import { fetchUserTransactions } from '../store/actions/transactions';
import { AppState } from '../store/reducers';

/**
 * Renders all the user's latest transactions.
 */
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
          <Spinner color='blue.500' />
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
