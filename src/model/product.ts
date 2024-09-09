import { ImageSourcePropType } from 'react-native/types';
import { CardSize } from '@/model/options';

export interface IProductCard {
  id?: string;
  size?: CardSize;
  title?: string;
  description?: string;
  image?: ImageSourcePropType;
  brand?: string;
  netAmount?: number;
  amount?: number;
  discount?: number;
  flashSale?: boolean;
  quantity?: number;
  service?: boolean;
  serviceBy?: string;
  serviceCount?: number;
  learn?: boolean;
  learnTime?: number;
  booking?: boolean;
}

export interface IProductDetail {
  id?: string;
  title?: string;
  code?: string;
  star?: number;
  soldCount?: number;
  netAmount?: number;
  amount?: number;
  isGenuine?: boolean;
  isReady?: boolean;
  delivered?: string;
  images?: ImageSourcePropType[];
  brandLogo?: ImageSourcePropType;
  brandName?: string;
  brandDescription?: string;
  detail?: { [k: string]: string };
  descriptionImage?: JSX.Element;
  description?: string[];
  quantity?: number;
  serviceOptions?: IServiceOptions[];
  model?: string[];
}

export interface IServiceOptions {
  id?: string;
  title?: string;
  description?: string;
  amount?: number;
}

export interface IProductCart {
  id?: string;
  size?: CardSize;
  title?: string;
  description?: string;
  image?: ImageSourcePropType;
  brand?: string;
  netAmount?: number;
  amount?: number;
  discount?: number;
  flashSale?: boolean;
  quantity?: number;
  service?: boolean;
  serviceBy?: string;
  serviceCount?: number;
  learn?: boolean;
  learnTime?: number;
  booking?: boolean;
  isCheck?: boolean;
}
