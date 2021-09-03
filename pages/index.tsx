import { Button, ButtonGroup } from '@chakra-ui/button';
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useToast } from '@chakra-ui/toast';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { ProductsListGrid } from '../components/ProductsList';
// import { ProductSorting, useSort } from '../hooks/useSort';
import { loadProducts, redeemPoints } from '../store/actions/product';
import { addPoints, fetchUserInformation } from '../store/actions/user';
import { AppState } from '../store/reducers';
import { ProductModel } from '../store/types/products';

const Home: NextPage = () => {
  const [sortingOption, setSortingOption] =
    useState<ProductSorting>('most recent');
  const toast = useToast();
  const dispatch = useDispatch();
  const getProducts = useCallback(() => {
    dispatch(loadProducts());
  }, []);

  const getUserInformation = useCallback(() => {
    dispatch(fetchUserInformation());
  }, []);
  const { products, isLoadingProducts } = useSelector(
    (state: AppState) => state.productsReducer
  );
  const { user, isLoadingUser, redeeming, productToRedeem } = useSelector(
    (state: AppState) => state.userReducer
  );

  // const { sortedProducts } = useSort(products, sortingOption);

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

  const redeemProduct = (
    productCost: ProductModel['cost'],
    productId: ProductModel['_id']
  ) => {
    if (user?.points! - productCost < 0) {
      toast({
        position: 'bottom-left',
        title: `Not enough credits! ${String.fromCodePoint(128531)}`,
        description: 'Please, feel free to get more credits in the Aerostore',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(redeemPoints(productCost, productId));
    setTimeout(() => {
      toast({
        position: 'bottom-left',
        title: `Purchase completed successfully! ${String.fromCodePoint(
          129321
        )}`,
        description: `You have just made a purchase and we could not be happier! ${String.fromCodePoint(
          128588
        )}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }, 1000);
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  useEffect(() => {
    getProducts();
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

      {isLoadingProducts ? (
        <Center>
          <Spinner color='red.500' />
        </Center>
      ) : (
        <>
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

          <Stack
            spacing={4}
            mt={4}
            p={10}
            mx={120}
            direction='row'
            borderBottomWidth={2}
          >
            <Stack direction='row' spacing={7} alignItems='center'>
              <Text fontSize='xl'>Sort by</Text>
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
                colorScheme={
                  sortingOption === 'most recent' ? 'blue' : undefined
                }
                borderRadius={999}
                onClick={() => setSortingOption('most recent')}
              >
                Most Recent
              </Button>
              <Button
                isActive={sortingOption === 'lowest price'}
                size='sm'
                colorScheme={
                  sortingOption === 'lowest price' ? 'blue' : undefined
                }
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
                colorScheme={
                  sortingOption === 'highest price' ? 'blue' : undefined
                }
                px={10}
                py={7}
                borderRadius={999}
                onClick={() => setSortingOption('highest price')}
              >
                Highest Price
              </Button>
            </ButtonGroup>
          </Stack>

          <ProductsListGrid
            products={products}
            isRedeeming={redeeming}
            redeemProduct={redeemProduct}
            isLoadingProducts={isLoadingProducts}
            productRedeeming={productToRedeem}
          />
          <Stack mx={120} mb={20}>
            <Text>
              Displaying {products.length} of {products.length} products
            </Text>
          </Stack>
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
