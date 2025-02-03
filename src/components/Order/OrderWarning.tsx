import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

interface Props {}
// แสดง Warning ในหน้า Checkout
const OrderWarning: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View
      style={[
        Layout.row,
        styles.container,
        Layout.alignItemsCenter,
        Layout.gap10,
        Layout.justifyContentBetween,
      ]}
    >
      <View style={[Layout.row, Layout.alignItemsCenter, Layout.gap10]}>
        <Images.icons.checkCircleOutline
          color="#00D504"
          height="18"
          width="18"
        />
        <Text style={[Fonts.text16, Fonts.textSuccess]}>
          {t('orderWarning.transportation')}
        </Text>
      </View>
      <TouchableOpacity
        style={[Layout.row, Layout.alignItemsCenter, Layout.gap5]}
      >
        <Text style={[Fonts.text16]}>{t('orderWarning.viewStatus')}</Text>
        <Images.icons.arrowRight color="#667085" height="18" width="18" />
      </TouchableOpacity>
    </View>
  );
};

OrderWarning.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'rgba(0, 213, 4, 0.10)',
    borderRadius: 8,
  },
});

export default OrderWarning;
