import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next'; // ใช้ i18n

interface Props {}

// แสดงหน้าว่างของรถเข็น
const CartEmpty: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common'); // ระบุ namespace เป็น "common"

  return (
    <View style={[styles.container, Layout.gap20, Layout.center]}>
      <Image
        source={Images.cart.empty}
        resizeMode="contain"
        style={styles.imageEmpty}
      />
      <Text style={[Fonts.text34Med, Fonts.textBlack, Fonts.textCenter]}>
        <Text>{t('cartEmpty.emptyMessage')}</Text> {/* ใช้คำแปลจาก i18n */}
      </Text>
      <Text style={[Fonts.text21, Fonts.textCenter]}>
        <Text>{t('cartEmpty.emptyDescription')}</Text> {/* ใช้คำแปลจาก i18n */}
      </Text>
    </View>
  );
};

// ค่าเริ่มต้นของ Props
CartEmpty.defaultProps = {};

// style สำหรับ component
const styles = StyleSheet.create({
  container: {},
  imageEmpty: {
    width: 200,
    height: 134,
  },
});

export default CartEmpty;
