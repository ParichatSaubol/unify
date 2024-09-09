import { ImageSourcePropType } from 'react-native/types';

interface IServiceDetail {
  id?: string;
  image?: ImageSourcePropType;
  title?: string;
  star?: number;
  soldCount?: number;
  netAmount?: number;
  amount?: number;
  detail?: string[];
  standardFree?: string[];
  standardCost?: string[];
  serviceArea?: string[];
  note?: string[];
  model?: string[];
}

export type { IServiceDetail };
