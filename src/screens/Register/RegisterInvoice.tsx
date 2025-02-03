import React, { useEffect } from 'react';
import { View, ScrollView, Keyboard, Text } from 'react-native';
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

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'RegisterInvoice'
>;

// @refresh reset
const RegisterInvoice = ({ navigation, route }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { Layout, Fonts } = useTheme();
  const { dismissAll } = useBottomSheetModal();
  const method = useForm<TRegisterInvoice>({
    defaultValues: {
      type: route.params.type,
    },
    // resolver: useYupValidationResolver(InvoiceSchema),
  });
  const { handleSubmit, control } = method;

  const onSubmit = () => {
    navigation.navigate('SignInWithEmail');
  };
  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        title={t('registerInvoice.information')}
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
                  title={t('registerInvoice.legalEntity')}
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
                  title={t('registerInvoice.individual')}
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
          <InvoiceForm />
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
            {t('registerInvoice.title')}
          </Text>
        </View>

        <Button
          title={t('registerInvoice.confirm')}
          fullWidth
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterInvoice;
