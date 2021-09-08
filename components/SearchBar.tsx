//React
import React from 'react';

//Chakra UI Components
import { Input, InputLeftElement } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';

//TypeScript interfaces
import { SearchBarProps } from '../types';
import { InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

/**
 * Renders a Search Bar component
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}): JSX.Element => {
  return (
    <Stack mt={10} mx='20%'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder='What are you looking for?'
        />
      </InputGroup>
    </Stack>
  );
};
