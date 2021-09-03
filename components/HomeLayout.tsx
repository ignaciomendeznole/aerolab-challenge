import { Container } from '@chakra-ui/layout';
import React from 'react';

export const HomeLayout: React.FC = ({ children }) => {
  return (
    <Container mx={7} alignItems='center' width={1200} flex={1}>
      {children}
    </Container>
  );
};
