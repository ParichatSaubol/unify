import React, { useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  Carousel,
  Catalog,
  CatalogBrand,
  ProductCatalog,
  Promotions,
  InputSearchProduct,
  StatusBar,
  CustomScrollView,
  DefaultLayout,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { CarouselSize, ProductCatalogMethod } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ProductIndex'>;

// @refresh reset
const ProductIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Images } = useTheme();


  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout>
      <CustomScrollView>
        <Image
          source={Images.bg.h}
          resizeMode="cover"
          style={[Layout.fullWidth, styles.container]}
        />
        <AppBar
          onPress={() => {
            navigation.goBack();
          }}
          image={<Images.icons.unistore height={29} width={143} />}
          zeroMargin
        />
        <View style={[Layout.main, Layout.gap20]}>
          <InputSearchProduct placeholder="PATLITE ลดเกินคุ้มม! ไฟเตือน สูงสุด 20%.. " />
          <Carousel hiddentScrollPos size={CarouselSize.small} />
        </View>
        <View style={[Layout.gap20, Layout.main, Layout.bgWhite]}>
          {/* <Catalogs /> */}
          <Catalog method="popularTopBrands" />
          <CatalogBrand
            brandJSX={[
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BrandIndex');
                }}
                key={1}
              >
                <Image source={Images.catalog.a} />
              </TouchableOpacity>,
            ]}
          />
          <CatalogBrand />

          <Catalog method="promotion" />
          <Promotions method="default" />
          {/* <Catalog method="catalogType" />
          <CatalogList />
          <Carousel /> */}

          <Catalog method="flashStore" />
          <ProductCatalog method={ProductCatalogMethod.flashSale} />

          <Catalog method="exclusiveBrand" />
          <CatalogBrand />
          <ProductCatalog />

          <Catalog
            method="brand"
            brandName="เอ็กซ์คลูซีฟแบรนด์ชั้นนำด้านอุตสาหกรรม"
            icon={<Image source={Images.catalog.a} />}
          />
          <ProductCatalog />

          <Catalog method="unilearn" />
          <ProductCatalog method={ProductCatalogMethod.learn} />
        </View>
      </CustomScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { position: 'absolute', height: 384 },
  // header: { paddingBottom: 0 },
});

export default ProductIndex;
