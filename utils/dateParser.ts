import moment from 'moment';
import { TransactionModel } from '../store/types/transactions';

export const parseDate = (date: TransactionModel['createDate']) => {
  return moment(date).fromNow();
};
