import { useEffect, useState } from 'react';
import { ProductModel } from '../store/types/products';
import { ProductSorting, SortedProducts } from '../types';

/**
 * Custom Hook used for product sorting
 *
 * @param products List of products from Redux Store
 * @param sorting Sorting option selected for product display
 * @returns Products sorted by user preference
 */
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
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sorting]);

  return {
    sortedProducts,
  };
};
