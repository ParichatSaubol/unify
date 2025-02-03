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

  const { t } = useTranslation('register');
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
        title={t('registerOldProfile.information')}
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
        <Card title={t('registerOldProfile.company')}>
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                {t('registerOldProfile.nameInvoice')}
              </Text>
              <Controller
                name="prefix"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerOldProfile.nameInvoice')}
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
                      title={t('registerOldProfile.isHeadOffice')}
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
                      title={t('registerOldProfile.branch')}
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
                                placeholder={t(
                                  'registerOldProfile.enterBranch',
                                )}
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
                {t('registerOldProfile.taxID')}
              </Text>
              <Controller
                name="taxID"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerOldProfile.taxID')}
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
                {t('registerOldProfile.email')}
              </Text>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerOldProfile.email')}
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

        <Card title={t('registerOldProfile.setPassword')}>
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                {t('registerOldProfile.password')}
              </Text>
              <Controller
                name="password"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerOldProfile.password')}
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
                {t('registerOldProfile.confirmPassword')}
              </Text>
              <Controller
                name="confirmPassword"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerOldProfile.confirmPassword')}
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
                {t('registerOldProfile.safety')}
              </Text>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  {t('registerOldProfile.character')}
                </Text>
              </View>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  {t('registerOldProfile.number')}
                </Text>
              </View>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  {t('registerOldProfile.charactersLong')}
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Button
          title={t('registerOldProfile.next')}
          fullWidth
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterOldProfile;
