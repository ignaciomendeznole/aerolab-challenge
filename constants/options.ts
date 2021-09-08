import { ProductSorting } from '../types';

interface Options {
  id: string;
  option: ProductSorting;
  optionName: string;
}

export const options: Options[] = [
  {
    id: '1',
    option: 'most recent',
    optionName: 'Most Recent',
  },
  {
    id: '2',
    option: 'lowest price',
    optionName: 'Lowest Price',
  },
  {
    id: '3',
    option: 'highest price',
    optionName: 'Highest Price',
  },
];
