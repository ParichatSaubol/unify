import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  BrandLogo,
  Carousel,
  Catalog,
  DefaultLayout,
  ProductCatalog,
  ProductRecommend,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { CarouselSize, ProductCatalogMethod } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'BrandIndex'>;

// @refresh reset
const BrandIndex = ({ navigation }: Props): JSX.Element => {
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
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        title="HITACHI"
        // image={<Images.icons.unistore height={29} width={143} />}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.gap20]}>
          {/* <SearchProduct placeholder="PATLITE ลดเกินคุ้มม! ไฟเตือน สูงสุด 20%.. " /> */}
          <Carousel
            size={CarouselSize.small}
            fullWidth
            isRadius={false}
            hiddentScrollPos
          />
          <View style={styles.logoContainer}>
            <BrandLogo
              title="HITACHI CONSUMER THAILAND"
              description="ผลิตและจัดจำหน่าย มอเตอร์เซอร์โว และมอเตอร์ไฟฟ้า มอเตอร์เหนี่ยวนำ
มอเตอร์อุตสาหกรรม และอุปกรณ์บำรุงรักษาเครื่องจักร จากประเทศญี่ปุ่น"
              logo={
                <Image
                  source={Images.brand.hitachi}
                  resizeMode="cover"
                  style={styles.logo}
                />
              }
            />
          </View>
        </View>
        <View style={[Layout.gap20, Layout.main, Layout.bgWhite]}>
          <Catalog method="recommendForYou" />
          <ProductCatalog method={ProductCatalogMethod.product} />

          <Catalog method="brandUnisolution" />
          <ProductCatalog method={ProductCatalogMethod.solution} />

          <Catalog method="brandUnilearn" />
          <ProductCatalog method={ProductCatalogMethod.learn} />

          <Catalog method="recommend" />
          <ProductRecommend />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  logo: { height: 24, width: 86 },
  logoContainer: { position: 'relative', top: -40 },
});

export default BrandIndex;
