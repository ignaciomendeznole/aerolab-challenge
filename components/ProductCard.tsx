//React and React Redux
import React from 'react';
import { useSelector } from 'react-redux';

//Chakra UI Components
import {
  Box,
  Badge,
  Stack,
  Spacer,
  Button,
  Spinner,
  Divider,
  Text,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

//Typescript interfaces
import { AppState } from '../store/reducers';
import { ProductCardProps } from '../types';

/**
 * Product Card component used to render every product alongside with its specified properties.
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isRedeeming,
  redeemProduct,
  productRedeeming,
}): JSX.Element => {
  const { user } = useSelector((state: AppState) => state.userReducer);

  const canBuy = user?.points! - product.cost >= 0;
  return (
    <Box
      bgColor='white'
      borderRadius='lg'
      boxShadow='lg'
      p={10}
      position='relative'
      maxW={{ base: 'xs', md: 'sm' }}
      overflow='hidden'
      _hover={{
        transform: 'translate(0, -10px)',
        transition: 'transform .2s',
        cursor: 'pointer',
      }}
      transition='transform .1s'
      key={product._id}
    >
      <Image src={product.img.hdUrl} alt={product.name} />

      <Box px={2} py={3}>
        <Box d='flex' alignItems='center'>
          <Badge borderRadius='full' px='2' py='0.5' colorScheme='blue'>
            {product.category}
          </Badge>
        </Box>
      </Box>
      <Divider orientation='horizontal' />
      <Box mt='3' fontWeight='bold' as='h4' lineHeight='normal' isTruncated>
        {product.name}
      </Box>
      <Stack direction='row' alignItems='center' mt={4}>
        <Stack direction='row' alignItems='center'>
          <Box>
            <Text fontWeight='semibold' fontSize='lg'>
              {product.cost}
            </Text>
          </Box>
          <Image src='/icons/coin.svg' w={5} h={5} alt='Coin' />
        </Stack>
        <Spacer />

        <Button
          isLoading={isRedeeming && productRedeeming === product._id}
          spinner={<Spinner />}
          onClick={() => redeemProduct(product.cost, product._id)}
          colorScheme={canBuy ? 'green' : 'red'}
          disabled={!canBuy}
          size='md'
          mt={7}
        >
          {canBuy
            ? 'Redeem'
            : `Missing ${(user?.points! - product.cost) * -1} points `}
        </Button>
      </Stack>
    </Box>
  );
};
