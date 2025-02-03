import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

interface Props {}
// แสดง Warning ในหน้า Checkout
const CheckoutWarning: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

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
        {t('checkoutWarning.check')}
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
