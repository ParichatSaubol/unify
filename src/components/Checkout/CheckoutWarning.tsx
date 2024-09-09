import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {}
// แสดง Warning ในหน้า Checkout
const CheckoutWarning: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View
      style={[
        Layout.row,
        styles.container,
        Layout.alignItemsCenter,
        Layout.gap10,
      ]}
    >
      <Images.icons.warning1 color="#FC1B13" />
      <Text style={[Fonts.text16, Fonts.textRed]}>
        กรุณาตรวจสอบคำสั่งซื้อและที่อยู่ให้ครบถ้วนและถูกต้องก่อนชำระเงิน
      </Text>
    </View>
  );
};

CheckoutWarning.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'rgba(252, 27, 19, 0.15)',
    borderRadius: 8,
  },
});

export default CheckoutWarning;
