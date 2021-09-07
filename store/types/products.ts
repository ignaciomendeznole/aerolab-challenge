export interface ProductState {
  isLoadingProducts: boolean;
  error: boolean;
  errorMessage: string | null;
  products: ProductModel[];
  productToRedeem: ProductModel['_id'] | null;
}

export interface ProductModel {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: Img;
}

export interface Img {
  url: string;
  hdUrl: string;
}

export interface LoadingProductsAction {
  readonly type: 'LOADING';
  payload: {
    isLoadingProducts: ProductState['isLoadingProducts'];
  };
}

export interface ErrorAction {
  readonly type: 'ERROR';
  payload: {
    isLoading: ProductState['isLoadingProducts'];
    error: ProductState['error'];
    errorMessage: ProductState['errorMessage'];
  };
}

export interface ProductsSuccessAction {
  readonly type: 'SUCCESS';
  payload: {
    isLoadingProducts: ProductState['isLoadingProducts'];
    products: ProductModel[];
    error: ProductState['error'];
    errorMessage: ProductState['errorMessage'];
  };
}

export type ProductActions =
  | LoadingProductsAction
  | ErrorAction
  | ProductsSuccessAction;
