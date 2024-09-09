import { ImageSourcePropType } from 'react-native/types';

const ICategoryMenu = ['product', 'service', 'solution'] as const;

interface ICategoryMenuItem {
  name: (typeof ICategoryMenu)[number];
  title: string;
  subTitle: string;
}

interface CatalogListData {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

export type { ICategoryMenuItem, ICategoryMenu, CatalogListData };
