import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface Props {
  name?: string;
  phoneNumber?: string;
  address?: string;
  isEdit?: boolean;
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

  // const [address, setAddress] = useState<number>();
  return (
    <>
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
          <Text style={[Fonts.text18Bold]}>{name}</Text>
          <Text style={Fonts.text18}>{phoneNumber}</Text>
        </View>
        <View>
          <Text style={Fonts.text18}>{address}</Text>
        </View>
      </View>
    </>
  );
};

AddressOrder.defaultProps = {
  name: t('addressOrder.defaultName', { returnObjects: true }),
  phoneNumber: '081-567-8912',
  address: t('addressOrder.defaultAddress', { returnObjects: true }),
  isEdit: true,
  onPress: undefined,
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
