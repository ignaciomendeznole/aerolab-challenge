import { Grid } from '@chakra-ui/react';
import React from 'react';
import { ProductModel } from '../store/types/products';
import { ProductCard } from './ProductCard';

interface ProductsListProps {
  products: ProductModel[];
  isRedeeming?: boolean;
  redeemProduct: (
    productCost: ProductModel['cost'],
    productId: ProductModel['_id']
  ) => void;
  isLoadingProducts: boolean;
  productRedeeming: ProductModel['_id'] | null;
}

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
