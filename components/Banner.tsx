//React
import React from 'react';

//Chakra UI Components
import { Flex, Heading, Stack } from '@chakra-ui/layout';

/**
 * Banner Component containing the provided background image.
 */
export const Banner: React.FC = (): JSX.Element => {
  return (
    <Stack
      flex={1}
      spacing={6}
      px={{ base: 0, sm: 10 }}
      mx={{ base: 0, sm: 10, xl: 20 }}
      h={{ base: 150, md: 300, xl: 300 }}
    >
      <Flex
        bgImage="url('/header-x1.png')"
        alignItems='flex-start'
        bgSize='cover'
        borderRadius={{ base: 0, sm: 'md' }}
        borderBottomRadius={{ base: 'md' }}
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        h={'100%'}
        p={7}
        position='relative'
        w='100%'
      >
        <Heading color='white' fontSize='3xl' fontFamily='sans-serif'>
          Electronics
        </Heading>
      </Flex>
    </Stack>
  );
};
