import { OrderStatus } from '@/model/options';
import { ImageSourcePropType } from 'react-native/types';

type IOrder = {
  id?: string;
  code?: string;
  items?: IOrderItem[];
  itemsCount?: number;
  servicesCount?: number;
  coursesCount?: number;
  status?: OrderStatus;
  netAmount?: number;
  vat?: number;
  amount?: number;
  deliveryFee?: number;
  discountCouponCode?: string;
  discountCouponAmount?: number;
  discountBrunPoint?: number;
  rewardPoint?: number;
};

type IOrderItem = {
  id?: string;
  title?: string;
  image?: ImageSourcePropType;
  option?: string;
  amount?: number;
  quantity?: number;
  netAmount?: number;
  discountAmount?: number;
};

export type { IOrder };
