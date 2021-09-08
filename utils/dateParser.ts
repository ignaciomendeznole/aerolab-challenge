import moment from 'moment';
import { TransactionModel } from '../store/types/transactions';

/**
 * Parses a date string into a more visually attractive format.
 * @param date Date string to be converted by Momentjs for transactions display, coming in UTC format.
 * @returns Date string
 */
export const parseDate = (date: TransactionModel['createDate']) => {
  return moment(date).fromNow();
};
