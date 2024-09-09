import React, { FunctionComponent, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import { IOrder } from '@/model/order';
import Button from '../Button/Button';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  OrderStatus,
  RoleType,
} from '@/model/options';
import AddressOrder from '../Address/AddressOrder';
import CheckoutSummary from '../Checkout/CheckoutSummary';
import { ICoupon } from '@/model/coupon';
import { IPoint } from '@/model/point';
import { useDispatch, useSelector } from '@/store';
import { setRole } from '@/store/auth';
import OrderWarning from './OrderWarning';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';
import OrderWithEstimate from './OrderWithEstimate';

interface Props {
  order?: IOrder;
}

//หน้าแสดงรายการสั่งซื้อ
const OrderCard: FunctionComponent<Props> = ({ order }) => {
  const { Layout, Fonts, Images } = useTheme();
  const { role } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<
      NavigationProp<ProductParamsList & ApplicationStackParamList>
    >();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(2);

  const [loadMore, setLoadMore] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coupon, setCoupon] = React.useState<ICoupon>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [point, setPoint] = React.useState<IPoint>({});
  const [paymentAlert, setPaymentAlert] = React.useState(false);

  //ใช้เพื่อเปิดปิดการแสดงผลข้อมูล
  const handleLoadMore = (val: boolean) => {
    if (val) {
      setEnd(order?.items?.length || 0);
      setLoadMore(true);
    } else {
      setEnd(2);
      setLoadMore(false);
    }
  };

  const handlePayment = () => {
    setPaymentAlert(true);
  };

  const handleCancelOrder = () => {
    navigation.navigate('OrderCancel', { orderId: order?.id });
  };

  const handleCancelOrderPaymentCompleted = () => {
    navigation.navigate('OrderCancelPayment', { orderId: order?.id });
  };

  const handleDownloadQuotation = () => {
    navigation.navigate('QuotationInformation', { orderId: order?.id });
  };

  const handleInvoice = () => {
    navigation.navigate('InvoiceInformation', { orderId: order?.id });
  };

  useEffect(() => {
    dispatch(setRole({ role: RoleType.COMPANY }));
  }, []);

  return (
    <View style={[Layout.main, Layout.col, Layout.gap10, Layout.bgWhite]}>
      <View style={[styles.card, Layout.justifyContentBetween]}>
        <Text style={[Fonts.text21, Fonts.textBlack]}>
          เลขที่ออเดอร์ :{order?.id}
        </Text>
        <Text style={[Fonts.text21]}>({order?.itemsCount} รายการ)</Text>
      </View>
      {order?.status === OrderStatus.BeReceived && <OrderWarning />}

      <AddressOrder isEdit={false} />
      {order?.items?.slice(start, end).map((item, index) => (
        <View key={index} style={[styles.card]}>
          <Image source={item.image || Images.mock.noImage} />
          <View style={[Layout.col, Layout.fill]}>
            <Text style={[Fonts.text21, Fonts.textBlack]}>{item.title}</Text>
            <Text style={[Fonts.text16]}>ตัวเลือกสินค้า : {item.option}</Text>
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
                  <Text style={[Fonts.text16, Fonts.textGrey]}>/ ชิ้น</Text>
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
            coupon={undefined}
            point={undefined}
            isMinShow={!loadMore}
          />
        </View>
      )}

      {(order?.items?.length || 0) > 2 && end !== order?.items?.length ? (
        <View>
          <Button
            title="ดูเพิ่มเติม"
            colors={ButtonColor.solid}
            size={ButtonSize.small}
            onPress={() => {
              handleLoadMore(true);
            }}
          />
        </View>
      ) : (
        <View>
          <Button
            title="ย่อ"
            colors={ButtonColor.solid}
            size={ButtonSize.small}
            onPress={() => {
              handleLoadMore(false);
            }}
          />
        </View>
      )}
      {
        // สถานะรอการรับสินค้า
        order?.status === OrderStatus.BeReceived && (
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Button
                title="ยกเลิกสินค้า"
                variant={ButtonVariant.outlined}
                size={ButtonSize.small}
                fullWidth
                onPress={() => {
                  handleCancelOrderPaymentCompleted();
                }}
              />
            </View>
            <View style={[Layout.fill]}>
              <Button
                title="ดูสถานะการจัดส่ง"
                size={ButtonSize.small}
                fullWidth
                onPress={() => {
                  navigation.navigate('OrderDeliveryStatus', {
                    orderId: order?.id,
                  });
                }}
              />
            </View>
          </View>
        )
      }
      {
        // สถานะรอการจัดส่ง
        order?.status === OrderStatus.WaitingForDelivery && (
          <View style={[Layout.col, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Button
                title="ดาวน์โหลดใบกำกับภาษี"
                size={ButtonSize.small}
                startIcon={<Images.icons.download color="#FFF" />}
                onPress={() => {
                  handleInvoice();
                }}
              />
            </View>
            <View style={[Layout.fill]}>
              <Button
                title="ยกเลิกสินค้า"
                variant={ButtonVariant.outlined}
                size={ButtonSize.small}
                onPress={() => {
                  handleCancelOrderPaymentCompleted();
                }}
              />
            </View>
          </View>
        )
      }
      {
        // สถานะรอชำระเงิน
        order?.status === OrderStatus.WaitingForPayment && (
          <>
            {role === RoleType.COMPANY ? (
              <View style={[Layout.col, Layout.gap10]}>
                <View style={[Layout.row, Layout.gap10]}>
                  <View style={[Layout.fill]}>
                    <Button
                      title="ยกเลิกสินค้า"
                      variant={ButtonVariant.outlined}
                      size={ButtonSize.small}
                      onPress={() => {
                        handleCancelOrder();
                      }}
                    />
                  </View>
                  <View style={[Layout.fill]}>
                    <Button
                      title="ชำระเงิน"
                      size={ButtonSize.small}
                      onPress={() => {
                        handlePayment();
                      }}
                    />
                  </View>
                </View>
                <View style={[Layout.fill]}>
                  <Button
                    title="ดาวน์โหลดใบเสนอราคา"
                    size={ButtonSize.small}
                    startIcon={<Images.icons.download color="#FFF" />}
                    onPress={() => {
                      handleDownloadQuotation();
                    }}
                  />
                </View>
              </View>
            ) : (
              <View style={[Layout.row, Layout.gap10]}>
                <View style={[Layout.fill]}>
                  <Button
                    title="ยกเลิกสินค้า"
                    variant={ButtonVariant.outlined}
                    size={ButtonSize.small}
                    onPress={() => {
                      handleCancelOrder();
                    }}
                  />
                </View>
                <View style={[Layout.fill]}>
                  <Button title="ชำระเงิน" size={ButtonSize.small} />
                </View>
              </View>
            )}
          </>
        )
      }
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
  container: {},
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
