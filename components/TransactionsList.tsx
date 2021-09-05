import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { TransactionModel } from '../store/types/transactions';
import { TransactionCard } from './TransactionCard';

interface TransactionsListProps {
  transactions: TransactionModel[];
}

export const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  return (
    <Grid
      gap={6}
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      width='max'
      mx={'auto'}
      my='6'
      py={7}
      borderBottomWidth={3}
    >
      {transactions.map((transaction) => (
        <TransactionCard transaction={transaction} />
      ))}
    </Grid>
  );
};
