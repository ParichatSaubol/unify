import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import { IAddressCart } from '@/model/profile';

interface Props {
  address?: IAddressCart;
  setAddress: (item: IAddressCart) => void;
  addressList?: IAddressCart[];
}

// แสดงที่อยู่สำหรับจัดส่ง
const CartAddressList: FunctionComponent<Props> = ({
  address,
  setAddress,
  addressList = [],
}) => {
  const { Layout, Fonts } = useTheme();
  const [addressSelected, setAddressSelected] = useState<IAddressCart>();

  const formatPhoneNumber = useCallback((phoneNumber: string = '') => {
    return `${phoneNumber?.substring(0, 3) || ''}-${
      phoneNumber?.substring(3, 6) || ''
    }-${phoneNumber?.substring(6) || ''}`;
  }, []);

  useEffect(() => {
    if (address) {
      setAddressSelected(address);
    }
  }, [address]);

  return (
    <View style={[styles.header]}>
      <View style={[Layout.main]}>
        <Text style={[Fonts.text24Med]}>ที่อยู่ของคุณ</Text>
      </View>
      {/* Detail Service */}
      {addressList.map((item, index) => (
        <TouchableOpacity
          style={[]}
          key={`address-${index}`}
          onPress={() => {
            setAddressSelected(item);
          }}
        >
          <View style={[Layout.main, Layout.row, Layout.gap10]}>
            <Checkbox
              isEnabled={addressSelected?.ads_id === item.ads_id}
              setIsEnabled={() => {
                setAddressSelected(item);
              }}
            />
            <View style={[Layout.fill]}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={[Fonts.text18Bold, Fonts.textBlack]}>
                  {item?.ads_first_name} {item?.ads_last_name}
                </Text>
                <Text style={[Fonts.text18Bold, Fonts.textBlack]}>
                  {/* 081-567-8912 */}
                  {formatPhoneNumber(item?.ads_phone)}
                </Text>
              </View>
              <Text style={[Fonts.text18Bold]}>{item?.dtail}</Text>
            </View>
          </View>
          {index !== addressList.length - 1 && <View style={styles.address} />}
        </TouchableOpacity>
      ))}
      <View style={[Layout.main]}>
        <Button
          title="เลือกที่อยู่"
          onPress={() => {
            const currentAddress = addressSelected || address;
            if (currentAddress) {
              setAddress(currentAddress);
            }
          }}
        />
      </View>
    </View>
  );
};

// ค่าเริ่มต้นของ Props
CartAddressList.defaultProps = {
  address: undefined,
};

// รูปแบบ Style
const styles = StyleSheet.create({
  container: {},
  root: {
    borderTopColor: '#EAECF0',
    borderTopWidth: 2,
    backgroundColor: '#fff',
  },
  address: {
    width: '100%',
    height: 1,
    backgroundColor: '#F2F4F7',
  },
  header: {
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderColor: '#EAECF0',
    borderWidth: 2,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    gap: 10,
  },
  product: {
    backgroundColor: '#E6EEFF',
    padding: 16,
    marginTop: 20,
  },
});

export default CartAddressList;
