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

export interface ICategoryType {
  prod_id: string;
  prod_nameTH: string;
  prod_nameEN: string;
  prod_image: null | string;
  prod_image_path: string;
  prod_icon: null | string;
  prod_icon_path: string;
  prod_status: string;
  prod_create: string;
  prod_update: string;
  prod_brand_id: string;
}

interface ICurrency {
  currency_id: string;
  currency_name: string;
  currency_amount: string;
  currency_icon: string;
}

interface IProductmodel {
  model_price_tkk: string;
  model_default: string;
  model_price_general: string;
  model_discount_Important_customers: string;
  model_discount_Important_vip: string;
}
export interface IProductItem {
  pd_star: string;
  pd_id: string;
  pd_photoFile: string;
  brand_logo_path: null;
  pd_nameTH: string;
  pd_nameEN: string;
  pd_model: string;
  pd_sales: string;
  pd_brand: string;
  product_model: IProductmodel;
  product_promotion: any[];
  mt_discount: string;
  currency: ICurrency;
}
