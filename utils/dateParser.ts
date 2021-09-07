import moment from 'moment';
import { TransactionModel } from '../store/types/transactions';

/**
 *
 * @param date Date string to be converted by Momentjs for transactions display, coming in UTC format.
 * @returns Date string in a proper and more user friendly format.
 */
export const parseDate = (date: TransactionModel['createDate']) => {
  return moment(date).fromNow();
};
