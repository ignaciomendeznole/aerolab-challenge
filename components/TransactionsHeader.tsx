import { Image } from '@chakra-ui/image';
import { Box, Link, Spacer, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

export const TransactionsHeader: React.FC = (): JSX.Element => {
  return (
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
  );
};
