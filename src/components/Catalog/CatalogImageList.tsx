import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks';
import ChipImage, { ChipImageProps } from '../Chip/ChipImage';

interface Props {
  data: ChipImageProps[];
  rowNumber?: number;
}

// แสดงรายการรูปภาพแบบแถว
const CatalogImageList: FunctionComponent<Props> = ({
  data,
  rowNumber = 2,
}) => {
  const { Layout } = useTheme();

  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 }); // ตำแหน่งของ ScrollView
  const scrollRef = useRef<ScrollView>(null); // อ้างอิงไปยัง ScrollView
  const [contentSize, setContentSize] = useState(0); // ขนาดของ ScrollView
  const [scrollViewWidth, setScrollViewWidth] = useState(0); // ความกว้างของ ScrollView
  const scrollElementHeightPercent = 40; // ความสูงของตัวแสดงตำแหน่งของ ScrollView
  let scrollPosPercent = 0;
  if (contentOffset.x > 0) {
    scrollPosPercent =
      (contentOffset.x / (contentSize - scrollViewWidth)) *
      (100 - scrollElementHeightPercent);
  } // คำนวณหาตำแหน่งของตัวแสดงตำแหน่งของ ScrollView
  const width = 40;
  const left = scrollPosPercent * 0.4;
  const newWidth = width * 0.4; // ความกว้างของตัวแสดงตำแหน่งของ ScrollView

  useEffect(() => {}, []);

  return (
    <View style={[Layout.col, Layout.gap20]}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
        horizontal={true}
        style={Layout.fullWidth}
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        onLayout={e => {
          setScrollViewWidth(e.nativeEvent.layout.width);
        }}
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onContentSizeChange={(width, _) => {
          setContentSize(width);
        }}
        onScroll={e => {
          setContentOffset(e.nativeEvent.contentOffset);
        }}
      >
        <FlatList
          contentContainerStyle={[Layout.gap20]}
          numColumns={Math.ceil(data.length / rowNumber)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => {
            return <ChipImage key={index} {...item} />;
          }}
          keyExtractor={(_, index) => `key-${index}`}
        />
      </ScrollView>

      <View style={[Layout.row, Layout.center]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bar: {},
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

CatalogImageList.defaultProps = {
  rowNumber: 2,
};

export default CatalogImageList;
