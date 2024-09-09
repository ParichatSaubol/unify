import React, { FunctionComponent } from 'react';
import { Dimensions, Image, ImageSourcePropType, View } from 'react-native';
import { useTheme } from '@/hooks';
import { CarouselSize } from '@/model/options';

interface Props {
  image?: ImageSourcePropType;
  size?: CarouselSize;
  fullWidth?: boolean;
  isRadius?: boolean;
  isPadding?: boolean;
}

const { width: windowWidth } = Dimensions.get('window');

// แสดงรูปภาพแบบ Carousel
const CarouselCard: FunctionComponent<Props> = ({
  image,
  size,
  fullWidth,
  isRadius,
  isPadding,
}) => {
  const { Layout, Images } = useTheme();
  // ความสูงของรูปภาพ
  const height =
    size === CarouselSize.small
      ? 160
      : size === CarouselSize.medium
      ? 205
      : 365;

  const customWidth = isPadding ? windowWidth - 30 : windowWidth; // ขนาดของรูปภาพ

  return (
    <View
      style={[Layout.col, Layout.gap5, fullWidth && { width: customWidth }]}
    >
      <Image
        source={image || Images.mock.noImage}
        // resizeMethod="scale"
        // resizeMode="contain"
        style={[
          { height: height },
          isRadius && Layout.radius10,
          fullWidth && { width: customWidth },
        ]}
      />
    </View>
  );
};

CarouselCard.defaultProps = {
  image: undefined,
  size: CarouselSize.medium,
  fullWidth: false,
  isRadius: true,
  isPadding: false,
};

export default CarouselCard;
