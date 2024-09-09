import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button } from '@/components';
import { IOrder } from '@/model/order';
import {
  ButtonAlign,
  ButtonColor,
  ButtonVariant,
  AppColor,
} from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'PaymentQrPromtpay'>;

// @refresh reset
const PaymentQrPromtpay = ({ navigation, route }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { orderId } = route.params;

  const { Layout, Fonts, Images } = useTheme();
  // const { currentCart } = useCart();

  // state

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={[Layout.main, Layout.gap20, Layout.bgWhite]}>
        <AppBar
          color={AppColor.white}
          title="การชำระเงิน"
          onPress={() => {
            navigation.goBack();
          }}
        />
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
        <Text style={[Fonts.text21, Fonts.textBlack]}>
          เลือกวิธีการชำระเงิน
        </Text>
        <Button
          title="บัตรเครดิตและบัตรเดบิต"
          variant={ButtonVariant.outlined}
          colors={ButtonColor.secondary}
          align={ButtonAlign.between}
          endIcon={
            <View style={[Layout.row, Layout.gap5, Layout.alignItemsCenter]}>
              <Images.icons.visa />
              <Images.icons.mastercard />
            </View>
          }
        />
        <Button
          title="ชำระผ่าน QR Code"
          variant={ButtonVariant.outlined}
          colors={ButtonColor.secondary}
          align={ButtonAlign.between}
          endIcon={<Images.icons.thaiqr />}
        />
        {/* <Images.icons.cartEmpty /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PaymentQrPromtpay;
