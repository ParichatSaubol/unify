import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useCart, useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AppBar,
  Button,
  CartEmpty,
  CartItems,
  CouponModal,
  DefaultLayout,
  ToggleSwitch,
} from '@/components';
import { IProductCart } from '@/model/product';
import { THB } from '@/utils';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'CartIndex'>;

// @refresh reset
const CartIndex = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');

  const { Layout, Fonts, Images } = useTheme();
  const { currentCart } = useCart();

  // state
  const [productCart, setProductCart] = useState<IProductCart[]>([]);
  const [serviceCart, setServiceCart] = useState<IProductCart[]>([]);
  const [coursesCart, setCoursesCart] = useState<IProductCart[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serviceCartNone, setServiceCartNone] = useState<IProductCart[]>([]); // ไม่มีราคา
  const [isCoupon, setIsCoupon] = useState(false);
  const [useCoin, setUseCoin] = useState(false);
  const cartCount =
    productCart.length + serviceCart.length + coursesCart.length;

  const cartCheckedCount =
    productCart.filter(f => f.isCheck).length +
    serviceCart.filter(f => f.isCheck).length +
    coursesCart.filter(f => f.isCheck).length;

  const cartTotalAmount =
    productCart
      .filter(f => f.isCheck)
      .reduce((a, b) => a + (b.quantity || 0) * (b.amount || 0), 0) +
    serviceCart
      .filter(f => f.isCheck)
      .reduce((a, b) => a + (b.quantity || 0) * (b.amount || 0), 0) +
    coursesCart
      .filter(f => f.isCheck)
      .reduce((a, b) => a + (b.quantity || 0) * (b.amount || 0), 0);
  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // ให้ Get Data แล้ว นำมาใส่ state ข้อมูลบริการ
  useEffect(() => {
    setServiceCart(
      Object.keys(currentCart.services).map(item => ({
        id: item,
        brand: 'MITSUBISHI',
        title: t('cartIndex.title'),
        description: t('cartIndex.description'),
        amount: 1232990,
        netAmount: 1232990,
        discount: -44,
        // service: true,
        // serviceBy: 'MIKITA',
        serviceCount: 100,
        image: Images.mock.solution,
        quantity: currentCart.services[item].quantity,
        isCheck: currentCart.services[item].isChecked,
      })),
    );
  }, [currentCart.services]);

  useEffect(() => {
    setCoursesCart(
      Object.keys(currentCart.courses).map(item => ({
        id: item,
        brand: 'MITSUBISHI',
        title: t('cartIndex.title'),
        description: t('cartIndex.description'),
        amount: 1232990,
        netAmount: 1232990,
        discount: -44,
        // service: true,
        // serviceBy: 'MIKITA',
        serviceCount: 100,
        image: Images.mock.solution,
        quantity: currentCart.courses[item].quantity,
        isCheck: currentCart.courses[item].isChecked,
      })),
    );
  }, [currentCart.courses]);

  useEffect(() => {
    setProductCart(
      Object.keys(currentCart.items).map(item => ({
        id: item,
        brand: 'MITSUBISHI',
        title: t('cartIndex.title'),
        description: t('cartIndex.description'),
        amount: 1232990,
        netAmount: 1232990,
        discount: -44,
        // service: true,
        // serviceBy: 'MIKITA',
        serviceCount: 100,
        image: Images.mock.solution,
        quantity: currentCart.items[item].quantity,
        isCheck: currentCart.items[item].isChecked,
      })),
    );
  }, [currentCart.items]);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('cartIndex.cartTitle')}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={[Layout.main, Layout.gap20, Layout.bgWhite]}>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text style={[Fonts.text21]}>{t('cartIndex.myCart')}</Text>
          <Text style={[Fonts.text21]}>
            ({cartCount} {t('cartIndex.items')})
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
          styles.container,
        ]}
      >
        {cartCount === 0 && <CartEmpty />}
        {productCart.length > 0 && (
          <CartItems cert={productCart} method="product" cartType="cart" />
        )}
        {serviceCart.length > 0 && (
          <CartItems
            cert={serviceCart}
            method="service&solution"
            cartType="cart"
          />
        )}
        {coursesCart.length > 0 && (
          <CartItems cert={coursesCart} method="course" cartType="cart" />
        )}

        {/* <Images.icons.cartEmpty /> */}
        <View style={[styles.bottom, Layout.gap10]}>
          {cartCount > 0 && (
            <View style={[Layout.col, Layout.gap10]}>
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.totalBox]}
              >
                <Text style={[Fonts.text21]}>{t('cartIndex.totalItems')}</Text>
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                  {cartCheckedCount} {t('cartIndex.items')}
                </Text>
              </View>
              <View
                style={[
                  Layout.row,
                  Layout.scrollSpaceBetween,
                  styles.totalAmountBox,
                ]}
              >
                <Text style={[Fonts.text21]}>{t('cartIndex.totalAmount')}</Text>
                <Text style={[Fonts.text21Bold, Fonts.textRed]}>
                  {THB.format(cartTotalAmount || 0).replace(
                    /\b(\w*THB\w*)\b/,
                    '฿ ',
                  )}
                </Text>
              </View>
              <View
                style={[
                  Layout.row,
                  Layout.scrollSpaceBetween,
                  styles.couponBox,
                ]}
              >
                <View style={[Layout.rowCenter]}>
                  <Images.icons.coupon color="#0057FF" />
                  <Text style={[Fonts.text18, Fonts.textPrimary]}>
                    {t('cartIndex.selectCoupon')}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setIsCoupon(!isCoupon);
                  }}
                >
                  <Text style={[Fonts.text18, Fonts.textPrimary]}>
                    {t('cartIndex.select')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.pointBox]}
              >
                <View
                  style={[Layout.row, Layout.alignItemsCenter, Layout.gap10]}
                >
                  <Images.icons.coin />
                  <Text style={[Fonts.text16]}>
                    <Text style={[Fonts.textBlack]}>
                      {t('cartIndex.useUnipoint')}
                    </Text>{' '}
                    {t('cartIndex.userpoint', { points: 30, currency: 30 })}
                  </Text>
                </View>
                <Text>
                  <ToggleSwitch
                    setIsEnabled={() => {
                      setUseCoin(!useCoin);
                    }}
                    isEnabled={useCoin}
                  />
                </Text>
              </View>
            </View>
          )}
          <Button
            title={t('cartIndex.checkout')}
            onPress={() => {
              navigation.navigate('CheckoutIndex', {
                courses: { '1': { isChecked: true, no: 1, quantity: 1 } },
              });
            }}
          />
        </View>
      </ScrollView>

      <CouponModal modalVisible={isCoupon} setModalVisible={setIsCoupon} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#F2F4F7',
  },
  customMargin: {
    marginTop: 40,
  },
  totalBox: {
    padding: 8,
    borderRadius: 5,
  },
  totalAmountBox: {
    padding: 8,
    backgroundColor: '#E6EEFF',
    borderRadius: 5,
  },
  couponBox: {
    padding: 8,
    backgroundColor: '#F9FAFB',
    borderRadius: 5,
  },
  pointBox: {
    padding: 8,
    backgroundColor: '#F2F4F7',
    borderRadius: 5,
  },
});

export default CartIndex;
