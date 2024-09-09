import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  title?: string;
}

// หน้าแสดงที่อยู่ว่าง
const AddressEmpty: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[Layout.col, styles.container, Layout.center]}>
      <Image source={Images.address.empty} />
      <View style={styles.mt40}>
        <Text style={Fonts.text32Med}>ท่านยังไม่มีที่อยู่การจัดส่ง</Text>
      </View>
      <View>
        <Text style={Fonts.text24Med}>เพิ่มข้อมูลที่อยู่ในการจัดส่งสินค้า</Text>
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
