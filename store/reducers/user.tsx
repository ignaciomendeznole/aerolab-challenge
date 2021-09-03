import { UserActions, UserState } from '../types/user';

const initialState: UserState = {
  isLoadingUser: false,
  user: null,
  error: false,
  errorMessage: null,
  redeeming: false,
  productToRedeem: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case 'LOADING_USER':
      return {
        ...state,
        isLoadingUser: action.payload.isLoadingUser,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case 'USER_FETCHED':
      return {
        ...state,
        isLoadingUser: action.payload.isLoadingUser,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        user: action.payload.user,
      };
    case 'ERROR_USER':
      return {
        ...state,
        isLoadingUser: action.payload.isLoadingUser,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case 'ADD_POINTS':
      return {
        ...state,
        user: {
          ...state.user!,
          points: state.user?.points! + action.payload.points,
        },
      };
    case 'REDEEMING_POINTS':
      return {
        ...state,
        redeeming: action.payload.redeeming,
        productToRedeem: action.payload.productId,
      };
    case 'REDEEM_POINTS_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user!,
          points: state.user?.points! - action.payload.points,
        },
        redeeming: false,
      };
    default:
      return state;
  }
};
