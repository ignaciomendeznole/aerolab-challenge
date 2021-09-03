import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { AddPointsResponse, UserActions, UserModel } from '../types/user';

export const fetchUserInformation = () => {
  return async (dispatch: Dispatch<UserActions>): Promise<void> => {
    dispatch({
      type: 'LOADING_USER',
      payload: {
        isLoadingUser: true,
        error: false,
        errorMessage: null,
      },
    });
    try {
      const response = await axiosClient.get<UserModel>('user/me');
      dispatch({
        type: 'USER_FETCHED',
        payload: {
          isLoadingUser: false,
          error: false,
          errorMessage: null,
          user: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_USER',
        payload: {
          isLoadingUser: false,
          error: true,
          errorMessage: `Could not fetch user information :'(`,
        },
      });
    }
  };
};

export const addPoints = (points: number) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const body = {
        amount: points,
      };
      await axiosClient.post<AddPointsResponse>('user/points', body);

      dispatch({
        type: 'ADD_POINTS',
        payload: {
          points,
        },
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_USER',
        payload: {
          error: true,
          errorMessage: `Could not add points to your balance :'(`,
          isLoadingUser: false,
        },
      });
    }
  };
};
