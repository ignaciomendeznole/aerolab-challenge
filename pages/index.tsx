import { Button } from '@chakra-ui/button';
import { Box, Center, Divider, Stack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useToast } from '@chakra-ui/toast';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { ProductsListGrid } from '../components/ProductsList';
import { useSort } from '../hooks/useSort';
import { loadProducts, redeemPoints } from '../store/actions/product';
import { addPoints, fetchUserInformation } from '../store/actions/user';
import { AppState } from '../store/reducers';
import { ProductModel } from '../store/types/products';
import { ProductSorting } from '../types';

const Home: NextPage = (): JSX.Element => {
  const [sortingOption, setSortingOption] =
    useState<ProductSorting>('most recent');

  const toast = useToast();

  const dispatch = useDispatch();

  /**
   * Method that calls for the Redux Action to load the available products.
   */
  const getProducts = useCallback(() => {
    dispatch(loadProducts());
  }, []);

  /**
   * Method that calls for the Redux Action that handles the user information fetching.
   */
  const getUserInformation = useCallback(() => {
    dispatch(fetchUserInformation());
  }, []);

  const { products, isLoadingProducts } = useSelector(
    (state: AppState) => state.productsReducer
  );

  const { user, isLoadingUser, redeeming, productToRedeem } = useSelector(
    (state: AppState) => state.userReducer
  );

  const { sortedProducts } = useSort(products, sortingOption);

  /**
   *
   * @param points Points that will be sent out to Redux action handler, and will be automatically added to the user's balance
   */
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

  /**
   *
   * @param productCost Price in credits of the selected product
   * @param productId Identifier of the product about to be purchased
   */
  const redeemProduct = (
    productCost: ProductModel['cost'],
    productId: ProductModel['_id']
  ) => {
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
    }, 800);
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
        maxWidth={'100%'}
        mb={{ base: 10, '2xl': 16 }}
        borderBottomWidth={2}
        mx='auto'
        position='sticky'
        top='0'
        zIndex={3}
        bgColor='white'
        px={{ base: 0, lg: 150 }}
      >
        <Header user={user} isLoading={isLoadingUser} buyPoints={buyPoints} />
      </Box>

      {isLoadingProducts ? (
        <Center>
          <Spinner color='blue.500' />
        </Center>
      ) : (
        <>
          <Banner />
          <Stack
            spacing={4}
            mt={4}
            p={10}
            mx={{ sm: 20, md: 120 }}
            direction={{ base: 'column', lg: 'row' }}
            borderBottomWidth={2}
          >
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={7}
              alignItems='center'
            >
              <Text fontSize='xl'>Sort by</Text>
              <Center alignSelf='center' h='40px' w={10}>
                <Divider orientation='vertical' />
              </Center>
            </Stack>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 0, sm: 3 }}
            >
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
            </Stack>
          </Stack>

          <ProductsListGrid
            products={sortedProducts.length > 0 ? sortedProducts : products}
            isRedeeming={redeeming}
            redeemProduct={redeemProduct}
            isLoadingProducts={isLoadingProducts}
            productRedeeming={productToRedeem}
          />
          <Stack mx={120} mb={20}>
            <Text fontWeight='semibold'>
              Displaying {products.length} of {products.length} products
            </Text>
          </Stack>
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
