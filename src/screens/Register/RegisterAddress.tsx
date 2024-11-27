import React, { useEffect } from 'react';
import { View, ScrollView, Keyboard, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, useYupValidationResolver } from '@/hooks';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import {
  AddressFormWithSelection,
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
import { postRegister } from '@/services/restapi/authApi';

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
    is: RoleType.PERSONAL,
    then: schema => schema.required(messageRequired),
  }),
  isInvoice: yup.bool().when('type', {
    is: RoleType.PERSONAL,
    then: schema => schema.required(messageRequired),
  }),
  isNews: yup.bool().when('type', {
    is: RoleType.PERSONAL,
    then: schema => schema.required(messageRequired),
  }),
  name: yup.string().optional(),
  phoneNumber: yup.string().optional(),
  provinceId: yup.string().optional(),
  districtId: yup.string().optional(),
  subDistrictId: yup.string().optional(),
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
      isDefault: true,
      isInvoice: false,
      isNews: false,
      lat: 0,
      long: 0,
    },
    resolver: useYupValidationResolver(AddressSchema),
  });
  const { handleSubmit, control, watch } = method;
  const { dismissAll } = useBottomSheetModal();

  // function & handle

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (customerAddress: TRegisterAddress) => {
    const { customer } = route.params;
    const isNextToRegisterInvoice =
      (customerAddress.isInvoice && route.params.type === RoleType.PERSONAL) ||
      route.params.type === RoleType.COMPANY;

    if (isNextToRegisterInvoice) {
      navigation.navigate('RegisterInvoice', {
        type: route.params.type,
        customer: customer,
        customerAddress,
      });
    } else {
      try {
        const [customerFirstName, customerLastName] = customer.name?.split(' ');
        const memberCategory =
          route.params.type === RoleType.PERSONAL ? 'n' : 'c';

        const payload = {
          member_category: memberCategory,
          member_type: 'm',
          member_password: customer.password,
          member_first_name: customerFirstName || '',
          member_last_name: customerLastName || '',
          member_phone: customer.phoneNumber,
          member_email: customer.email,

          ads_house_number: customerAddress.address,
          ads_building: customerAddress.building,
          ads_moo: customerAddress.village,
          ads_road: customerAddress.road,
          ads_zip_code: customerAddress.postalCode,
          ads_province: customerAddress.provinceId,
          ads_amphur: customerAddress.districtId,
          ads_district: customerAddress.subDistrictId,

          tax_check: '0',
        };

        const data = await postRegister(payload);

        if (data.status === 200) {
          Alert.alert(
            'ลงทะเบียนสำเร็จ',
            'กดตกลงเพื่อไปยังหน้าล๊อกอินเข้าสู่ระบบ',
            [
              {
                text: 'ตกลง',
                onPress: () => navigation.navigate('SignInWithEmail'),
              },
            ],
          );
        } else if (data.status === 202) {
          Alert.alert('ลงทะเบียนไม่สำเร็จ', data?.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
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
            <AddressFormWithSelection
              fieldsDisabled={{ name: true, phoneNumber: true }}
            />
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
          {route.params.type === RoleType.PERSONAL && (
            <View style={[Layout.row, Layout.gap10]}>
              <Controller
                name="isInvoice"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    setIsEnabled={onChange}
                    isEnabled={value || false}
                  />
                )}
              />

              <Text style={[Fonts.text18, Layout.fill]}>
                ฉันต้องการใบกำกับภาษี
              </Text>
            </View>
          )}

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

          <Button
            title={watch('isInvoice') ? 'ถัดไป' : 'ยืนยัน'}
            fullWidth
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterAddress;
