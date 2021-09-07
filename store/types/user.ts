import { ProductModel } from './products';

export interface UserModel {
  id: string;
  name: string;
  points: number;
  redeemHistory: any[];
  createDate: string;
}

export interface UserState {
  isLoadingUser: boolean;
  user: UserModel | null;
  error: boolean;
  errorMessage: string | null;
  redeeming: boolean;
  productToRedeem: ProductModel['_id'] | null;
}

export interface LoadingUserAction {
  readonly type: 'LOADING_USER';
  payload: {
    isLoadingUser: UserState['isLoadingUser'];
    error: UserState['error'];
    errorMessage: UserState['errorMessage'];
  };
}

export interface UserSuccessAction {
  readonly type: 'USER_FETCHED';
  payload: {
    isLoadingUser: UserState['isLoadingUser'];
    user: UserState['user'];
    error: UserState['error'];
    errorMessage: UserState['errorMessage'];
  };
}

export interface UserErrorAction {
  readonly type: 'ERROR_USER';
  payload: {
    isLoadingUser: UserState['isLoadingUser'];
    error: UserState['error'];
    errorMessage: UserState['errorMessage'];
  };
}

export interface AddPointsAction {
  readonly type: 'ADD_POINTS';
  payload: {
    points: number;
  };
}

export interface AddPointsResponse {
  message: string;
  'new Points': number;
}

export interface RedeemPointsSuccessAction {
  readonly type: 'REDEEM_POINTS_SUCCESS';
  payload: {
    points: number;
  };
}

export interface RedeemingPointsAction {
  readonly type: 'REDEEMING_POINTS';
  payload: {
    redeeming: UserState['redeeming'];
    productId: UserState['productToRedeem'];
  };
}

export interface RedeemResponse {
  message: string;
}

export type UserActions =
  | LoadingUserAction
  | UserSuccessAction
  | UserErrorAction
  | AddPointsAction
  | RedeemPointsSuccessAction
  | RedeemingPointsAction;
