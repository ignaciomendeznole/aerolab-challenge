import { Grid } from '@chakra-ui/react';
import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductsListProps } from './types';

export const ProductsListGrid: React.FC<ProductsListProps> = ({
  products,
  isRedeeming,
  redeemProduct,
  isLoadingProducts,
  productRedeeming,
}) => {
  return (
    <Grid
      gap={6}
      templateColumns={'repeat(3, 1fr)'}
      width='max'
      mx={'auto'}
      my='6'
      py={7}
      borderBottomWidth={3}
    >
      {products.map((product) => (
        <ProductCard
          product={product}
          isRedeeming={isRedeeming}
          redeemProduct={redeemProduct}
          productRedeeming={productRedeeming}
        />
      ))}
    </Grid>
  );
};
