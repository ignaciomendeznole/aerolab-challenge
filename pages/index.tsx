//React and React Redux hooks
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Chakra UI components
import { Button } from '@chakra-ui/button';
import { Box, Center, Divider, Stack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useToast } from '@chakra-ui/toast';
import type { NextPage } from 'next';

//Custom components
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { ProductsListGrid } from '../components/ProductsList';
import { SearchBar } from '../components/SearchBar';

//Custom Hooks
import { useSearch } from '../hooks/useSearch';
import { useSort } from '../hooks/useSort';

//Redux actions
import { loadProducts, redeemPoints } from '../store/actions/product';
import { addPoints, fetchUserInformation } from '../store/actions/user';
import { AppState } from '../store/reducers';

//Interfaces
import { ProductModel } from '../store/types/products';
import { ProductSorting } from '../types';

/**
 * HomePage containing (almost) the entire business logic for the challenge.
 */
const Home: NextPage = (): JSX.Element => {
  const [sortingOption, setSortingOption] =
    useState<ProductSorting>('most recent');

  const [searchTerm, setSearchTerm] = useState<string>('');

  const toast = useToast();

  const dispatch = useDispatch();

  /**
   * Method that calls for the Redux Action to load the available products.
   */
  const getProducts = useCallback(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  /**
   * Method that calls for the Redux Action that handles the user information fetching.
   */
  const getUserInformation = useCallback(() => {
    dispatch(fetchUserInformation());
  }, [dispatch]);

  const { products, isLoadingProducts } = useSelector(
    (state: AppState) => state.productsReducer
  );

  const { user, isLoadingUser, redeeming, productToRedeem } = useSelector(
    (state: AppState) => state.userReducer
  );
  const { sortedProducts } = useSort(products, sortingOption);

  const { searchResults } = useSearch(searchTerm, products);

  /**
   * Adds points to the user's current balance $$$
   * @param points Points that will be sent out to Redux action handler, and will be instantly added to the user's balance
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
  }, [getUserInformation]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <React.Fragment>
      <Meta />

      <Header user={user} isLoading={isLoadingUser} buyPoints={buyPoints} />

      {isLoadingProducts ? (
        <Center>
          <Spinner color='blue.500' />
        </Center>
      ) : (
        <>
          <Banner />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Stack
            spacing={4}
            p={10}
            mx={{ sm: 20, md: 120 }}
            direction={{ base: 'column', lg: 'row' }}
            borderBottomWidth={2}
          >
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 3, sm: 7 }}
              alignItems='center'
            >
              <Text fontSize='xl'>Sort by</Text>
              <Center alignSelf='center' h='40px' w={10}>
                <Divider orientation='vertical' />
              </Center>
            </Stack>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 3, lg: 7 }}
            >
              <Button
                isActive={sortingOption === 'most recent'}
                size='sm'
                _hover={{
                  transform: 'translate(0, -5px)',
                  transition: 'transform .3s',
                }}
                transition='transform .3s'
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
                _hover={{
                  transform: 'translate(0, -5px)',
                  transition: 'transform .3s',
                }}
                transition='transform .3s'
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
                _hover={{
                  transform: 'translate(0, -5px)',
                  transition: 'transform .3s',
                }}
                transition='transform .3s'
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
            products={
              searchTerm.length > 0
                ? searchResults
                : sortedProducts.length > 0
                ? sortedProducts
                : products
            }
            isRedeeming={redeeming}
            redeemProduct={redeemProduct}
            isLoadingProducts={isLoadingProducts}
            productRedeeming={productToRedeem}
          />

          <Stack mx={120} mb={20}>
            <Divider orientation='horizontal' />
            <Text fontWeight='semibold' mt={20}>
              Displaying{' '}
              {searchTerm.length > 0
                ? searchResults.length
                : sortedProducts.length > 0
                ? sortedProducts.length
                : searchResults.length}{' '}
              of {products.length} products
            </Text>
          </Stack>
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
