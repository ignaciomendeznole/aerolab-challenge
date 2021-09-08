//React
import React from 'react';

//Chakra UI Components
import { Flex, Heading, Stack } from '@chakra-ui/layout';

/**
 * Banner Component containing the provided background image.
 */
export const Banner: React.FC = (): JSX.Element => {
  return (
    <Stack flex={1} spacing={6} px={10} mx={{ sm: 0, xl: 20 }}>
      <Flex
        bgImage="url('/header-x1.png')"
        alignItems='flex-start'
        bgSize={{ base: 'cover', lg: 'cover' }}
        borderRadius='md'
        minHeight={{ base: 'md', sm: 400, md: 'md', '2xl': 600 }}
        p={6}
      >
        <Heading color='white' fontSize='4xl'>
          Electronics
        </Heading>
      </Flex>
    </Stack>
  );
};
