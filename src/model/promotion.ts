import { ImageSourcePropType } from 'react-native/types';

type IPromotionCard = {
  id?: number;
  title?: string;
  description?: string;
  image?: ImageSourcePropType;
  footer?: string;
  onPress?: () => void;
  point?: number;
  size?: 'small' | 'medium' | 'large';
  details?: string[];
  button?: JSX.Element;
};

export type { IPromotionCard };
