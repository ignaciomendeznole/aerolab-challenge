import { ProductActions, ProductState } from '../types/products';

const initialState: ProductState = {
  isLoadingProducts: false,
  error: false,
  errorMessage: null,
  products: [],
};

export const productsReducer = (
  state: ProductState = initialState,
  action: ProductActions
): ProductState => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoadingProducts: action.payload.isLoadingProducts,
      };
    case 'ERROR':
      return {
        ...state,
        isLoadingProducts: action.payload.isLoading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoadingProducts: action.payload.isLoadingProducts,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        products: [...action.payload.products],
      };

    default:
      return state;
  }
};
