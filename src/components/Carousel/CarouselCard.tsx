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

  // แยกการคำนวณความสูงออกจาก ternary operation
  let height: number;
  switch (size) {
    case CarouselSize.small:
      height = 160;
      break;
    case CarouselSize.medium:
      height = 205;
      break;
    default:
      height = 365;
      break;
  }

  const customWidth = isPadding ? windowWidth - 30 : windowWidth; // ขนาดของรูปภาพ

  return (
    <View
      style={[Layout.col, Layout.gap5, fullWidth && { width: customWidth }]}
    >
      <Image
        source={image || Images.mock.noImage}
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
