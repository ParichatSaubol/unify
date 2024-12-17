import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import ProductCard from './ProductCard';

import config from '@/utils/config';
import { getProductByBrand } from '@/services/restapi/modules/brand';

interface Props {
  brandId: number;
}

interface IProductResponse {
  brand_logo_path: string;
  pd_brand: string;
  pd_id: string;
  pd_model: string;
  pd_nameEN: string;
  pd_nameTH: string;
  pd_photoFile: string;
  pd_sales: string;
  pd_star: string;
  product_model: IProductmodel;
  product_promotion: any[];
}

interface IProductmodel {
  model_discount_Important_customers: string;
  model_discount_Important_vip: string;
  model_price_general: string;
  model_price_tkk: string;
}

const ProductCatalog: FunctionComponent<Props> = ({ brandId }) => {
  // Hooks
  const { Layout } = useTheme();
  const navigation = useNavigation<NavigationProp<ApplicationStackParamList>>();
  // State
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<ScrollView>(null);
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [data, setData] = useState<IProductResponse[]>([]);

  const [loading, setLoading] = useState(false);

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

  const fetchData = async () => {
    if (brandId) {
      setLoading(true);
      try {
        const response = await getProductByBrand(brandId, 1);

        if (response?.status === 200 && response?.data) {
          setData(response?.data);
        }
      } catch (error) {
        setData([]);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [brandId]);

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
            // handleScroll(e);

            setContentOffset(e.nativeEvent.contentOffset);
          }}
          automaticallyAdjustContentInsets={false}
          horizontal
        >
          {data.map((item: IProductResponse, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // navigation.navigate('ProductDetail', { item });
              }}
            >
              <ProductCard
                amount={Number(item.product_model.model_price_tkk)}
                brand={item.pd_brand}
                id={item.pd_id}
                image={{
                  uri: config.baseURL + '/' + item.pd_photoFile,
                  width: 80,
                  height: 80,
                }}
                title={item.pd_nameTH}
              />
            </TouchableOpacity>
          ))}
          {loading && <ActivityIndicator size="large" style={styles.loading} />}
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
  loading: {
    marginRight: 20,
  },
});

ProductCatalog.defaultProps = {
  brandId: 0,
};

export default ProductCatalog;
