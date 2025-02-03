import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

interface Props {}

const OrderEmpty: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[Layout.main, styles.customBox]}>
      <Image source={Images.order.empty} />
      <Text style={[Fonts.text21]}>
        {t('orderEmpty.noOrders')}{' '}
        <Text style={[Fonts.textPrimary]}>{t('orderEmpty.productTitle')}</Text>
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
