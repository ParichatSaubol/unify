import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

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
              ที่อยู่สำหรับจัดส่ง
            </Text>
          </View>
          {isEdit && (
            <TouchableOpacity
              onPress={() => {
                onPress && onPress();
              }}
            >
              <Text style={[Fonts.text16, Fonts.textPrimary]}>
                เปลี่ยนที่อยู่
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
  name: 'สมคิด จิตชื่นบาน',
  phoneNumber: '081-567-8912',
  address: '9/8 บางกรวยไทรน้อย ซอย10 ต.บางกรวย อ.บางกรวย จังหวัดนนทบุรี 11130',
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
