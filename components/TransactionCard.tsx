import { Image } from '@chakra-ui/image';
import { Badge, Box, Divider, Spacer, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { parseDate } from '../utils/dateParser';
import { TransactionCardProps } from './types';

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
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
      <Box mt='3' fontWeight='bold' as='h4' lineHeight='normal' isTruncated>
        {transaction.name}
      </Box>
      <Stack direction='row' alignItems='center'>
        <Stack direction='row' alignItems='center'>
          <Box>{transaction.cost}</Box>
          <Image src='/icons/coin.svg' w={4} h={4} />
        </Stack>
        <Spacer />
        <Stack>
          <Text fontSize='sm'>
            Redeemed {parseDate(transaction.createDate)}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
