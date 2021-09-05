import moment from 'moment';

export const parseDate = (date: string) => {
  return moment(date).fromNow();
};
