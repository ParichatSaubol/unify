import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import Checkbox from '../Checkbox/Checkbox';
import { AddressCart } from '@/model/address';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface Props {
  address?: number;
  setAddress: (item: number) => void;
}

// แสดงที่อยู่สำหรับจัดส่ง
const CartAddress: FunctionComponent<Props> = ({ address, setAddress }) => {
  const { Layout, Fonts } = useTheme();
  const { t } = useTranslation('common');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addressList, setAddressList] = React.useState<AddressCart[]>([
    {
      id: 1,
      name: t('cartAddress.name'),
      phoneNumber: '081-567-8912',
      address: t('cartAddress.address'),
    },
    {
      id: 2,
      name: t('cartAddress.name'),
      phoneNumber: '081-567-8912',
      address: t('cartAddress.address'),
    },
    {
      id: 3,
      name: t('cartAddress.name'),
      phoneNumber: '081-567-8912',
      address: t('cartAddress.address'),
    },
  ]);
  const [addressSelected, setAddressSelected] = useState<number | undefined>(
    address,
  );

  return (
    <View style={[styles.header]}>
      <View style={[Layout.main]}>
        <Text style={[Fonts.text24Med]}>{t('cartAddress.yourAddress')}</Text>
      </View>
      {/* Detail Service */}
      {addressList.map((item, index) => (
        <TouchableOpacity
          style={[]}
          key={`address-${index}`}
          onPress={() => {
            setAddressSelected(item.id);
          }}
        >
          <View style={[Layout.main, Layout.row, Layout.gap10]}>
            <Checkbox
              isEnabled={addressSelected === item.id}
              setIsEnabled={() => {
                setAddressSelected(item.id);
              }}
            />
            <View style={[Layout.fill]}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={[Fonts.text18Bold, Fonts.textBlack]}>
                  {t('cartAddress.name')}
                </Text>
                <Text style={[Fonts.text18Bold, Fonts.textBlack]}>
                  081-567-8912
                </Text>
              </View>
              <Text style={[Fonts.text18Bold]}>
                {t('cartAddress.address')},
              </Text>
            </View>
          </View>
          {index !== addressList.length - 1 && <View style={styles.address} />}
        </TouchableOpacity>
      ))}
      <View style={[Layout.main]}>
        <Button
          title={t('cartAddress.selectAddress')}
          onPress={() => {
            setAddress(addressSelected || address || 0);
          }}
        />
      </View>
    </View>
  );
};

// ค่าเริ่มต้นของ Props
CartAddress.defaultProps = {
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

export default CartAddress;
