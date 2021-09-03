import { UserActions, UserState } from '../types/user';

const initialState: UserState = {
  isLoadingUser: false,
  user: null,
  error: false,
  errorMessage: null,
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
    default:
      return state;
  }
};
