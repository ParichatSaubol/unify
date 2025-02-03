import React, { FunctionComponent, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

interface Props {
  // eslint-disable-next-line react/require-default-props
  name?: string;
  // eslint-disable-next-line react/require-default-props
  phoneNumber?: string;
  // eslint-disable-next-line react/require-default-props
  address?: string;
  // eslint-disable-next-line react/require-default-props
  isEdit?: boolean;
  // eslint-disable-next-line react/require-default-props
  onPress?: () => void;
}

// แสดงที่อยู่สำหรับจัดส่ง
const AddressOrder: FunctionComponent<Props> = ({
  name,
  phoneNumber,
  address,
  isEdit,
  onPress,
}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('address');

  // ใช้ useState เพื่อเก็บค่าดีฟอลต์
  const [defaultName, setDefaultName] = useState<string | undefined>(name);
  const [defaultAddress, setDefaultAddress] = useState<string | undefined>(
    address,
  );

  useEffect(() => {
    // ตั้งค่าดีฟอลต์จาก t() ถ้าไม่ได้รับ props name หรือ address
    if (!name) {
      setDefaultName(t('addressOrder.defaultName'));
    }
    if (!address) {
      setDefaultAddress(t('addressOrder.defaultAddress'));
    }
  }, [t, name, address]); // ใช้ t, name, address เป็น dependency

  return (
    <View style={[Layout.col, styles.container]}>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
          <Images.icons.location color="#0057FF" />
          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            {t('addressOrder.deliveryAddress')}
          </Text>
        </View>
        {isEdit && (
          <TouchableOpacity
            onPress={() => {
              onPress && onPress();
            }}
          >
            <Text style={[Fonts.text16, Fonts.textPrimary]}>
              {t('addressOrder.changeAddress')}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[Layout.row, Layout.justifyContentBetween]}>
        <Text style={[Fonts.text18Bold]}>{defaultName}</Text>
        <Text style={Fonts.text18}>{phoneNumber}</Text>
      </View>
      <View>
        <Text style={Fonts.text18}>{defaultAddress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#E6EEFF',
    borderColor: '#0057FF',
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
  },
});

export default AddressOrder;
