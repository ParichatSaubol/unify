import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@/hooks';
import PromotionCard, { PromotionCardProps } from './PromotionCard';

interface Props {
  method?: 'default' | 'image';
}

const { width: windowWidth } = Dimensions.get('window');

const Promotions: FunctionComponent<Props> = ({ method }) => {
  const { Images, Layout } = useTheme();

  const flatListRef = useRef<FlatList>(null);
  const [data] = useState<PromotionCardProps[]>([
    {
      id: 1,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      description: 'ลด 300 บาท เมื่อซื้อสินค้าแบรนด์ ACER ขั้นต่ำ 300 บาท',
      footer: 'สิ้นสุด 31 มกราคม 2566',
    },
    {
      id: 2,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      description: 'ลด 300 บาท เมื่อซื้อสินค้าแบรนด์ ACER ขั้นต่ำ 300 บาท',
      footer: 'สิ้นสุด 31 มกราคม 2566',
    },
    {
      id: 3,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      description: 'ลด 300 บาท เมื่อซื้อสินค้าแบรนด์ ACER ขั้นต่ำ 300 บาท',
      footer: 'สิ้นสุด 31 มกราคม 2566',
    },
    {
      id: 4,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      description: 'ลด 300 บาท เมื่อซื้อสินค้าแบรนด์ ACER ขั้นต่ำ 300 บาท',
      footer: 'สิ้นสุด 31 มกราคม 2566',
    },
    {
      id: 5,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      description: 'ลด 300 บาท เมื่อซื้อสินค้าแบรนด์ ACER ขั้นต่ำ 300 บาท',
      footer: 'สิ้นสุด 31 มกราคม 2566',
    },
  ]);

  const renderItem = useCallback((item: PromotionCardProps, index: number) => {
    if (method === 'default') {
      return (
        <TouchableOpacity>
          <PromotionCard {...item} />
        </TouchableOpacity>
      );
    } else {
      return (
        <Image
          key={index}
          source={item.image || Images.mock.noImage}
          style={Layout.fill}
          resizeMode="cover"
        />
      );
    }
  }, []);

  return (
    <FlatList
      style={Layout.fill}
      contentContainerStyle={[Layout.gap10, styles.contentContainerStyle]}
      ref={flatListRef}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}
      snapToInterval={windowWidth}
      windowSize={2}
      data={data}
      renderItem={row => renderItem(row.item, row.index)}
      keyExtractor={useCallback(
        (item: PromotionCardProps, _: number) => String(item.id),
        [],
      )}
    />
  );
};

Promotions.defaultProps = {
  method: 'image',
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 6,
  },
});

export default Promotions;
