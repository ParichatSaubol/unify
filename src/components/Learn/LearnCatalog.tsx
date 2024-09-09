import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks';
import LearnCard, { LearnCardProps } from './LearnCard';
import { LearnCatalogMethod } from '@/model/options';

interface Props {
  method?: LearnCatalogMethod;
}

const LearnCatalog: FunctionComponent<Props> = ({ method }) => {
  const { Layout, Images } = useTheme();

  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<ScrollView>(null);
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [data, setData] = useState<LearnCardProps[]>([]);

  const dataLearn: LearnCardProps = {
    brand: Images.learn.brand,
    description: 'ติดตั้งระบบ SCADAGENESIS64 พร้อมอุปกรณ์',
  };

  const scrollElementHeightPercent = 40;
  let scrollPosPercent = 0;
  if (contentOffset.x > 0) {
    scrollPosPercent =
      (contentOffset.x / (contentSize - scrollViewWidth)) *
      (100 - scrollElementHeightPercent);
  }
  const width = 40;
  const left = scrollPosPercent * 0.4;
  const newWidth = width * 0.4;

  useEffect(() => {
    const newData = [];
    for (let index = 0; index < 5; index++) {
      method === LearnCatalogMethod.learn && newData.push(dataLearn);
    }

    setData(newData);
  }, []);

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <View>
        <ScrollView
          contentContainerStyle={[Layout.row, Layout.gap10]}
          ref={scrollRef}
          scrollEventThrottle={16}
          onLayout={e => {
            setScrollViewWidth(e.nativeEvent.layout.width);
          }}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onContentSizeChange={(width, _) => {
            setContentSize(width);
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          disableScrollViewPanResponder
          onScroll={e => {
            setContentOffset(e.nativeEvent.contentOffset);
          }}
          automaticallyAdjustContentInsets={false}
          horizontal
        >
          {data.map((item, index) => (
            <LearnCard key={index} {...item} />
          ))}
        </ScrollView>
      </View>
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
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    borderRadius: 16,
    height: 250,
  },
  bar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
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

LearnCatalog.defaultProps = {
  method: LearnCatalogMethod.learn,
};

export default LearnCatalog;
