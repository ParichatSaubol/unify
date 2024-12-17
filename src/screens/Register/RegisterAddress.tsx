import React, { useEffect } from 'react';
import { View, ScrollView, Keyboard, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, useYupValidationResolver } from '@/hooks';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import {
  AddressForm,
  AppBar,
  Button,
  Checkbox,
  DefaultLayout,
} from '@/components';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { TRegisterAddress } from '@/model/customer';
import * as yup from 'yup';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RoleType } from '@/model/options';

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
  // isDefault: yup.bool().when('type', {
  //   is: RoleType.PERSONAL,
  //   then: schema => schema.required(messageRequired),
  // }),
  // isInvoice: yup.bool().when('type', {
  //   is: RoleType.PERSONAL,
  //   then: schema => schema.required(messageRequired),
  // }),
  // isNews: yup.bool().when('type', {
  //   is: RoleType.PERSONAL,
  //   then: schema => schema.required(messageRequired),
  // }),
});

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'RegisterAddress'
>;

// @refresh reset
const RegisterAddress = ({ navigation, route }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Gutters, Fonts } = useTheme();
  const method = useForm<TRegisterAddress>({
    defaultValues: {
      type: route?.params?.type,
    },
    resolver: useYupValidationResolver(AddressSchema),
  });
  const { handleSubmit, control } = method;
  const { dismissAll } = useBottomSheetModal();

  // function & handle

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: TRegisterAddress) => {
    navigation.navigate('RegisterInvoice', { type: route.params.type });
  };

  // init
  const init = async (): Promise<void> => {};

  // callback
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        title="ที่อยู่การจัดส่งสินค้า"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Gutters.tinyPadding,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
        onTouchStart={() => {
          dismissAll();
          Keyboard.dismiss();
        }}
      >
        <View style={[Layout.fill, Layout.gap20]}>
          <FormProvider {...method}>
            <AddressForm />
          </FormProvider>
        </View>

        <View
          style={[
            Layout.main,
            Layout.fill,
            Layout.gap20,
            Layout.justifyContentEnd,
          ]}
        >
          <View style={[Layout.row, Layout.gap10]}>
            <Controller
              name="isNews"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox setIsEnabled={onChange} isEnabled={value || false} />
              )}
            />

            <Text style={[Fonts.text18, Layout.fill]}>
              ฉันต้องการรับสิทธิพิเศษและโปรโมชั่น รวมถึงข่าวสารจากกลุ่ม บริษัท
              ทีเคเค คอร์ปอเรชั่น จำกัด ตามที่ระบุไว้ใน นโยบายความเป็นส่วนตัว
            </Text>
          </View>

          <Button title="ถัดไป" fullWidth onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterAddress;
