import { Dispatch } from 'react';
import axiosClient from '../../config/axiosClient';
import { AddPointsResponse, UserActions, UserModel } from '../types/user';

/**
 * Fetches the user information (Username and current balance).
 * @returns Dispatch action to Redux Store that loads the user personal information
 */
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
      const { data: user } = await axiosClient.get<UserModel>('user/me');
      dispatch({
        type: 'USER_FETCHED',
        payload: {
          isLoadingUser: false,
          error: false,
          errorMessage: null,
          user,
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

/**
 * Adds points to the user's current balance via Redux Dispatch action
 * @param points Points to be added to user's account
 * @returns Dispatch action to Redux Store adding the requested points
 */
export const addPoints = (points: number) => {
  return async (dispatch: Dispatch<UserActions>): Promise<void> => {
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
