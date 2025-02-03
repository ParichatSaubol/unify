import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import { IOrder } from '@/model/order';
import CheckoutSummary from '../Checkout/CheckoutSummary';
import { ICoupon } from '@/model/coupon';
import { IPoint } from '@/model/point';
import OrderWithEstimate from './OrderWithEstimate';
import { useTranslation } from 'react-i18next';

interface Props {
  order?: IOrder;
}

//หน้าแสดงรายการสั่งซื้อ
const OrderCard: FunctionComponent<Props> = ({ order }) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coupon, setCoupon] = React.useState<ICoupon>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [point, setPoint] = React.useState<IPoint>({});
  const [paymentAlert, setPaymentAlert] = React.useState(false);

  return (
    <View style={[styles.container, Layout.col, Layout.gap10]}>
      <View style={[styles.card, Layout.justifyContentBetween]}>
        <Text style={[Fonts.text21, Fonts.textBlack]}>
          {t('orderDrtail.orderNumber')} {order?.id}
        </Text>
        <Text style={[Fonts.text21]}>
          ({order?.itemsCount} {t('orderDrtail.itemsCount')})
        </Text>
      </View>
      {order?.items?.map((item, index) => (
        <View key={index} style={[styles.card]}>
          <Image source={item.image || Images.mock.noImage} />
          <View style={[Layout.col, Layout.fill]}>
            <Text style={[Fonts.text21, Fonts.textBlack]}>{item.title}</Text>
            <Text style={[Fonts.text16]}>
              {t('orderDrtail.productOption')} {item.option}
            </Text>
            {item.amount && (
              <View style={[Layout.row, Layout.gap5]}>
                <Text
                  style={[
                    Fonts.text16Bold,
                    item.netAmount != null && Fonts.textRed,
                  ]}
                  numberOfLines={1}
                >
                  {THB.format(item.amount || 0).replace(
                    /\b(\w*THB\w*)\b/,
                    '฿ ',
                  )}
                  <Text style={[Fonts.text16, Fonts.textGrey]}>
                    {t('orderDrtail.pricePerPiece')}
                  </Text>
                </Text>
              </View>
            )}

            {item?.netAmount && (
              <View style={[Layout.row, Layout.gap5]}>
                <Text
                  style={[Fonts.text16, Fonts.textGrey, Fonts.lineThrough]}
                  numberOfLines={1}
                >
                  {THB.format(item.netAmount || 0).replace(
                    /\b(\w*THB\w*)\b/,
                    '฿ ',
                  )}
                </Text>
                {item.discountAmount && (
                  <View style={[styles.discount]}>
                    <Text style={[Fonts.text16, Fonts.textWhite]}>
                      {item.discountAmount || 0}%
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
          <View style={[Layout.center]}>
            <View style={styles.quantityBox}>
              <Text style={[Fonts.text21]}>{item.quantity}</Text>
            </View>
          </View>
        </View>
      ))}

      {order && (
        <View>
          <CheckoutSummary
            order={order}
            coupon={{}}
            point={{}}
            isMinShow={false}
          />
        </View>
      )}
      <OrderWithEstimate
        modalVisible={paymentAlert}
        setModalVisible={() => {
          setPaymentAlert(false);
        }}
      />
    </View>
  );
};

OrderCard.defaultProps = {
  order: undefined,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    gap: 10,
    elevation: 1,
  },
  quantityBox: {
    width: 72,
    paddingVertical: 8,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  totalAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    paddingVertical: 16,
    backgroundColor: '#E6EEFF',
  },
  discount: {
    backgroundColor: '#FC1B13',
    borderRadius: 2,
    paddingHorizontal: 4,
  },
});

export default OrderCard;
