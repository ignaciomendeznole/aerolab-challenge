import { Box, Badge, Stack, Spacer, Button, Spinner } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import React from 'react';
import { ProductModel } from '../store/types/products';

interface ProductCardProps {
  product: ProductModel;
  isRedeeming?: boolean;
  redeemProduct: (
    productCost: ProductModel['cost'],
    productId: ProductModel['_id']
  ) => void;
  productRedeeming: ProductModel['_id'] | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isRedeeming,
  redeemProduct,
  productRedeeming,
}) => {
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

      <Box p={6}>
        <Box d='flex' alignItems='center'>
          <Badge borderRadius='full' px='2' py='0.5' colorScheme='blue'>
            {product.category}
          </Badge>
        </Box>
      </Box>
      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {product.name}
      </Box>
      <Stack direction='row' alignItems='center'>
        <Stack direction='row' alignItems='center'>
          <Box>{product.cost}</Box>
          <Image src='/icons/coin.svg' w={4} h={4} />
        </Stack>
        <Spacer />
        <Stack>
          <Button
            isLoading={isRedeeming && productRedeeming === product._id}
            spinner={<Spinner />}
            onClick={() => redeemProduct(product.cost, product._id)}
          >
            Redeem
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
