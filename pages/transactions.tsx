import { Box, Center, Link, Spacer, Stack, Text } from '@chakra-ui/layout';
import { ScaleFade, Spinner, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionCard } from '../components/TransactionCard';
import { TransactionsList } from '../components/TransactionsList';
import { fetchUserTransactions } from '../store/actions/transactions';
import { AppState } from '../store/reducers';

const Transactions: NextPage = () => {
  const { isLoadingTransactions, transactions } = useSelector(
    (state: AppState) => state.transactionReducer
  );
  const dispatch = useDispatch();

  const getTransactions = useCallback(() => {
    dispatch(fetchUserTransactions());
  }, []);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <React.Fragment>
      <Box
        maxWidth={'100%'}
        mb={{ base: 10, '2xl': 16 }}
        mx='auto'
        borderBottomWidth={2}
        position='sticky'
        top='0'
        zIndex={3}
        bgColor='white'
        px={{ base: 0, lg: 150 }}
      >
        <Stack
          alignItems={'center'}
          direction='row'
          height='90px'
          padding={3}
          width='100%'
        >
          <Link href='/'>
            <Image src='/aerolab-logo.svg' w={7} />
          </Link>

          <Spacer />

          <Text fontStyle='italic' fontSize='lg'>
            Your transactions
          </Text>
        </Stack>
      </Box>

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
