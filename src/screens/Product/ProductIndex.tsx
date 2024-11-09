import React, { useCallback, useEffect, useState } from 'react';
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
import { getBrandRecommend } from '@/services/restapi/modules/brand';
import ProductCatalogByBrand from '@/components/Product/ProductCatalogByBrand';

interface IBrandRecommend {
  brand_id: string;
  brand_logo_path: string;
}

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ProductIndex'>;

// @refresh reset
const ProductIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Images } = useTheme();

  const [brands, setBrands] = useState<IBrandRecommend[]>([]);
  const [brandIdSelected, setBrandIdSelected] = useState<number>(0);

  // handle callback

  const fetchBrandRecommend = useCallback(async () => {
    try {
      const data = await getBrandRecommend();

      if (data.res_code === '00' && data?.res_data) {
        const brandData: IBrandRecommend[] = data.res_data;

        const brandFilterNullId = brandData?.filter(
          brand => brand?.brand_id !== null,
        );
        setBrands(brandFilterNullId);

        if (brandFilterNullId?.[0].brand_id) {
          setBrandIdSelected(Number(brandFilterNullId?.[0].brand_id));
        }
      }
    } catch (error) {}
  }, []);

  const handleChangeBrand = useCallback((id: number) => {
    setBrandIdSelected(id);
  }, []);

  const init = async (): Promise<void> => {
    fetchBrandRecommend();
  };

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
            brandJSX={brands?.map((brand, index) => (
              <TouchableOpacity
                style={[styles.brand]}
                key={brand?.brand_id || index}
              >
                <Image
                  source={{ uri: brand?.brand_logo_path }}
                  width={80}
                  height={40}
                />
              </TouchableOpacity>
            ))}
            // brandJSX={[
            //   <TouchableOpacity
            //     onPress={() => {
            //       navigation.navigate('BrandIndex');
            //     }}
            //     key={1}
            //   >
            //     <Image source={Images.catalog.a} />
            //   </TouchableOpacity>,
            // ]}
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
          <CatalogBrand
            brandJSX={brands?.map(brand => (
              <TouchableOpacity
                onPress={() => handleChangeBrand(Number(brand?.brand_id))}
                style={[styles.brand]}
                key={brand?.brand_id}
              >
                <Image
                  source={{ uri: brand?.brand_logo_path }}
                  width={80}
                  height={40}
                />
              </TouchableOpacity>
            ))}
          />
          <ProductCatalogByBrand brandId={brandIdSelected} />

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
  brand: {
    padding: 8,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
    borderColor: '#eee',
  },
  // header: { paddingBottom: 0 },
});

export default ProductIndex;
