import React, { FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

interface Props {}

const CouponEmpty: FunctionComponent<Props> = ({}) => {
  const { Layout, Images, Fonts } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[Layout.center, Layout.gap10]}>
      <Image source={Images.coupon.empty} />
      <Text style={[Fonts.text21]}>{t('couponEmpty.title')}</Text>
    </View>
  );
};

CouponEmpty.defaultProps = {};

export default CouponEmpty;
