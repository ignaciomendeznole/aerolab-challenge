import { useEffect, useState } from 'react';
import { ProductModel } from '../store/types/products';

interface SortedProducts {
  sortedProducts: ProductModel[];
}

export type ProductSorting = 'most recent' | 'highest price' | 'lowest price';

export const useSort = (
  products: ProductModel[],
  sorting: ProductSorting
): SortedProducts => {
  const [sortedProducts, setSortedProducts] =
    useState<ProductModel[]>(products);

  const sortProducts = (): void => {
    switch (sorting) {
      case 'highest price':
        setSortedProducts(
          products.slice(0).sort((a, b) => {
            return b.cost - a.cost;
          })
        );
        break;

      case 'lowest price':
        setSortedProducts(
          products.slice(0).sort((a, b) => {
            return a.cost - b.cost;
          })
        );
        break;

      case 'most recent':
        setSortedProducts(products);
        break;
      default:
        setSortedProducts(products);
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sorting]);

  return {
    sortedProducts,
  };
};
