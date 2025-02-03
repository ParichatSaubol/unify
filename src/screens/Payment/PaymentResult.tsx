import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { Button } from '@/components';
import { IOrder } from '@/model/order';
import { ButtonColor, OrderTabs } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'PaymentResult'>;

// @refresh reset
const PaymentResult = ({ navigation, route }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { orderId } = route.params;

  const { Layout, Fonts, Images } = useTheme();
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
        <Text style={[Fonts.text24Med, Fonts.textBlack, Fonts.textCenter]}>
          {t('paymentResult.orderStatus')}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
          styles.root,
        ]}
      >
        <View style={[Layout.gap20]}>
          <View style={[Layout.row, Layout.gap10, styles.container]}>
            <Images.icons.checkCircleOutline
              color="#0057FF"
              width="70"
              height="70"
            />
            <View>
              <Text style={[Fonts.text32Light, Fonts.textPrimary]}>
                {t('paymentResult.orderSuccess')}
              </Text>
              <Text style={[Fonts.text24Med]}>
                {t('paymentResult.orderNumber')}
              </Text>
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Text style={[Fonts.text24Med, Fonts.textPrimary]}>
                  UNI2023123094877
                </Text>
                <TouchableOpacity>
                  <Images.icons.copy color="#0057FF" width="16" height="16" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[Layout.col, Layout.gap10, styles.container]}>
            <Text style={[Fonts.text24Med, Fonts.textPrimary]}>
              {t('paymentResult.paymentSuccess')}
            </Text>
            <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
              <Text style={[Fonts.text18]}>
                {t('paymentResult.orderDelivery')}
              </Text>
            </View>
          </View>
        </View>
        <Button
          title={t('paymentResult.viewOrderStatus')}
          colors={ButtonColor.primary}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'OrderIndex',
                  params: { tabs: OrderTabs.WaitingForPayment },
                },
              ],
            });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 35,
    paddingHorizontal: 27,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },
});

export default PaymentResult;
