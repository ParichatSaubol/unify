import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {}

const OrderEmpty: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[Layout.main, styles.customBox]}>
      <Image source={Images.order.empty} />
      <Text style={[Fonts.text21]}>
        ไม่มีคำสั่งซื้อ เลือกซื้อสินค้าต่อเลย{' '}
        <Text style={[Fonts.textPrimary]}>สินค้าทั้งหมด</Text>
      </Text>
    </View>
  );
};

OrderEmpty.defaultProps = {};

const styles = StyleSheet.create({
  customBox: {
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});

export default OrderEmpty;
