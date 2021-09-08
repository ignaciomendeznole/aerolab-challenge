//React
import React from 'react';

//Chakra UI Components
import { TimeIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Badge, Box, Divider, Spacer, Stack, Text } from '@chakra-ui/layout';

//TypeScript interfaces
import { TransactionCardProps } from '../types';

//Method used to parse transaction date
import { parseDate } from '../utils/dateParser';

/**
 * Renders a single transaction with its specified properties.
 */
export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}): JSX.Element => {
  return (
    <Box
      bgColor='white'
      borderRadius='lg'
      boxShadow='md'
      p={6}
      position='relative'
      maxW='sm'
      overflow='hidden'
      key={transaction._id}
    >
      <Image src={transaction.img.hdUrl} alt={transaction.name} />

      <Box px={2} py={3}>
        <Box d='flex' alignItems='center'>
          <Badge borderRadius='full' px='2' py='0.5' colorScheme='blue'>
            {transaction.category}
          </Badge>
        </Box>
      </Box>
      <Divider orientation='horizontal' />
      <Box
        mt={5}
        mb={5}
        fontWeight='bold'
        as='h4'
        lineHeight='normal'
        isTruncated
      >
        {transaction.name}
      </Box>
      <Stack direction='row' alignItems='center'>
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <Box fontSize='md' fontWeight='semibold'>
            {transaction.cost}
          </Box>
          <Image src='/icons/coin.svg' w={5} h={5} alt='Coin' />
        </Stack>
        <Spacer />
        <Stack direction='row' alignItems='center'>
          <TimeIcon />
          <Text fontSize='sm'>
            Redeemed {parseDate(transaction.createDate)}
          </Text>
        </Stack>
      </Stack>
      <Divider orientation='horizontal' mt={4} />
      <Stack mt={4} alignItems='center'>
        <Text fontSize='sm' fontWeight='semibold'>
          {' '}
          ID: {transaction._id}
        </Text>
      </Stack>
    </Box>
  );
};
