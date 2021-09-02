import { Image } from '@chakra-ui/image';
import { Link, Spacer, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <Stack
      alignItems={'center'}
      direction='row'
      height='70px'
      padding={3}
      width='100%'
    >
      <Link href='/'>
        <Image src='/aerolab-logo.svg' w={7} />
      </Link>
      <Spacer />
      <Text align='right' as='h4' fontSize={20} mr={2}>
        Juan Carlos
      </Text>
    </Stack>
  );
};
