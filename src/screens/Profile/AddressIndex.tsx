import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AddressCard, AddressEmpty, AppBar, Button } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';
import { Address } from '@/model/address';
import { ButtonSize, RoleType } from '@/model/options';

type Props = NativeStackScreenProps<
  ProductParamsList & ApplicationStackParamList,
  'AddressIndex'
>;

// @refresh reset
const AddressIndex = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Fonts, Layout, Images } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [address, setAddress] = useState<Address[]>([
    {
      id: 1,
      name: t('addressIndex.name'),
      address: t('addressIndex.address'),
      phoneNumber: '0987654321',
      isDefault: true,
    },
    {
      id: 2,
      name: t('addressIndex.name'),
      address: t('addressIndex.address'),
      phoneNumber: '0987654321',
      isDefault: false,
    },
  ]);

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // child elements

  return (
    <SafeAreaView style={[Layout.bg, Layout.bgWhite, Layout.fill]}>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.fill,
        ]}
      >
        <View style={[Layout.main, Layout.gap20, styles.header]}>
          <AppBar
            onPress={() => {
              navigation.goBack();
            }}
            title={t('addressIndex.title')}
          />
        </View>
        <View
          style={[
            Layout.fill,
            Layout.col,
            address.length === 0 && Layout.justifyContentCenter,
          ]}
        >
          <View
            style={[
              Layout.gap20,
              Layout.main,
              Layout.bgWhite,
              address.length === 0 && Layout.center,
            ]}
          >
            {address.map((item, index) => (
              <AddressCard key={index} {...item} />
            ))}

            {address.length === 0 && <AddressEmpty />}
          </View>
        </View>

        <View style={[Layout.main, Layout.justifyContentEnd]}>
          <Button
            title={t('addressIndex.titleButton')}
            onPress={() => {
              navigation.navigate('AddressCreated', { type: RoleType.COMPANY });
            }}
            size={ButtonSize.tiny}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { height: 46 },
  header: { borderBottomWidth: 1, borderColor: '#F2F4F7' },
  history: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // gap: 10,
  },
});

export default AddressIndex;
