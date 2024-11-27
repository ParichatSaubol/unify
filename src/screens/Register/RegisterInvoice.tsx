import React, { useEffect } from 'react';
import { View, ScrollView, Keyboard, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { TRegisterInvoice } from '@/model/customer';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import {
  AppBar,
  Button,
  Checkbox,
  DefaultLayout,
  InvoiceForm,
} from '@/components';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonVariant, RoleType } from '@/model/options';
import { postRegister } from '@/services/restapi/authApi';
import InvoiceFormWithSelection from '@/components/Invoice/InvoiceFormWithSelection';

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'RegisterInvoice'
>;

// @refresh reset
const RegisterInvoice = ({ navigation, route }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Fonts } = useTheme();
  const { dismissAll } = useBottomSheetModal();
  const method = useForm<TRegisterInvoice>({
    defaultValues: {
      type: route.params.type,
      isAccept: route.params.customerAddress.isNews,
    },
    // resolver: useYupValidationResolver(InvoiceSchema),
  });
  const { handleSubmit, control } = method;

  const onSubmit = async (taxer: TRegisterInvoice) => {
    try {
      const { customer, customerAddress } = route.params;
      const [customerFirstName, customerLastName] = customer.name?.split?.(' ');
      const memberCategory =
        route.params.type === RoleType.PERSONAL ? 'n' : 'c';

      const payload = {
        member_category: memberCategory,
        member_type: 'm',
        member_password: customer.password,
        member_first_name: customerFirstName,
        member_last_name: customerLastName,
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

        member_name_tax: taxer.name,
        member_tax_type: '1',
        member_tax_branch_name: taxer.branch,
        member_tax_number: taxer.taxID,
        member_tax_address: taxer.address,
        member_tax_building: taxer.building,
        member_tax_moo: taxer.village,
        member_tax_zipcode: taxer.postalCode,
        member_tax_province: taxer.provinceId,
        member_tax_amphur: taxer.districtId,
        member_tax_district: taxer.subDistrictId,
        tax_check: '1',
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
    } catch (error) {}

    // navigation.navigate('SignInWithEmail');
  };
  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        title="ข้อมูลใบกำกับภาษี"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[Layout.gap20, Layout.main]}
        onTouchStart={() => {
          dismissAll();
          Keyboard.dismiss();
        }}
      >
        <View style={[Layout.rowCenter, Layout.gap10]}>
          <View style={[Layout.fill]}>
            <Controller
              name="type"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Button
                  disable
                  title="นิติบุคคล"
                  fullWidth
                  onPress={() => {
                    onChange('company');
                  }}
                  variant={
                    value === RoleType.COMPANY
                      ? ButtonVariant.contained
                      : ButtonVariant.outlined
                  }
                />
              )}
            />
          </View>
          <View style={[Layout.fill]}>
            <Controller
              name="type"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Button
                  disable
                  // active={value === RoleType.PERSONAL}
                  title="บุคคลธรรมดา"
                  fullWidth
                  onPress={() => {
                    onChange('personal');
                  }}
                  variant={
                    value === RoleType.PERSONAL
                      ? ButtonVariant.contained
                      : ButtonVariant.outlined
                  }
                />
              )}
            />
          </View>
        </View>

        <FormProvider {...method}>
          <InvoiceFormWithSelection />
        </FormProvider>

        <View style={[Layout.row]}>
          <Controller
            name="isAccept"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox setIsEnabled={onChange} isEnabled={value} />
            )}
          />

          <Text style={[Fonts.text18, Layout.fill]}>
            ฉันต้องการรับสิทธิพิเศษและโปรโมชั่น รวมถึงข่าวสารจากกลุ่ม บริษัท
            ทีเคเค คอร์ปอเรชั่น จำกัด ตามที่ระบุไว้ใน นโยบายความเป็นส่วนตัว
          </Text>
        </View>

        <Button title="ยืนยัน" fullWidth onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterInvoice;
