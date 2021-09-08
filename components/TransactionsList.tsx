//React
import React from 'react';

//Chakra UI Components
import { Grid } from '@chakra-ui/layout';

//TypeScript interfaces
import { TransactionsListProps } from '../types';

///Custom Transaction Card Component
import { TransactionCard } from './TransactionCard';

/**
 * Renders a Grid List containing every transaction made by the current logged user.
 */
export const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  return (
    <Grid
      gap={10}
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)',
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
