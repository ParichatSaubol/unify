import React, { FunctionComponent, useEffect, useState } from 'react';
import { View , TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import ProductCard from './ProductCard';
import { IProductCard } from '@/model/product';
import { CardSize } from '@/model/options';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import {
  useLazyGetProductById,
  useLazyGetPopularProducts,
} from '@/services/gql/modules/product';
import config from '@/utils/config';
interface Props {}

const dataProduct: IProductCard = {
  brand: 'MIKITA',
  title: 'เครื่องดูดฝุ่นและเป่าลมขนาด 20 ลิตร ระบบ HEPA',
  description: 'รุ่น HEPA-MAR22',
  amount: 1232990,
  netAmount: 1232990,
  discount: -44,
  size: CardSize.LARGE,
};

const ProductRecommend: FunctionComponent<Props> = () => {
  const { Layout } = useTheme();
  const navigation = useNavigation<NavigationProp<ApplicationStackParamList>>();
  const [data, setData] = useState<IProductCard[]>([]);
  const [Products] = useLazyGetPopularProducts();
  const [GetProductById] = useLazyGetProductById();

  const QUERY_PRODUCTS = async () => {
    try {
      let array_products: IProductCard[] = [];
      const { loading, error, data } = await Products({
        variables: { page: 1, perPage: 10 },
      });
      // Assuming Products returns a Promise
      if (data?.getPopularProducts?.popular_products) {
        for (const item of data.getPopularProducts.popular_products) {
          const product_data: IProductCard = {
            id: item.pplp_pd_id?.toString() || '',
          };
          array_products.push(product_data);
        }
        return array_products;
      } else if (loading) {
        console.log('Products are loading...');
      } else if (error) {
        console.log('An error occurred:', error);
      }

      return array_products;
    } catch (error) {
      console.error('Error in QUERY_PRODUCT:', error);
      throw error; // Re-throw the error after logging it
    }
  };

  const QUERY_PRODUCT_BY_ID = async (id: string) => {
    try {
      const { loading, error, data } = await GetProductById({
        variables: { getProductByIdId: id },
      }); // Assuming Products returns a Promise
      return data;
    } catch (error) {
      console.error('Error in QUERY_PRODUCT_BY_ID:', error);
      throw error; // Re-throw the error after logging it
    }
  };

  const PRODUCT_ARRAY_FORMAT: () => Promise<IProductCard[]> = async () => {
    try {
      const queriedProducts = await QUERY_PRODUCTS();
      if (!Array.isArray(queriedProducts)) {
        throw new Error('Queried products is not an array');
      }

      const updatedProducts = await Promise.all(
        queriedProducts.map(async product => {
          if (!product || typeof product.id !== 'string') {
            throw new Error('Product or Product ID is not valid');
          }
          const getProduct = await QUERY_PRODUCT_BY_ID(product.id);
          return {
            ...product,
            brand: getProduct?.getProductById?.brand?.brand_name_en || '',
            title: getProduct?.getProductById?.pd_name_en,
            description: getProduct?.getProductById?.pd_model,
            amount: getProduct?.getProductById?.pd_model_object?.model_price,
            netAmount:
              getProduct?.getProductById?.pd_model_object?.model_price_tkk,
            discount:
              getProduct?.getProductById?.pd_model_object?.model_price_discount,
            image: getProduct?.getProductById?.pd_photo_file
              ? {
                  uri:
                    config.baseURL + getProduct?.getProductById?.pd_photo_file,
                }
              : undefined,
          };
        }),
      );
      return updatedProducts;
    } catch (error) {
      console.error('An error occurred in PRODUCT_ARRAY_FORMAT:', error);
      return [];
    }
  };

  const fetchData = async () => {
    const products1 = await PRODUCT_ARRAY_FORMAT();
    setData([...data, ...products1]);
  };

  const render = () => {
    let row: JSX.Element[] = [];
    const element: JSX.Element[] = [];

    for (let index = 0; index < data.length; index++) {
      row.push(
        <TouchableOpacity
        key={index}
        onPress={() => {
          navigation.navigate('ProductDetail', data[index] );
        }}
      >
        <ProductCard
          key={`product-recommend-items-${index}`}
          {...data[index]}
        />
        </TouchableOpacity>,
      );
      if (row.length === 2) {
        element.push(
          <View
            key={`product-recommend-${element.length + 1}`}
            style={[Layout.row, Layout.gap10]}
          >
            {row}
          </View>,
        );
        row = [];
      }
    }

    return element;
  };

  useEffect(() => {
    const newData = [];

    for (let index = 0; index < 8; index++) {
      newData.push(dataProduct);
    }

    setData(newData);
    const fetchData = async () => {
      const products1 = await PRODUCT_ARRAY_FORMAT();
      setData([...data, ...products1]);
    };
    fetchData();
  }, []);

  return <View style={[Layout.col, Layout.gap10]}>{render()}</View>;
};

ProductRecommend.defaultProps = {};

export default ProductRecommend;
