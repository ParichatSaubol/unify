import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { getProductList } from '@/services/restapi/modules/product';
import config from '@/utils/config';
import { IProductItem } from '@/model/product';

interface Props {
  rowNumber?: number;
  catalogId?: string;
}

const { width: windowWidth } = Dimensions.get('window');

const DEFAULT_PAGE_SIZE = 8;

// แสดงรายการหมวดหมู่
const CatalogProductList: FunctionComponent<Props> = ({
  rowNumber = 2,
  catalogId,
}) => {
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Fonts } = useTheme();

  // ข้อมูลของหมวดหมู่
  const [productList, setProductList] = useState<IProductItem[][]>([]);

  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);

  const fetchProductList = async (currentPage = 1): Promise<void> => {
    try {
      const data = await getProductList(
        currentPage,
        DEFAULT_PAGE_SIZE,
        catalogId,
      );
      setProductList(prevProductList => {
        if (currentPage === 1) {
          if (data?.items?.length > 0) {
            return [data?.items];
          }

          return [];
        }

        return [...prevProductList, data?.items];
      });
    } catch (error) {}
  };

  useEffect(() => {
    setLoading(false);
  }, [productList]);

  const handleScrollEnd = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isAtEnd =
      contentOffset.x + layoutMeasurement.width >= contentSize.width - 20;

    if (isAtEnd && !loading) {
      setLoading(true);
      const newPage = page + 1;
      fetchProductList(newPage);
      setPage(newPage);
    }
  };

  const init = async (): Promise<void> => {
    fetchProductList();
  };

  const renderItem = (v: IProductItem) => {
    return (
      <TouchableOpacity
        style={[
          Layout.col,
          Layout.alignItemsCenter,
          {
            width:
              (windowWidth - 30) / Math.ceil(DEFAULT_PAGE_SIZE / rowNumber),
          },
        ]}
        onPress={() => {
          navigate('ServiceDetail');
        }}
      >
        <View style={styles.image}>
          <Image
            source={{
              uri: config.baseURL + '/' + v.pd_photoFile,
              width: 40,
              height: 40,
            }}
          />
        </View>
        <View>
          <Text style={[Fonts.text16, Fonts.textCenter]}>{v.pd_nameTH}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    // init();
  }, []);

  useEffect(() => {
    if (catalogId) {
      setLoading(true);
      setPage(1);
      fetchProductList(1);
    }
  }, [catalogId]);

  return (
    <View style={[Layout.col]}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        onMomentumScrollEnd={handleScrollEnd}
      >
        {productList.map((prodList, index) => (
          <FlatList
            key={`product-list-${index}`}
            data={prodList}
            renderItem={({ item }) => renderItem(item)}
            numColumns={Math.ceil(DEFAULT_PAGE_SIZE / rowNumber)}
            scrollEnabled={false}
          />
        ))}
      </ScrollView>
    </View>
  );
};

CatalogProductList.defaultProps = {
  rowNumber: 2,
  catalogId: undefined,
};

const styles = StyleSheet.create({
  container: {},
  image: { height: 70 },
  imageBox: { width: 80 },
});

export default CatalogProductList;
