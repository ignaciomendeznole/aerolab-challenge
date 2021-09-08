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
      px={10}
      mx={{ sm: 0, xl: 20 }}
      h={{ base: 150, md: 300, xl: 300 }}
    >
      <Flex
        bgImage="url('/header-x1.png')"
        alignItems='flex-start'
        bgSize='cover'
        borderRadius='md'
        h={'100%'}
        p={10}
        position='relative'
        w='100%'
      >
        <Heading color='white' fontSize='4xl'>
          Electronics
        </Heading>
      </Flex>
    </Stack>
  );
};
