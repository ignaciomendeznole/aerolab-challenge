import { TransactionModel } from '../store/types/transactions';
import { ProductModel } from '../store/types/products';
import { UserModel } from '../store/types/user';

export interface TransactionsListProps {
  transactions: TransactionModel[];
}

export interface HeaderProps {
  user: UserModel | null;
  isLoading: boolean;
  buyPoints: (points: number) => void;
}

export interface ProductCardProps {
  product: ProductModel;
  isRedeeming?: boolean;
  redeemProduct: (
    productCost: ProductModel['cost'],
    productId: ProductModel['_id']
  ) => void;
  productRedeeming: ProductModel['_id'] | null;
}

export interface ProductsListProps extends ProductCardProps {
  products: ProductModel[];
  isLoadingProducts: boolean;
}

export interface TransactionCardProps {
  transaction: TransactionModel;
}

export interface SortedProducts {
  sortedProducts: ProductModel[];
}

export type ProductSorting = 'most recent' | 'highest price' | 'lowest price';
