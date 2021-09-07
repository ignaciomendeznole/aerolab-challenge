import { TransactionModel } from '../store/types/transactions';

export interface TransactionsListProps {
  transactions: TransactionModel[];
}

import { ProductModel } from '../store/types/products';
import { UserModel } from '../store/types/user';

export interface HeaderProps {
  user: UserModel | null;
  isLoading: boolean;
  buyPoints: (points: number) => void;
  isOpen?: boolean;
  onToggle?: () => void;
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

export interface ProductsListProps {
  products: ProductModel[];
  isRedeeming?: boolean;
  redeemProduct: (
    productCost: ProductModel['cost'],
    productId: ProductModel['_id']
  ) => void;
  isLoadingProducts: boolean;
  productRedeeming: ProductModel['_id'] | null;
}

export interface TransactionCardProps {
  transaction: TransactionModel;
}

export interface SortedProducts {
  sortedProducts: ProductModel[];
}

export type ProductSorting = 'most recent' | 'highest price' | 'lowest price';
