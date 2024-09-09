import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@/hooks';
import PromotionCard from './PromotionCard';
import { IPromotionCard } from '@/model/promotion';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';

interface IScreen extends ApplicationStackParamList, ProductParamsList {}
interface Props {
  method?: 'default' | 'image';
}

const { width: windowWidth } = Dimensions.get('window');

const PromotionsPoint: FunctionComponent<Props> = ({ method }) => {
  const { Images, Layout } = useTheme();
  const { navigate } = useNavigation<NavigationProp<IScreen>>();

  const flatListRef = useRef<FlatList>(null);
  const [data] = useState<IPromotionCard[]>([
    {
      id: 1,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      point: 1500,
    },
    {
      id: 2,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      point: 1500,
    },
    {
      id: 3,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      point: 1500,
    },
    {
      id: 4,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      point: 1500,
    },
    {
      id: 5,
      image: method === 'default' ? Images.promotions.c : Images.promotions.a,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
      point: 1500,
    },
  ]);

  const renderItem = useCallback((item: IPromotionCard, index: number) => {
    if (method === 'default') {
      return (
        <PromotionCard
          {...item}
          key={index}
          onPress={() => {
            navigate('UnipointDetail', { id: `${item.id}` });
          }}
        />
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
        (item: IPromotionCard, _: number) => String(item.id),
        [],
      )}
    />
  );
};

PromotionsPoint.defaultProps = {
  method: 'image',
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 6,
  },
});

export default PromotionsPoint;
