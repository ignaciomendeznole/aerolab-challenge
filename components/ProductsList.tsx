//React
import React from 'react';

//Chakra UI Components
import { Grid } from '@chakra-ui/react';

//TypeScript interfaces
import { ProductsListProps } from '../types';

//Custom Components
import { ProductCard } from './ProductCard';

/**
 * Renders a Grid List containing every Product Card component.
 */
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
        lg: 'repeat(3, 1fr)',
      }}
      width='max'
      mx={'auto'}
      my='6'
      py={7}
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
