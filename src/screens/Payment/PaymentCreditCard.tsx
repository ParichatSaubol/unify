import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, DefaultLayout, Input } from '@/components';
import { IOrder } from '@/model/order';
import { AppColor, PaymentStatus } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'PaymentCreditCard'>;

// @refresh reset
const PaymentCreditCard = ({ navigation, route }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { orderId } = route.params;

  const { Layout, Fonts, Images } = useTheme();
  // const { currentCart } = useCart();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardExpiration, setCardExpiration] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardCvv, setCardCvv] = useState<string>('');

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
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('paymentCreditCard.title')}
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
        <View style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}>
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            {t('paymentCreditCard.supportedCards')}
          </Text>
          <View style={[Layout.row, Layout.gap5, Layout.alignItemsCenter]}>
            <Images.icons.visa />
            <Images.icons.mastercard />
          </View>
        </View>
        <View>
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            {t('paymentCreditCard.cardNumber')}
            <Text style={[Fonts.textRed]}>*</Text>
          </Text>
          <Input
            placeholder={t('paymentCreditCard.cardNumber')}
            value={cardName}
            onChange={val => {
              setCardName(val);
            }}
          />
        </View>
        <View>
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            {t('paymentCreditCard.cardName')}
            <Text style={[Fonts.textRed]}>*</Text>
          </Text>
          <Input
            placeholder={t('paymentCreditCard.cardName')}
            value={cardNumber}
            onChange={val => {
              setCardName(val);
            }}
          />
        </View>
        <View style={[Layout.row, Layout.gap20]}>
          <View style={[Layout.fill]}>
            <Text style={[Fonts.text21, Fonts.textBlack]}>
              {t('paymentCreditCard.expiration')}
              <Text style={[Fonts.textRed]}>*</Text>
            </Text>
            <Input
              placeholder={t('paymentCreditCard.expiration')}
              value={cardExpiration}
              onChange={val => {
                setCardName(val);
              }}
            />
          </View>
          <View style={[Layout.fill]}>
            <Text style={[Fonts.text21, Fonts.textBlack]}>
              CVV<Text style={[Fonts.textRed]}>*</Text>
            </Text>
            <Input
              placeholder="CVV"
              value={cardCvv}
              onChange={val => {
                setCardName(val);
              }}
            />
          </View>
        </View>
        <View style={styles.warningBox}>
          <Images.icons.warning1 color="#0057FF" />
          <Text style={[Fonts.text16, Fonts.textPrimary]}>
            {t('paymentCreditCard.warning')}
          </Text>
        </View>
        <Button
          title={t('paymentCreditCard.confirm')}
          onPress={() => {
            navigation.navigate('PaymentResult', {
              orderId: orderId,
              refId: 'XX',
              status: PaymentStatus.SUCCESS,
            });
          }}
        />
        {/* <Images.icons.cartEmpty /> */}
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  warningBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#E6EEFF',
    padding: 6,
  },
});

export default PaymentCreditCard;
