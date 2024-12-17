import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { IProductCard } from '@/model/product';
import ProductCard from './ProductCard';
import { ProductCatalogMethod } from '@/model/options';
import {
  useLazyGetProductById,
  useLazyGetProducts,
  useLazyGetPopularProducts,
} from '@/services/modules/product';
import { useLazyGetFlashSaleListQuery } from '@/services/modules/flash_sale';
import { useLazyGetSolutionListQuery } from '@/services/modules/solution';


import config from '@/utils/config';
import { number } from 'yup';

interface Props {
  method?: ProductCatalogMethod;
}

// const dataProduct: IProductCard = {
//   brand: 'MIKITA',
//   title: 'เครื่องดูดฝุ่นและเป่าลมขนาด 20 ลิตร ระบบ HEPA',
//   description: 'รุ่น HEPA-MAR22',
//   amount: 1232990,
//   netAmount: 1232990,
//   discount: -44,
// };
const dataFlashSale: IProductCard = {
  brand: 'MIKITA',
  title: 'เครื่องดูดฝุ่นและเป่าลมขนาด 20 ลิตร ระบบ HEPA',
  description: 'รุ่น HEPA-MAR22',
  amount: 1232990,
  netAmount: 1232990,
  discount: -44,
  flashSale: true,
  quantity: 100,
};
const dataSolution: IProductCard = {
  brand: '',
  title: 'ติดตั้งระบบ SCADA GENESIS64 พร้อมอุปกร...',
  description: 'ติดตั้งแล้ว จำนวน 106 ครั้ง',
  amount: 1232990,
  netAmount: 1232990,
  discount: -44,
  service: true,
  serviceBy: 'MIKITA',
  serviceCount: 100,
};
const dataLearn: IProductCard = {
  brand: '',
  title: 'ติดตั้งระบบ SCADA GENESIS64 พร้อมอุปกร...',
  description: 'ติดตั้งแล้ว จำนวน 106 ครั้ง',
  amount: 1232990,
  netAmount: 1232990,
  discount: -44,
  learn: true,
  learnTime: 10,
};

const ProductCatalog: FunctionComponent<Props> = ({ method }) => {
  // Hooks
  const { Layout } = useTheme();
  const navigation = useNavigation<NavigationProp<ApplicationStackParamList>>();
  // State
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<ScrollView>(null);
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [data, setData] = useState<IProductCard[]>([]);

  const [GetSolutionList] = useLazyGetSolutionListQuery();
  const [GetPopularProducts] = useLazyGetPopularProducts();
  const [GetFlashSale] = useLazyGetFlashSaleListQuery();
  
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(5);

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

  const QUERY_POPPULAR_PRODUCTS = async () => {
    try {
      const array_products: IProductCard[] = [];
      const { loading, error, data } = await GetPopularProducts({
        variables: { page: page, perPage: perPage },
      });
      if (data?.getPopularProducts?.popular_products) {
        for (const item of data.getPopularProducts.popular_products) {
          const product_data: IProductCard = {
            image: item?.product?.pd_photo_file
              ? { uri: config.baseURL + item?.product?.pd_photo_file }
              : undefined,
            id: item.product?.pd_id?.toString() || '',
            brand: 'MIKITA',
            title: 'เครื่องดูดฝุ่นและเป่าลมขนาด 20 ลิตร ระบบ HEPA',
            description: 'รุ่น HEPA-MAR22',
            amount: 1232990,
            netAmount: 1232990,
            discount: -44,
            flashSale: true,
          };
          array_products.push(product_data);
        }
        return array_products;
      } else if (loading) {
        console.log('QUERY_POPPULAR_PRODUCTS are loading...');
      } else if (error) {
        console.log('An error occurred:', error);
      }
    } catch (error) {}
  };


  const  QUERY_FLASH_SALE = async () => {
    try {
      const array_products: IProductCard[] = [];
      const { loading, error, data } = await GetFlashSale({
        variables: { page: page, perPage: perPage },
      });
      if (data?.getFlashSaleList?.flashsale) {
        for (const item of data.getFlashSaleList.flashsale) {
          const product_data: IProductCard = {
            image: item?.flash_frame_template_path
              ? { uri: config.baseURL + item?.flash_frame_template_path }
              : undefined,
            id: item.flash_id?.toString() || '',
            brand: '',

          };
          array_products.push(product_data);
        }
        return array_products;
      } else if (loading) {
        console.log('QUERY_POPPULAR_PRODUCTS are loading...');
      } else if (error) {
        console.log('An error occurred:', error);
      }
    } catch (error) {}
  };



  const QUERY_SOLUTION = async () => {
    try {
      let array_solutions: IProductCard[] = [];
      const { loading, error, data } = await GetSolutionList({
        variables: { page: page, perPage: perPage },
      });
      // Assuming Products returns a Promise

      if (data?.getSolutionList?.solution) {
        for (const item of data.getSolutionList.solution) {
          const product_data: IProductCard = {
            image: item?.solution_img_path
              ? { uri: config.baseURL + item?.solution_img_path }
              : undefined,
            id: item.solution_id?.toString() || '',
            brand: '',
            title: item?.solution_name,
            description: item?.solution_details,
          };
          array_solutions.push(product_data);
        }
        return array_solutions;
      } else if (loading) {
        console.log('SOLUTION are loading...');
      } else if (error) {
        console.log('An error occurred:', error);
      }

      return array_solutions;
    } catch (error) {
      console.error('Error in QUERY_PRODUCT:', error);
      throw error; // Re-throw the error after logging it
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      switch (method) {
        case ProductCatalogMethod.product:
          const products = await QUERY_POPPULAR_PRODUCTS();
          
          setData([...data, ...products]);
          break;
        case ProductCatalogMethod.flashSale:
          const flash_sale = await QUERY_FLASH_SALE();
          console.log(flash_sale);
          setData([...data, ...flash_sale]);

          break;
        case ProductCatalogMethod.solution:
          const solutions = await QUERY_SOLUTION();
          setData([...data, ...solutions]);
          break;
        case ProductCatalogMethod.learn:
          // const products3 = await PRODUCT_ARRAY_FORMAT();
          // setData([...data, ...products3]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }

    setLoading(false);
  };

  const handleScroll = ({ nativeEvent }) => {
    if (loading) return;

    const isCloseToEnd =
      nativeEvent.layoutMeasurement.width + nativeEvent.contentOffset.x >=
      nativeEvent.contentSize.width - 20;
    if (isCloseToEnd) {
      setPage(page + 1);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
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
            handleScroll(e);

            setContentOffset(e.nativeEvent.contentOffset);
          }}
          automaticallyAdjustContentInsets={false}
          horizontal
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('ProductDetail', { item });
              }}
            >
              <ProductCard {...item} />
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
  method: ProductCatalogMethod.product,
};

export default ProductCatalog;
