import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
}

// หน้าแสดงที่อยู่ว่าง
const AddressEmpty: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('address');
  return (
    <View style={[Layout.col, styles.container, Layout.center]}>
      <Image source={Images.address.empty} />
      <View style={styles.mt40}>
        <Text style={Fonts.text32Med}>{t('addressEmpty.deliveryAddress')}</Text>
      </View>
      <View>
        <Text style={Fonts.text24Med}>{t('addressEmpty.addAddress')}</Text>
      </View>
    </View>
  );
};

AddressEmpty.defaultProps = {};

const styles = StyleSheet.create({
  container: {},
  mt40: {
    marginTop: 40,
  },
});

export default AddressEmpty;
