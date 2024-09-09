import React from 'react';
import {
  View,
  Image,
  type DimensionValue,
  type ImageResizeMode,
} from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: ImageResizeMode;
}

// โลโก้แบรนด์
const Brand = ({ height, width, mode }: Props): JSX.Element => {
  const { Images } = useTheme();

  return (
    <Image style={{ width, height }} source={Images.logo} resizeMode={mode} />
  );
};

Brand.defaultProps = {
  height: 'auto',
  width: 'auto',
  mode: 'contain',
};

export default Brand;
