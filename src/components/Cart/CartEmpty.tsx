import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {}

// แสดงหน้าว่างของรถเข็น
const CartEmpty: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[styles.container, Layout.gap20, Layout.center]}>
      <Image
        source={Images.cart.empty}
        resizeMode="contain"
        style={styles.imageEmpty}
      />
      <Text style={[Fonts.text34Med, Fonts.textBlack, Fonts.textCenter]}>
        คุณยังไม่มีสินค้าในรถเข็น
      </Text>
      <Text style={[Fonts.text21, Fonts.textCenter]}>
        คุณยังไม่มีสินค้าในรถเข็น กรุณาเพิ่มสินค้า{'\n'}ที่คุณสนใจลงในรถเข็น
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
