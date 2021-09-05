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
import React from 'react';
import { ProductCardProps } from './types';

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isRedeeming,
  redeemProduct,
  productRedeeming,
}): JSX.Element => {
  return (
    <Box
      bgColor='white'
      borderRadius='lg'
      boxShadow='md'
      p={6}
      position='relative'
      maxW='sm'
      overflow='hidden'
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
      <Stack direction='row' alignItems='center'>
        <Stack direction='row' alignItems='center'>
          <Box>
            <Text colorScheme='yellow'>{product.cost}</Text>
          </Box>
          <Image src='/icons/coin.svg' w={4} h={4} />
        </Stack>
        <Spacer />
        <Stack>
          <Button
            isLoading={isRedeeming && productRedeeming === product._id}
            spinner={<Spinner />}
            onClick={() => redeemProduct(product.cost, product._id)}
            colorScheme='green'
          >
            Redeem
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
