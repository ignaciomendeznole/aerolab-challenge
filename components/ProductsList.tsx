import { Grid } from '@chakra-ui/react';
import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductsListProps } from './types';

export const ProductsListGrid: React.FC<ProductsListProps> = ({
  products,
  isRedeeming,
  redeemProduct,
  productRedeeming,
}): JSX.Element => {
  return (
    <Grid
      gap={6}
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      width='max'
      mx={'auto'}
      my='6'
      py={7}
      borderBottomWidth={3}
    >
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          isRedeeming={isRedeeming}
          redeemProduct={redeemProduct}
          productRedeeming={productRedeeming}
        />
      ))}
    </Grid>
  );
};
