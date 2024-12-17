import { ImageSourcePropType } from 'react-native/types';

type TProfile = {
  id?: number;
  name?: string;
  company?: string;
  point?: number;
  cart?: number;
  cartSummary?: number;
  lastOrder?: {
    image?: ImageSourcePropType;
    status?: string;
  };
};

type TMenu = {
  name: string;
  title: string;
  icon?: JSX.Element;
  isOption: boolean;
};

export type { TProfile, TMenu };
