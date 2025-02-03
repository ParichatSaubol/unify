import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  ButtonIcon,
  Carousel,
  Catalog,
  CatalogBrand,
  CatalogList,
  Catalogs,
  Community,
  BrandList,
  PointIndex,
  ProductCatalog,
  ProductRecommend,
  Promotions,
  InputSearchProduct,
  OtherMenu,
  CustomScrollView,
  DefaultLayout,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  ButtonIconColors,
  ButtonIconVariant,
  ProductCatalogMethod,
} from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'Home'>;

// @refresh reset
const Home = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  const { Layout, Images, Colors } = useTheme();

  //state
  const [otherMenu, setOtherMenu] = React.useState(false);
  const [search, setSearch] = React.useState('');
  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="light-content">
      <CustomScrollView>
        <Image
          source={Images.bg.f}
          resizeMode="cover"
          style={[Layout.fullWidth, styles.buttonBox]}
        />
        <View style={[Layout.main]}>
          <InputSearchProduct
            placeholder={t('home.placeholder')}
            onSubmitEditing={() => {
              navigation.navigate('SearchIndex' as any);
            }}
            value={search}
            onChange={v => {
              setSearch(v);
            }}
          />
        </View>
        <View style={[Layout.col, styles.customBanner]}>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={Layout.fill}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UnipointIndex' as any);
                }}
              >
                <PointIndex point={99999} />
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <ButtonIcon
                icon={<Images.icons.alert color={Colors.white} />}
                variant={ButtonIconVariant.box}
                colors={ButtonIconColors.primary}
                fullHeight
                onPress={() => {
                  navigation.navigate('Notifications' as any);
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            Layout.gap20,
            Layout.main,
            Layout.bgWhite,
            Layout.radiusBg,
            styles.customBox,
          ]}
        >
          <Catalogs setOtherMenu={setOtherMenu} />
          <Catalog method="topBrand" />
          <CatalogBrand />
          <ProductCatalog method={ProductCatalogMethod.product} />

          <Catalog method="catalogType" />
          <CatalogList />
          <Carousel />

          <Catalog method="flashStore" />
          <ProductCatalog method={ProductCatalogMethod.flashSale} />

          <Catalog method="community" />
          <BrandList />
          <Community />

          <Catalog method="unisolution" />
          <ProductCatalog method={ProductCatalogMethod.solution} />

          <Catalog method="unilearn" />
          <ProductCatalog method={ProductCatalogMethod.learn} />

          <Catalog method="promotion" />
          <Promotions />

          <Catalog method="recommend" />
          <ProductRecommend />
        </View>
      </CustomScrollView>
      {otherMenu && <OtherMenu open={otherMenu} setOpen={setOtherMenu} />}
    </DefaultLayout>
  );
};
const STATUSBAR_HEIGHT = NativeModules.HEIGHT;

const styles = StyleSheet.create({
  statusBar: {
    position: 'absolute',
    top: 0,
    height: STATUSBAR_HEIGHT,
    width: '100%',
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: 1,
  },
  buttonBox: { position: 'absolute', height: 300 },
  box: { height: 53 },
  customBanner: {
    marginTop: 110,
    position: 'relative',
    bottom: -25,
    zIndex: 1,
    paddingHorizontal: 16,
  },
  customBox: {
    paddingTop: 50,
  },
});

export default Home;
