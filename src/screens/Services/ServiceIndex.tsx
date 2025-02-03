import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  ButtonIcon,
  Carousel,
  Catalog,
  CatalogList,
  BrandList,
  ProductCatalog,
  ServiceAppBar,
  ServiceCategory,
  CustomScrollView,
  DefaultLayout,
} from '@/components';
import { TopBrand } from '@/model/brand';
import {
  ButtonIconColors,
  ButtonIconVariant,
  CarouselSize,
  ProductCatalogMethod,
} from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'ServiceIndex'>;

// @refresh reset
const ServiceIndex = ({}: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { Layout, Images, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topBrand, setTopBrand] = useState<TopBrand[]>([
    {
      title: 'Mitsubishi',
      logo: <Image source={Images.brand.hitachiLogo} />,
      name: 'LearnCategory',
    },
    { title: 'GRACO', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'TRUSCO', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'IDEC', logo: <Image source={Images.brand.gracoLogo} /> },
  ]);

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <CustomScrollView>
        <ImageBackground source={Images.bg.j} style={styles.imageBody} />

        <View style={[styles.container]}>
          <ServiceAppBar
            right={
              <View
                style={[
                  Layout.row,
                  Layout.gap10,
                  Layout.justifyContentEnd,
                  Layout.alignItemsCenter,
                ]}
              >
                <ButtonIcon
                  icon={<Images.icons.cart color="#475467" />}
                  colors={ButtonIconColors.white}
                  variant={ButtonIconVariant.circle}
                />
                <ButtonIcon
                  icon={<Images.icons.search color="#475467" />}
                  colors={ButtonIconColors.white}
                  variant={ButtonIconVariant.circle}
                />
              </View>
            }
          />
          <View style={[Layout.row, Layout.gap10]} />
          <Carousel
            hiddentScrollPos
            size={CarouselSize.small}
            dataImages={[
              Images.service.mock,
              Images.service.mock,
              Images.service.mock,
            ]}
          />
          <View style={[styles.headerBox]}>
            <View style={[Layout.col]}>
              <Text style={[Fonts.text18, Fonts.textWhite]}>
                {t('serviceIndex.selectServiceArea')}
              </Text>
              <Text style={[Fonts.text16, Fonts.textWhite]}>
                {t('serviceIndex.selectLocation')}
              </Text>
            </View>
            <View>
              <Images.icons.addcircle />
            </View>
          </View>
          <View style={[styles.categoryBox]}>
            <ServiceCategory />
          </View>
        </View>
        <View style={[styles.container, Layout.bgWhite]}>
          <Catalog method="catalogSolution" />
          <CatalogList
            data={[
              {
                id: 1,
                name: t('serviceIndex.paintSystem'),
                image: Images.catalog.mockA,
              },
              {
                id: 2,
                name: t('serviceIndex.safetyEquipment'),
                image: Images.catalog.mockB,
              },
              {
                id: 3,
                name: t('serviceIndex.machineParts'),
                image: Images.catalog.mockC,
              },
              {
                id: 4,
                name: t('serviceIndex.automation'),
                image: Images.catalog.mockD,
              },
            ]}
          />

          <Catalog method="catalogService" />
          <CatalogList
            data={[
              {
                id: 1,
                name: t('serviceIndex.paintSystem'),
                image: Images.catalog.mockA,
              },
              {
                id: 2,
                name: t('serviceIndex.safetyEquipment'),
                image: Images.catalog.mockB,
              },
              {
                id: 3,
                name: t('serviceIndex.machineParts'),
                image: Images.catalog.mockC,
              },
              {
                id: 4,
                name: t('serviceIndex.automation'),
                image: Images.catalog.mockD,
              },
            ]}
          />

          <Catalog method="productsPurchasedServices" />
          <ProductCatalog method={ProductCatalogMethod.product} />

          <Catalog method="brandServiceAndSolution" />
          <BrandList />

          <Catalog method="topSolution" />
          <ProductCatalog method={ProductCatalogMethod.product} />
          <Carousel
            hiddentScrollPos
            size={CarouselSize.small}
            dataImages={[Images.learn.mock]}
            fullWidth
          />

          <Catalog method="topService" />
          <ProductCatalog method={ProductCatalogMethod.product} />

          <Catalog method="paintSystem" />
          <ProductCatalog method={ProductCatalogMethod.product} />
        </View>
      </CustomScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 32, paddingHorizontal: 16, gap: 20 },
  headerBox: {
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
  blue: { backgroundColor: '#0047FF' },
  imageBody: { height: 2900, position: 'absolute', width: '100%' },
  categoryBox: {},
});

export default ServiceIndex;
