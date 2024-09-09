import React, { FunctionComponent, useRef, useState } from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import CarouselCard from './CarouselCard';
import { CarouselSize } from '@/model/options';

interface Props {
  hiddentScrollPos?: boolean;
  size?: CarouselSize;
  fullWidth?: boolean;
  isRadius?: boolean;
  dotCentered?: boolean;
  dataImages?: ImageSourcePropType[];
  dataJSX?: JSX.Element[];
  isPadding?: boolean;
}
const { width: windowWidth } = Dimensions.get('window');

// แสดงรูปภาพแบบ Carousel
const Carousel: FunctionComponent<Props> = props => {
  const { Layout, Images } = useTheme();

  const {
    hiddentScrollPos,
    size,
    fullWidth,
    isRadius,
    dotCentered,
    dataImages = [Images.carousel.a, Images.carousel.a, Images.carousel.a],
    dataJSX,
    isPadding = true,
  } = props;

  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 }); // ตำแหน่งของ ScrollView
  const scrollRef = useRef<ScrollView>(null); // อ้างอิงไปยัง ScrollView
  const [contentSize, setContentSize] = useState(0); // ขนาดของ ScrollView
  const [scrollViewWidth, setScrollViewWidth] = useState(0); // ความกว้างของ ScrollView
  const scrollElementHeightPercent = 40; // ความสูงของตัวแสดงตำแหน่งของ ScrollView
  let scrollPosPercent = 0;
  if (contentOffset.x > 0) {
    scrollPosPercent =
      (contentOffset.x / (contentSize - scrollViewWidth)) *
      (100 - scrollElementHeightPercent); // คำนวณหาตำแหน่งของตัวแสดงตำแหน่งของ ScrollView
  }
  const width = 40;
  const left = scrollPosPercent * 0.4; // ตำแหน่งของตัวแสดงตำแหน่งของ ScrollView
  const newWidth = width * 0.4; // ความกว้างของตัวแสดงตำแหน่งของ ScrollView

  // const height = size === 'small' ? 160 : size === 'medium' ? 180 : 240;

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <View>
        <ScrollView
          contentContainerStyle={[Layout.row, !fullWidth && Layout.gap10]}
          testID="image_scroll_view"
          ref={scrollRef}
          scrollEventThrottle={16}
          onLayout={e => {
            setScrollViewWidth(e.nativeEvent.layout.width);
          }}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onContentSizeChange={(width, _) => {
            setContentSize(width);
          }}
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          disableScrollViewPanResponder
          onScroll={e => {
            setContentOffset(e.nativeEvent.contentOffset);
          }}
          automaticallyAdjustContentInsets={false}
          horizontal
          snapToInterval={fullWidth ? windowWidth : undefined}
        >
          {!dataJSX
            ? dataImages?.map((image, index) => (
                <CarouselCard
                  key={index}
                  image={image}
                  size={size}
                  fullWidth={fullWidth}
                  isRadius={isRadius}
                  isPadding={isPadding}
                />
              ))
            : dataJSX?.map((jsx, index) => <View key={index}>{jsx}</View>)}
        </ScrollView>
      </View>
      {!hiddentScrollPos && (
        <View style={[Layout.row, dotCentered && Layout.center]}>
          <View style={styles.scroll}>
            <View
              style={[
                {
                  left: left,
                  width: newWidth,
                },
                styles.scrollIndicator,
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
};

// ค่าเริ่มต้นของ Props
Carousel.defaultProps = {
  hiddentScrollPos: false,
  size: CarouselSize.medium,
  fullWidth: false,
  isRadius: true,
  dotCentered: true,
  dataImages: undefined,
  dataJSX: undefined,
  isPadding: false,
};

// กำหนด Style
const styles = StyleSheet.create({
  scroll: {
    position: 'relative',
    right: 0,
    bottom: 0,
    marginBottom: 8,
    width: 40,
    height: 4,
    borderRadius: 6,
    backgroundColor: '#D9D9D9',
    zIndex: 1,
  },
  scrollIndicator: {
    position: 'absolute',
    top: -1,
    marginBottom: 8,
    height: 6,
    backgroundColor: '#0053FF',
    borderRadius: 8,
  },
});

export default Carousel;
