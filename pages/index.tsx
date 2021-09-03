import { Button, ButtonGroup } from '@chakra-ui/button';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { loadProducts } from '../store/actions/product';
import { addPoints, fetchUserInformation } from '../store/actions/user';
import { AppState } from '../store/reducers';

const Home: NextPage = () => {
  const [sortingOption, setSortingOption] = useState<
    'most recent' | 'highest price' | 'lowest price'
  >('most recent');
  const toast = useToast();
  const dispatch = useDispatch();
  const getProducts = useCallback(() => {
    dispatch(loadProducts());
  }, []);

  const getUserInformation = useCallback(() => {
    dispatch(fetchUserInformation());
  }, []);
  const { products } = useSelector((state: AppState) => state.productsReducer);
  const { user, isLoadingUser } = useSelector(
    (state: AppState) => state.userReducer
  );

  useEffect(() => {
    getProducts();
  }, []);

  const buyPoints = (points: number) => {
    dispatch(addPoints(points));

    toast({
      title: 'Points added successfully.',
      description: `Hoooray! You just earned ${points} points! ${String.fromCodePoint(
        128522
      )}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <React.Fragment>
      <Meta />

      <Box
        maxWidth={{ xl: 1200 }}
        mb={{ base: 10, '2xl': 16 }}
        mx='auto'
        borderBottomWidth={2}
      >
        <Header user={user} isLoading={isLoadingUser} buyPoints={buyPoints} />
      </Box>

      <Stack flex={1} spacing={6} px={10} mx={{ base: 20 }}>
        <Flex
          bgImage="url('/header-x1.png')"
          alignItems='flex-start'
          bgSize='cover'
          borderRadius='md'
          minHeight={{ base: 'md', sm: 400, md: 'md', '2xl': 600 }}
          p={6}
        >
          <Heading color='white' fontSize='4xl'>
            Electronics
          </Heading>
        </Flex>
      </Stack>

      <Stack spacing={4} mt={4} p={10} mx={20} direction='row'>
        <Stack direction='row' spacing={7} alignItems='center'>
          <Text fontSize='xl'>Order by</Text>
          <Center alignSelf='center' h='40px' w={10}>
            <Divider orientation='vertical' colorScheme='red' />
          </Center>
        </Stack>

        <ButtonGroup spacing={45}>
          <Button
            isActive={sortingOption === 'most recent'}
            size='sm'
            px={10}
            py={7}
            colorScheme={sortingOption === 'most recent' ? 'blue' : undefined}
            borderRadius={999}
            onClick={() => setSortingOption('most recent')}
          >
            Most Recent
          </Button>
          <Button
            isActive={sortingOption === 'lowest price'}
            size='sm'
            colorScheme={sortingOption === 'lowest price' ? 'blue' : undefined}
            px={10}
            py={7}
            borderRadius={999}
            onClick={() => setSortingOption('lowest price')}
          >
            Lowest Price
          </Button>
          <Button
            isActive={sortingOption === 'highest price'}
            size='sm'
            colorScheme={sortingOption === 'highest price' ? 'blue' : undefined}
            px={10}
            py={7}
            borderRadius={999}
            onClick={() => setSortingOption('highest price')}
          >
            Highest Price
          </Button>
        </ButtonGroup>
      </Stack>
    </React.Fragment>
  );
};

export default Home;
