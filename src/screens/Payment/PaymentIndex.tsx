import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, DefaultLayout } from '@/components';
import { IOrder } from '@/model/order';
import {
  ButtonAlign,
  ButtonColor,
  ButtonVariant,
  AppColor,
} from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'PaymentIndex'>;

// @refresh reset
const PaymentIndex = ({ navigation, route }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { orderId } = route.params;

  const { Layout, Fonts, Images } = useTheme();
  // const { currentCart } = useCart();

  // state

  const [order, setOrder] = useState<IOrder>({
    code: 'XX',
    discountCouponCode: 'XX',
    discountBrunPoint: 100,
  });
  // ข้อมูลส่วนลด แต้ม ที่ได้รับ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rewardPoint, setRewardPoint] = useState({});

  // จำนวนรายการ

  // รวมราคาสินค้าทั้งหมด

  // handle callback

  const init = async (): Promise<void> => {
    // Get Order By Id
    setOrder({
      id: orderId,
      netAmount: 100,
      code: 'XX',
      discountCouponCode: 'XX',
      discountCouponAmount: 100,
      discountBrunPoint: 100,
      deliveryFee: 100,
      vat: 7,
      amount: 107,
    });
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('paymentIndex.title')}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
          styles.container,
        ]}
      >
        <Text style={[Fonts.text21, Fonts.textBlack]}>
          {t('paymentIndex.chooseMethod')}
        </Text>
        <Button
          title={t('paymentIndex.creditCard')}
          variant={ButtonVariant.outlined}
          colors={ButtonColor.secondary}
          align={ButtonAlign.between}
          endIcon={
            <View style={[Layout.row, Layout.gap5, Layout.alignItemsCenter]}>
              <Images.icons.visa />
              <Images.icons.mastercard />
            </View>
          }
          onPress={() => {
            navigation.navigate('PaymentCreditCard', {
              orderId: order.id,
              amount: order.amount || 0,
            });
          }}
        />
        <Button
          title={t('paymentIndex.qrPayment')}
          variant={ButtonVariant.outlined}
          colors={ButtonColor.secondary}
          align={ButtonAlign.between}
          endIcon={<Images.icons.thaiqr />}
          onPress={() => {
            navigation.navigate('PaymentQrPromtpay', {
              orderId: order.id,
              amount: order.amount || 0,
            });
          }}
        />
        {/* <Images.icons.cartEmpty /> */}
        <View style={[styles.bottom, Layout.gap10]}>{/*  */}</View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  dividerTop: {
    borderTopWidth: 1,
    borderTopColor: '#D0D5DD',
    paddingVertical: 19,
  },
  customMargin: {
    marginTop: 40,
  },
  totalBox: {
    paddingHorizontal: 8,
  },
  totalAmountBox: {
    marginTop: 50,
    padding: 8,
    backgroundColor: '#E6EEFF',
    borderRadius: 5,
  },
});

export default PaymentIndex;
