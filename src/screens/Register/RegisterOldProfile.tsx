import React, { useEffect } from 'react';
import { View, ScrollView, Text, Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, Button, Card, DefaultLayout, Input } from '@/components';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { Controller, useForm } from 'react-hook-form';
import { TRegisterOldInvoice } from '@/model/customer';
import * as yup from 'yup';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonSize, ButtonVariant, InputVariant } from '@/model/options';

const messageRequired = 'Por favor, preencha este campo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignupSchema: yup.ObjectSchema<TRegisterOldInvoice> = yup.object().shape({
  taxID: yup.string().required(messageRequired),
  name: yup.string().required(messageRequired),
  prefix: yup.string().required(messageRequired),
  email: yup.string().required(messageRequired),
  password: yup.string().required(messageRequired),
  confirmPassword: yup.string().required(messageRequired),
  isHeadOffice: yup.boolean(),
  branch: yup.string(),
});

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'RegisterOldProfile'
>;

// @refresh reset
const RegisterOldProfile = ({ navigation }: Props): JSX.Element => {
  // hooks

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Fonts, Gutters, Colors, Images } = useTheme();
  const { dismissAll } = useBottomSheetModal();
  const { handleSubmit, control } = useForm<TRegisterOldInvoice>({
    // resolver: useYupValidationResolver(SignupSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: TRegisterOldInvoice) => {
    navigation.navigate('RegisterOldAddress');
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
        contentContainerStyle={[Layout.gap10, Gutters.regularTPadding]}
        onTouchStart={() => {
          dismissAll();
          Keyboard.dismiss();
        }}
      >
        <Card title="ข้อมูลลงทะเบียน (สำหรับลูกค้าบริษัท)">
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                ชื่อสำหรับการออกใบกำกับภาษี
              </Text>
              <Controller
                name="prefix"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ชื่อสำหรับการออกใบกำกับภาษี"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View style={[Layout.rowCenter, Layout.gap10]}>
              <View>
                <Controller
                  name="isHeadOffice"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Button
                      size={ButtonSize.tiny}
                      startIcon={
                        value ? (
                          <Images.icons.circleAccept
                            color={Colors.primary}
                            height="18"
                          />
                        ) : (
                          <Images.icons.circle
                            color={Colors.primary}
                            height="18"
                          />
                        )
                      }
                      variant={ButtonVariant.text}
                      title="สำนักงานใหญ่"
                      onPress={() => {
                        onChange(true);
                      }}
                    />
                  )}
                />
              </View>
              <View style={[Layout.fill]}>
                <Controller
                  name="isHeadOffice"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Button
                      size={ButtonSize.tiny}
                      startIcon={
                        !value ? (
                          <Images.icons.circleAccept
                            color={Colors.primary}
                            height="18"
                          />
                        ) : (
                          <Images.icons.circle
                            color={Colors.primary}
                            height="18"
                          />
                        )
                      }
                      variant={ButtonVariant.text}
                      title="สาขา"
                      onPress={() => {
                        onChange(false);
                      }}
                      endIcon={
                        <Controller
                          name="branch"
                          control={control}
                          render={({
                            field: {
                              value: valueBranch,
                              onChange: OnChangeBranch,
                            },
                            fieldState: { error },
                          }) => (
                            <View style={[Layout.fill]}>
                              <Input
                                disabled={value}
                                placeholder="กรุณากรอกชื่อสาขา"
                                variant={InputVariant.outlined}
                                value={valueBranch}
                                onChange={OnChangeBranch}
                                error={Boolean(error?.message)}
                                helperText={error?.message}
                              />
                            </View>
                          )}
                        />
                      }
                    />
                  )}
                />
              </View>
            </View>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                เลขประจำตัวผู้เสียภาษีอาการ
              </Text>
              <Controller
                name="taxID"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="เลขประจำตัวผู้เสียภาษีอาการ"
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

export default RegisterOldProfile;
