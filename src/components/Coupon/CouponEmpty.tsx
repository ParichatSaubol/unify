import React, { FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {}

const CouponEmpty: FunctionComponent<Props> = ({}) => {
  const { Layout, Images, Fonts } = useTheme();

  return (
    <View style={[Layout.center, Layout.gap10]}>
      <Image source={Images.coupon.empty} />
      <Text style={[Fonts.text21]}>ยังไม่มีโค้ดส่วนในขณะนี้</Text>
    </View>
  );
};

CouponEmpty.defaultProps = {};

export default CouponEmpty;
