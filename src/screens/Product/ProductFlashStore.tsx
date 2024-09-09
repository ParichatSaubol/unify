import React, { useEffect } from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, FlashSaleRuntime, ProductCard } from '@/components';
import { AppColor } from '@/model/options';
import { IProductCard } from '@/model/product';

type Props = NativeStackScreenProps<ProductParamsList, 'ProductFlashStore'>;

// @refresh reset
const ProductFlashStore = ({ navigation, route }: Props): JSX.Element => {
  const name = route?.params?.name || 'Flash Store';
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  const dataFlashSale: IProductCard = {
    brand: 'MIKITA',
    title: 'เครื่องดูดฝุ่นและเป่าลมขนาด 20 ลิตร ระบบ HEPA',
    description: 'รุ่น HEPA-MAR22',
    amount: 1232990,
    netAmount: 1232990,
    discount: -44,
    flashSale: true,
    quantity: 100,
    image: Images.mock.flashSalrProduct,
  };

  // state
  const [items, setItems] = React.useState<any[]>([]);

  // handle callback
  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>): void => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

  const init = async (): Promise<void> => {
    for (let i = 0; i < 10; i++) {
      setItems(prev => [...prev, dataFlashSale]);
    }
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 2000),
    // );
    // onChangeTheme({ darkMode: true });
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={[Layout.main, Layout.gap20, Layout.bgWhite]}>
        <AppBar
          color={AppColor.white}
          title={name}
          onPress={() => {
            //กลับไปหน้าก่อนหน้า
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={[Layout.col, Layout.justifyContentBetween]}
      >
        <View>
          <Image source={Images.mock.flashSale} style={styles.imageTitle} />
        </View>
        <View style={[Layout.main]}>
          <View
            style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}
          >
            <View style={[Layout.row, Layout.gap10]}>
              <Images.icons.flashSale
                height={'100%'}
                style={styles.flashSale}
                color="#FC1B13"
              />
              <View>
                <Text style={[Fonts.text21Bold, Fonts.textRed]}>
                  FLASH STORE
                </Text>
                <Text style={Fonts.text16} numberOfLines={1}>
                  ดีลลดแรงๆ สินค้าราคาพิเศษ
                </Text>
              </View>
            </View>
            <FlashSaleRuntime />
          </View>

          <View style={[styles.flashSaleList]}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={`product-flashsale-${index}`}
                onPress={() => {
                  navigation.navigate('ProductDetail', {
                    name: item.title,
                    isFlash: true,
                  });
                }}
              >
                <ProductCard {...item} />
              </TouchableOpacity>
            ))}
          </View>
          {/*  */}
        </View>
        {/* <View></View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageTitle: {
    width: '100%',
  },
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  flashSale: {},
  flashSaleList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    columnGap: 10,
  },
});

export default ProductFlashStore;
