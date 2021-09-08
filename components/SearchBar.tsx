//React
import React from 'react';

//Chakra UI Components
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';

//TypeScript interfaces
import { SearchBarProps } from '../types';

/**
 * Renders a Search Bar component
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}): JSX.Element => {
  return (
    <Stack mt={10} mx='20%'>
      <Input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder='What are you looking for?'
      />
    </Stack>
  );
};
