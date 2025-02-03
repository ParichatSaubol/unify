import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AddressOrder,
  AppBar,
  Button,
  CartEmpty,
  CartItems,
  CheckoutSummary,
  CheckoutWarning,
  DefaultLayout,
} from '@/components';
import { IProductCart } from '@/model/product';
import { ICoupon } from '@/model/coupon';
import { IPoint } from '@/model/point';
import { IOrder } from '@/model/order';
import { ButtonVariant, AppColor } from '@/model/options';
import CartAddress from '@/components/Cart/CartAddress';

type Props = NativeStackScreenProps<ProductParamsList, 'CheckoutIndex'>;

// @refresh reset
const CheckoutIndex = ({ navigation, route }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  const { courses, items, services } = route.params;

  const { Layout, Fonts, Images } = useTheme();

  // state
  const [order, setOrder] = useState<IOrder>({
    id: '1',
    code: 'XX',
    discountCouponCode: 'XX',
    discountBrunPoint: 100,
  });

  const [address, setAddress] = useState(0);
  // สินค้า
  const [productCart, setProductCart] = useState<IProductCart[]>([]);
  // บริการ
  const [serviceCart, setServiceCart] = useState<IProductCart[]>([]);
  // คอร์ส
  const [coursesCart, setCoursesCart] = useState<IProductCart[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serviceCartNone, setServiceCartNone] = useState<IProductCart[]>([]); // ไม่มีราคา
  // ข้อมูลคูปอง ส่วนลด
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coupon, setCoupon] = useState<ICoupon>({
    code: 'XX',
    discount: 100,
    id: '1',
  });
  // ข้อมูลส่วนลด เหรียญ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [point, setPoint] = useState<IPoint>({
    code: 'XX',
    discount: 100,
    id: '1',
  });
  // ข้อมูลส่วนลด แต้ม ที่ได้รับ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rewardPoint, setRewardPoint] = useState({});
  const [isAddress, setIsAddress] = useState(false);
  const init = async (): Promise<void> => {
    const totalAmount =
      productCart
        .filter(f => f.isCheck)
        .reduce((a, b) => a + (b.quantity || 0) * (b.amount || 0), 0) +
      serviceCart
        .filter(f => f.isCheck)
        .reduce((a, b) => a + (b.quantity || 0) * (b.amount || 0), 0) +
      coursesCart
        .filter(f => f.isCheck)
        .reduce((a, b) => a + (b.quantity || 0) * (b.amount || 0), 0);

    const totalCount =
      productCart.length + serviceCart.length + coursesCart.length;

    setOrder({
      ...order,
      netAmount: totalAmount,
      vat: totalAmount * 0.07,
      amount:
        totalAmount +
        (totalAmount * 0.07 || 0) -
        (coupon.discount || 0) -
        (point.discount || 0),
      itemsCount: totalCount,
      deliveryFee: 0,
      rewardPoint: 279,
    });
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, [productCart, serviceCart, coursesCart]);

  // ดึงข้อมูลแล้วเก็บไว้ใน state
  useEffect(() => {
    // Get Data Product By ID (items object key)
    if (!services) {
      return;
    }
    setServiceCart(
      Object.keys(services).map(item => ({
        id: item,
        brand: 'MITSUBISHI',
        title: t('checkoutIndex.title'),
        description: t('checkoutIndex.description'),
        amount: 1232990,
        netAmount: 1232990,
        discount: -44,
        // service: true,
        // serviceBy: 'MIKITA',
        serviceCount: 100,
        image: Images.mock.solution,
        quantity: services[item].quantity,
        isCheck: services[item].isChecked,
      })),
    );
  }, [services]);

  useEffect(() => {
    // Get Data Product By ID (items object key)
    if (!courses) {
      return;
    }
    setCoursesCart(
      Object.keys(courses).map(item => ({
        id: item,
        brand: 'MITSUBISHI',
        title: t('checkoutIndex.title'),
        description: t('checkoutIndex.description'),
        amount: 1232990,
        netAmount: 1232990,
        discount: -44,
        // service: true,
        // serviceBy: 'MIKITA',
        serviceCount: 100,
        image: Images.mock.solution,
        quantity: courses[item].quantity,
        isCheck: courses[item].isChecked,
      })),
    );
  }, [courses]);

  useEffect(() => {
    // Get Data Product By ID (items object key)
    if (!items) {
      return;
    }
    setProductCart(
      Object.keys(items).map(item => ({
        id: item,
        brand: 'MITSUBISHI',
        title: t('checkoutIndex.title'),
        description: t('checkoutIndex.description'),
        amount: 1232990,
        netAmount: 1232990,
        discount: -44,
        // service: true,
        // serviceBy: 'MIKITA',
        serviceCount: 100,
        image: Images.mock.solution,
        quantity: items[item].quantity,
        isCheck: items[item].isChecked,
      })),
    );
  }, [items]);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('checkoutIndex.checkoutTitle')}
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
          <Text style={[Fonts.text21]}>{t('checkoutIndex.myCart')}</Text>
          <Text style={[Fonts.text21]}>
            ({order.itemsCount} {t('checkoutIndex.itemsCount')})
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
        {/* warning */}
        <CheckoutWarning />
        {/* เปลี่ยนที่อยู่ */}
        <AddressOrder
          onPress={() => {
            setIsAddress(true);
          }}
        />
        {/* แสดงผลไม่มีสินค้า */}
        {order.itemsCount === 0 && <CartEmpty />}

        {/* checkout product */}
        {productCart.length > 0 && (
          <CartItems cert={productCart} method="product" cartType="checkout" />
        )}

        {/* checkout service */}
        {serviceCart.length > 0 && (
          <CartItems
            cert={serviceCart}
            method="service&solution"
            cartType="checkout"
          />
        )}

        {/* checkout courses */}
        {coursesCart.length > 0 && (
          <CartItems cert={coursesCart} method="course" cartType="checkout" />
        )}

        {/* แสดงผลราคาร่วมทั้งหมด */}
        <CheckoutSummary order={order} coupon={coupon} point={point} />
        <View style={[Layout.row, Layout.gap20, styles.dividerTop]}>
          <View style={[Layout.fill]}>
            <Button
              variant={ButtonVariant.outlined}
              title={t('checkoutIndex.quoteButton')}
              onPress={() => {
                //
              }}
            />
          </View>
          <View style={[Layout.fill]}>
            <Button
              title={t('checkoutIndex.payButton')}
              onPress={() => {
                navigation.navigate('PaymentIndex', { orderId: order.id });
              }}
            />
          </View>
        </View>
        {/* ปุ่มชำระเงิน */}
      </ScrollView>
      {isAddress && (
        <View style={[styles.addressBox]}>
          <View style={styles.overscreen} />
          <View style={styles.addressArea}>
            <CartAddress
              address={address}
              setAddress={val => {
                setIsAddress(false);
                setAddress(val);
              }}
            />
          </View>
        </View>
      )}
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  dividerTop: {
    borderTopWidth: 1,
    borderTopColor: '#D0D5DD',
    paddingVertical: 19,
  },
  addressBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  overscreen: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  addressArea: { bottom: 0, position: 'absolute', width: '100%' },
});

export default CheckoutIndex;
