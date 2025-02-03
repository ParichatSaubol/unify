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

  const { t } = useTranslation('register');
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
        title={t('registerCustomer.title')}
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
              ? t('registerCustomer.company')
              : t('registerCustomer.general')
          }
        >
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                {t('registerCustomer.prefix')}
              </Text>
              <Controller
                name="prefix"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <InputSelection
                    placeholder={t('registerCustomer.prefix')}
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
                {t('registerCustomer.nameL')}
              </Text>
              <Controller
                name="name"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerCustomer.name')}
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
                {t('registerCustomer.email')}
              </Text>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerCustomer.email')}
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

        <Card title={t('registerCustomer.setPassword')}>
          <View style={[Layout.col, Layout.gap10]}>
            <View>
              <Text style={[Fonts.text18, { color: Colors.black }]}>
                {t('registerCustomer.password')}
              </Text>
              <Controller
                name="password"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerCustomer.password')}
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
                {t('registerCustomer.confirmPassword')}
              </Text>
              <Controller
                name="confirmPassword"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('registerCustomer.confirmPassword')}
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
                {t('registerCustomer.safety')}
              </Text>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  {t('registerCustomer.character')}
                </Text>
              </View>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  {t('registerCustomer.number')}
                </Text>
              </View>
              <View style={[Layout.rowHCenter, Layout.gap10]}>
                <Images.icons.checkCircleOutline color={Colors.gray600} />
                <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                  {t('registerCustomer.charactersLong')}
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Button
          title={t('registerCustomer.next')}
          fullWidth
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterCustomer;
