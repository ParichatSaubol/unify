import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  ButtonIcon,
  Carousel,
  PromotionBenner,
  ProductDetail as Detail,
  Catalog,
  ProductRecommend,
  CartShopping,
  DefaultLayout,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { IProductDetail } from '@/model/product';
import {
  ButtonIconColors,
  ButtonIconVariant,
  CarouselSize,
} from '@/model/options';
import { useDispatch } from '@/store';
import { changeTheme } from '@/store/theme';

// {
//   title:
//     'สวิตซ์ปุ่มฉุกเฉิน Emergency Switch IDEC สวิตซ์ปุ่ม ฉุกเฉิน Emergency Switch',
//   code: '123456789',
//   star: 4,
//   soldCount: 100,
//   netAmount: 100,
//   amount: 100,
//   isGenuine: true,
//   isReady: true,
//   delivered: '1 วันทำการ',
//   brandName: 'IDEA',
//   brandDescription: 'IDEA',
//   detail: {
//     Catagories: 'อุปกรณ์เพื่อความปลอดภัยเครื่องจักร',
//     Subcatagories: 'สวิสต์ปุ่มฉุกเฉิน',
//     Brand: 'IDEC',
//     'Product Name': 'IDEC สวิตซ์ปุ่มฉุกเฉิน Emergency Switch',
//     Model: 'XN4E-BL411MRH ',
//     'Product Dimension (mm)': '50 x 300 x 50 x 50',
//     'Package Dimension (mm)': '100 x 500 x 100 x 100',
//     'Weight (g.)': '1500',
//     'Qty. per Pcs': '1',
//   },
//   brandLogo: Images.mock.idec,
//   descriptionImage: <Image source={Images.mock.description} />,
//   description: [
//     'A ø30 emergency stop switch that comes in a variety of types.',
//     'The padlock type lets you lock it in place, while the flash-bezel type has an attractive design.',
//     'Large number of variations: padlock-supporting type, flash-bezel type, ø60 extra-large type, illuminated type, linked illumination type, and more.',
//     'Superior safety provided by the same safe-breaking action and safety-potential construction as seen in the ø166 XA/ø22 XW series.',
//     'The switches naturally conform to all requirements emergency stop switches need, including a direct-opening feature and safety lock.',
//   ],
//   images: [Images.carousel.a, Images.carousel.a, Images.carousel.a],
//   serviceOptions: [
//     {
//       title: 'งานติดตั้งสวิตซ์ปุ่มฉุกเฉิน แบรนด์ IDEC',
//       description: 'ไม่รวมค่าติดตั้ง',
//       amount: 590,
//       id: '1',
//     },
//     {
//       title: 'งานติดตั้งสวิตซ์ปุ่มฉุกเฉิน แบรนด์ IDEC',
//       description: 'ไม่รวมค่าติดตั้ง',
//       amount: 590,
//       id: '2',
//     },
//   ],
//   model: [
//     'FX2N-49ER-ES-01',
//     'FX2N-49ER-ES-02',
//     'FX2N-49ER-ES-03',
//     'FX2N-49ER-ES-04',
//     'FX2N-49ER-ES-05',
//     'FX2N-49ER-ES-06',
//   ],
// }

type Props = NativeStackScreenProps<ProductParamsList, 'ProductDetail'>;

// @refresh reset
const ProductDetail = ({ navigation, route }: Props): JSX.Element => {
  const isFlash = route?.params?.isFlash || false;
  const [loading, setloading] = React.useState(true);
  // hooks

  const { t } = useTranslation('register');
  const { Layout, Images } = useTheme();
  const dispatch = useDispatch();
  // const bar = useStatus
  // state

  const [detail, setDetail] = React.useState<IProductDetail>({
    title: t('productDetail.title'),
    code: '123456789',
    star: 4,
    soldCount: 100,
    netAmount: 100,
    amount: 100,
    isGenuine: true,
    isReady: true,
    delivered: t('productDetail.delivered'),
    brandName: 'IDEA',
    brandDescription: 'IDEA',
    detail: {
      Catagories: t('productDetail.catagories'),
      Subcatagories: t('productDetail.subcatagories'),
      Brand: 'IDEC',
      'Product Name': 'IDEC สวิตซ์ปุ่มฉุกเฉิน Emergency Switch',
      Model: 'XN4E-BL411MRH ',
      'Product Dimension (mm)': '50 x 300 x 50 x 50',
      'Package Dimension (mm)': '100 x 500 x 100 x 100',
      'Weight (g.)': '1500',
      'Qty. per Pcs': '1',
    },
    brandLogo: Images.mock.idec,
    descriptionImage: <Image source={Images.mock.description} />,
    description: [
      'A ø30 emergency stop switch that comes in a variety of types.',
      'The padlock type lets you lock it in place, while the flash-bezel type has an attractive design.',
      'Large number of variations: padlock-supporting type, flash-bezel type, ø60 extra-large type, illuminated type, linked illumination type, and more.',
      'Superior safety provided by the same safe-breaking action and safety-potential construction as seen in the ø166 XA/ø22 XW series.',
      'The switches naturally conform to all requirements emergency stop switches need, including a direct-opening feature and safety lock.',
    ],
    images: [Images.carousel.a, Images.carousel.a, Images.carousel.a],
    serviceOptions: [
      {
        title: t('productDetail.title1'),
        description: t('productDetail.description1'),
        amount: 590,
        id: '1',
      },
      {
        title: t('productDetail.title1'),
        description: t('productDetail.description1'),
        amount: 590,
        id: '2',
      },
    ],
    model: [
      'FX2N-49ER-ES-01',
      'FX2N-49ER-ES-02',
      'FX2N-49ER-ES-03',
      'FX2N-49ER-ES-04',
      'FX2N-49ER-ES-05',
      'FX2N-49ER-ES-06',
    ],
  });

  const random = ['a', 'b', 'c'];

  // handle callback

  const init = async (): Promise<void> => {
    dispatch(changeTheme({ darkMode: false }));
  };

  // callback effect
  useEffect(() => {
    setloading(true);
    const setDetailData = async () => {
      setDetail({
        title: route?.params?.title,
        code: route?.params?.description,
        star: 4,
        soldCount: 100,
        netAmount: 100,
        amount: 100,
        isGenuine: true,
        isReady: true,
        delivered: t('productDetail.delivered'),
        brandName: 'IDEA',
        brandDescription: 'IDEA',
        detail: {
          Catagories: t('productDetail.catagories'),
          Subcatagories: t('productDetail.subcatagories'),
          Brand: 'IDEC',
          'Product Name': 'IDEC สวิตซ์ปุ่มฉุกเฉิน Emergency Switch',
          Model: 'XN4E-BL411MRH ',
          'Product Dimension (mm)': '50 x 300 x 50 x 50',
          'Package Dimension (mm)': '100 x 500 x 100 x 100',
          'Weight (g.)': '1500',
          'Qty. per Pcs': '1',
        },
        brandLogo: Images.mock.idec,
        descriptionImage: <Image source={Images.mock.description} />,
        description: [
          'A ø30 emergency stop switch that comes in a variety of types.',
          'The padlock type lets you lock it in place, while the flash-bezel type has an attractive design.',
          'Large number of variations: padlock-supporting type, flash-bezel type, ø60 extra-large type, illuminated type, linked illumination type, and more.',
          'Superior safety provided by the same safe-breaking action and safety-potential construction as seen in the ø166 XA/ø22 XW series.',
          'The switches naturally conform to all requirements emergency stop switches need, including a direct-opening feature and safety lock.',
        ],
        images: [
          route?.params?.image,
          route?.params?.image,
          route?.params?.image,
        ],
        serviceOptions: [
          {
            title: t('productDetail.title1'),
            description: t('productDetail.description1'),
            amount: 590,
            id: '1',
          },
          {
            title: t('productDetail.title1'),
            description: t('productDetail.description1'),
            amount: 590,
            id: '2',
          },
        ],
        model: [
          'FX2N-49ER-ES-01',
          'FX2N-49ER-ES-02',
          'FX2N-49ER-ES-03',
          'FX2N-49ER-ES-04',
          'FX2N-49ER-ES-05',
          'FX2N-49ER-ES-06',
        ],
      });
      setTimeout(() => {
        setloading(false);
      }, 500);
    };

    setDetailData();

    init();

    return () => {
      dispatch(changeTheme({ darkMode: true }));
    };
  }, [route]);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        right={
          <View
            style={[
              Layout.row,
              Layout.gap10,
              Layout.alignItemsCenter,
              Layout.justifyContentEnd,
            ]}
          >
            <ButtonIcon
              icon={
                <Images.icons.favorite
                  key={'favorite'}
                  color={'black'}
                  height={18}
                  width={18}
                />
              }
              colors={ButtonIconColors.white}
              variant={ButtonIconVariant.box}
            />
            <ButtonIcon
              icon={
                <Images.icons.share
                  key={'share'}
                  color={'black'}
                  height={18}
                  width={18}
                />
              }
              colors={ButtonIconColors.white}
              variant={ButtonIconVariant.box}
            />
          </View>
        }
      />

      <ScrollView contentContainerStyle={[]}>
        <View style={[Layout.gap20]}>
          <Carousel
            size={CarouselSize.medium}
            fullWidth
            isRadius={false}
            dataImages={[
              route?.params?.image,
              route?.params?.image,
              route?.params?.image,
            ]}
          />
          <PromotionBenner isFlash={isFlash} />
        </View>
        <Detail {...detail} />
        <View style={[Layout.gap20, styles.container, Layout.bgWhite]}>
          <Catalog method="recommend" />
          <ProductRecommend />
        </View>
      </ScrollView>

      <CartShopping
        {...detail}
        id={random[Math.floor(Math.random() * random.length)]}
      />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingBottom: 20 },
  logo: { height: 24, width: 86 },
  logoContainer: { position: 'relative', top: -40 },
  loading: {
    marginRight: 20,
  },
});

export default ProductDetail;
