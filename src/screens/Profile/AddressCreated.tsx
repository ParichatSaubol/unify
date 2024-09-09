import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, Button } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { Address } from '@/model/address';
import * as yup from 'yup';
import { TRegisterAddress } from '@/model/customer';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from '@/components';
import { ButtonSize, RoleType } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'AddressCreated'
>;

const messageRequired = 'required';

const AddressSchema: yup.ObjectSchema<TRegisterAddress> = yup.object().shape({
  type: yup.mixed<RoleType>(),
  address: yup.string().required(messageRequired),
  building: yup.string().required(messageRequired),
  village: yup.string().required(messageRequired),
  road: yup.string().required(messageRequired),
  postalCode: yup.string().required(messageRequired),
  province: yup.string().required(messageRequired),
  district: yup.string().required(messageRequired),
  subdistrict: yup.string().required(messageRequired),
  long: yup.number(),
  lat: yup.number(),
  isDefault: yup.bool().when('type', {
    is: 'personal',
    then: schema => schema.required(messageRequired),
  }),
  isInvoice: yup.bool().when('type', {
    is: 'personal',
    then: schema => schema.required(messageRequired),
  }),
  isNews: yup.bool().when('type', {
    is: 'personal',
    then: schema => schema.required(messageRequired),
  }),
});

// @refresh reset
const AddressCreated = ({ navigation, route }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Fonts, Layout, Images } = useTheme();
  const methods = useForm<TRegisterAddress>({
    defaultValues: {
      type: route.params?.type,
    },
    resolver: useYupValidationResolver<TRegisterAddress>(AddressSchema),
  });

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [address, setAddress] = useState<Address[]>([
    {
      id: 1,
      name: 'บ้าน',
      address:
        'บ้านเลขที่ 123 หมู่ 1 ตำบล ท่าข้าม อำเภอ ท่าข้าม จังหวัด อุตรดิตถ์ 53110',
      phoneNumber: '0987654321',
      isDefault: true,
    },
    {
      id: 2,
      name: 'บ้าน',
      address:
        'บ้านเลขที่ 123 หมู่ 1 ตำบล ท่าข้าม อำเภอ ท่าข้าม จังหวัด อุตรดิตถ์ 53110',
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
      <View style={[Layout.main, Layout.gap20, styles.header]}>
        <AppBar
          onPress={() => {
            navigation.goBack();
          }}
          title="ที่อยู่ในการจัดส่ง"
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.col,
          Layout.justifyContentBetween,
          // Layout.fill,
        ]}
      >
        <View style={[Layout.fill, Layout.col]}>
          <FormProvider {...methods}>
            <AddressForm />
          </FormProvider>
        </View>

        <View style={[Layout.main, Layout.justifyContentEnd]}>
          <Button
            title="บันทึก"
            onPress={() => {
              navigation.goBack();
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

export default AddressCreated;
