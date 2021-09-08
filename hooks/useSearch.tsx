import { useEffect, useState } from 'react';
import { ProductModel } from '../store/types/products';

/**
 * Custom Hook used for search functionality.
 * @param searchTerm Keyword used for filtering products
 * @param products Products list from Redux Store
 * @returns Array of products that match the search criteria
 */
export const useSearch = (searchTerm: string, products: ProductModel[]) => {
  const [searchResults, setSearchResults] = useState<ProductModel[]>(products);
  /**
   * Filters among all the products according to the search criteria every time the term changes
   */
  const searchProducts = () => {
    setSearchResults(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    searchProducts();
  }, [searchTerm]);

  return {
    searchResults,
  };
};
