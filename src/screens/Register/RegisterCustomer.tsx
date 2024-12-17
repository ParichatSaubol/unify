import React, { useEffect } from 'react';
import { View, ScrollView, Text, Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, useYupValidationResolver } from '@/hooks';
import {
  AppBar,
  Button,
  Card,
  DefaultLayout,
  Input,
  InputSelection,
} from '@/components';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { Controller, useForm } from 'react-hook-form';
import { TRegisterCustomer } from '@/model/customer';
import * as yup from 'yup';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InputSelectionVariant, InputVariant, RoleType } from '@/model/options';

const messageRequired = 'Por favor, preencha este campo';

const SignupSchema: yup.ObjectSchema<TRegisterCustomer> = yup.object().shape({
  type: yup.mixed<RoleType>(),
  name: yup.string().required(messageRequired),
  prefix: yup.string().required(messageRequired),
  email: yup.string().required(messageRequired),
  password: yup.string().required(messageRequired),
  confirmPassword: yup.string().required(messageRequired),
});

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'RegisterCustomer'
>;

// @refresh reset
const RegisterCustomer = ({ navigation, route }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Fonts, Colors, Images } = useTheme();
  const { dismissAll } = useBottomSheetModal();
  const { handleSubmit, control, watch } = useForm<TRegisterCustomer>({
    defaultValues: {
      type: route?.params?.type,
    },
    resolver: useYupValidationResolver(SignupSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: TRegisterCustomer) => {
    navigation.navigate('RegisterAddress', { type: route.params.type });
  };

  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        title="กรอกข้อมูลสมาชิก"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[Layout.gap10, Layout.main]}
        onTouchStart={() => {
          dismissAll();
          Keyboard.dismiss();
        }}
      >
        <Card
          title={
            watch('type') === RoleType.COMPANY
              ? 'ข้อมูลลงทะเบียน (สำหรับลูกค้าบริษัท)'
              : 'ข้อมูลลงทะเบียน (สำหรับลูกค้าทั่วไป)'
          }
        >
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                คำนำหน้า
              </Text>
              <Controller
                name="prefix"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <InputSelection
                    placeholder="คำนำหน้า"
                    variant={InputSelectionVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                ชื่อ / นามสกุล
              </Text>
              <Controller
                name="name"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ชื่อ"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>อีเมล</Text>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="อีเมล"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>
        </Card>

        <Card title="ตั้งรหัสผ่านเข้าใช้งาน">
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                รหัสผ่าน
              </Text>
              <Controller
                name="password"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="รหัสผ่าน"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    secureTextEntry
                  />
                )}
              />
            </View>

            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                ยืนยันรหัสผ่าน
              </Text>
              <Controller
                name="confirmPassword"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ยืนยันรหัสผ่าน"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    secureTextEntry
                  />
                )}
              />
            </View>

            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                การตั้งรหัสเพื่อความปลอดภัย
              </Text>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  ตัวอักษรภาษาอังกฤษตัวเล็กและใหญ่ (a-z)
                </Text>
              </View>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  ตัวเลขอย่างน้อย 1 ตัวอักษร (0-9)
                </Text>
              </View>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  รหัสต้องมีความยาวอย่างน้อย 8 ตัวอักษร
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Button title="ถัดไป" fullWidth onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterCustomer;
