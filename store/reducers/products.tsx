import { ProductActions, ProductState } from '../types/products';

const initialState: ProductState = {
  isLoading: false,
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
        isLoading: action.payload.isLoading,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        products: [...action.payload.products],
      };

    default:
      return state;
  }
};
