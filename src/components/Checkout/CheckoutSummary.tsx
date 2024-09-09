import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import { IOrder } from '@/model/order';
import { ICoupon } from '@/model/coupon';
import { IPoint } from '@/model/point';

interface Props {
  order: IOrder;
  coupon?: ICoupon;
  point?: IPoint;
  isMinShow?: boolean;
}

// แสดงผลสรุปรายการสั่งซื้อ
const CheckoutSummary: FunctionComponent<Props> = ({
  order,
  coupon,
  point,
  isMinShow,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[styles.bottom, Layout.gap10]}>
      {(order.itemsCount || 0) > 0 && (
        <View style={[Layout.col, Layout.gap10]}>
          {!isMinShow && (
            <>
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.totalBox]}
              >
                <Text style={[Fonts.text21]}>จำนวนรายการทั้งหมด</Text>
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                  {order.itemsCount} รายการ
                </Text>
              </View>
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.totalBox]}
              >
                <Text style={[Fonts.text18]}>ยอดรวมสินค้า</Text>
                <Text style={[Fonts.text18]}>
                  {THB.format(order.netAmount || 0).replace(
                    /\b(\w*THB\w*)\b/,
                    '฿ ',
                  )}
                </Text>
              </View>
              {/* ส่วนลด */}
              {coupon && (
                <View
                  style={[
                    Layout.row,
                    Layout.scrollSpaceBetween,
                    styles.totalBox,
                  ]}
                >
                  <Text style={[Fonts.text18]}>ลดจากคูปอง</Text>
                  <Text style={[Fonts.text18]}>
                    {THB.format(coupon.discount || 0).replace(
                      /\b(\w*THB\w*)\b/,
                      '-฿ ',
                    )}
                  </Text>
                </View>
              )}
              {point && (
                <View
                  style={[
                    Layout.row,
                    Layout.scrollSpaceBetween,
                    styles.totalBox,
                  ]}
                >
                  <Text style={[Fonts.text18]}>ลดจากคูปอง</Text>
                  <Text style={[Fonts.text18]}>
                    {THB.format(point.discount || 0).replace(
                      /\b(\w*THB\w*)\b/,
                      '-฿ ',
                    )}
                  </Text>
                </View>
              )}
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.totalBox]}
              >
                <Text style={[Fonts.text18]}>ภาษีมูลค่าเพิ่ม Vat 7%</Text>
                <Text style={[Fonts.text18]}>
                  {THB.format(order.vat || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
                </Text>
              </View>
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.totalBox]}
              >
                <Text style={[Fonts.text18]}>ค่าจัดส่ง</Text>
                <Text style={[Fonts.text18]}>
                  {THB.format(order.deliveryFee || 0).replace(
                    /\b(\w*THB\w*)\b/,
                    '฿ ',
                  )}
                </Text>
              </View>
              <View
                style={[Layout.row, Layout.scrollSpaceBetween, styles.totalBox]}
              >
                <Images.point.unipoint />
                <Text style={[Fonts.text18]}>
                  คะแนนที่ได้รับ {order.rewardPoint} คะแนน
                </Text>
              </View>
            </>
          )}

          <View
            style={[
              Layout.row,
              Layout.scrollSpaceBetween,
              styles.totalAmountBox,
            ]}
          >
            <Text style={[Fonts.text18]}>ราคารวม</Text>
            <Text style={[Fonts.text18]}>
              {THB.format(order.amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

CheckoutSummary.defaultProps = {
  isMinShow: false,
  coupon: undefined,
  point: undefined,
};

const styles = StyleSheet.create({
  container: {},
  totalBox: {
    paddingHorizontal: 8,
  },
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  totalAmountBox: {
    padding: 8,
    backgroundColor: '#E6EEFF',
    borderRadius: 5,
  },
});

export default CheckoutSummary;
