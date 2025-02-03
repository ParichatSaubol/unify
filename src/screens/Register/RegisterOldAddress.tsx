import React, { useEffect } from 'react';
import { View, ScrollView, Keyboard, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import {
  AppBar,
  Button,
  Card,
  Checkbox,
  DefaultLayout,
  Input,
} from '@/components';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { TRegisterOldAddress } from '@/model/customer';
import * as yup from 'yup';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InputVariant, RoleType } from '@/model/options';

const messageRequired = 'Por favor, preencha este campo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddressSchema: yup.ObjectSchema<TRegisterOldAddress> = yup
  .object()
  .shape({
    isNews: yup.bool().required(),
    address: yup
      .array(
        yup.object().shape({
          address: yup.string().required(messageRequired),
          building: yup.string().required(messageRequired),
          village: yup.string().required(messageRequired),
          road: yup.string().required(messageRequired),
          postalCode: yup.string().required(messageRequired),
          province: yup.string().required(messageRequired),
          country: yup.string().required(messageRequired),
          district: yup.string().required(messageRequired),
          subdistrict: yup.string().required(messageRequired),
        }),
      )
      .required(messageRequired),
  });

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'RegisterOldAddress'
>;

// @refresh reset
const RegisterOldAddress = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { Layout, Gutters, Fonts } = useTheme();
  const { dismissAll } = useBottomSheetModal();
  const { handleSubmit, control } = useForm<TRegisterOldAddress>({
    defaultValues: {
      address: [{}, {}, {}],
    },
    // resolver: useYupValidationResolver(AddressSchema),
  });
  const { fields } = useFieldArray({
    control,
    name: 'address',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: TRegisterOldAddress) => {
    navigation.navigate('RegisterInvoice', { type: RoleType.PERSONAL });
  };

  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        title={t('registerOldAddress.oldCustomers')}
        onPress={() => navigation.goBack()}
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
          {fields.map((field, index) => (
            <Card title={`ที่อยู่ ${index + 1}`} key={`address-${index}`}>
              <View style={[Layout.col, Layout.gap10]}>
                <View style={[Layout.row, Layout.gap10]}>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.address')}
                    </Text>
                    <Controller
                      name={`address.${index}.address`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.address')}
                          variant={InputVariant.outlined}
                          value={value}
                          onChange={onChange}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </View>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.village')}
                    </Text>
                    <Controller
                      name={`address.${index}.building`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.village')}
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

                {/*  */}
                <View style={[Layout.row, Layout.gap10]}>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.villageNo')}
                    </Text>
                    <Controller
                      name={`address.${index}.village`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.villageNo')}
                          variant={InputVariant.outlined}
                          value={value}
                          onChange={onChange}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </View>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.road')}
                    </Text>
                    <Controller
                      name={`address.${index}.road`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.road')}
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

                {/*  */}
                <View style={[Layout.row, Layout.gap10]}>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.postalCode')}
                    </Text>
                    <Controller
                      name={`address.${index}.postalCode`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.postalCode')}
                          variant={InputVariant.outlined}
                          value={value}
                          onChange={onChange}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </View>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.province')}
                    </Text>
                    <Controller
                      name={`address.${index}.province`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.province')}
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

                {/*  */}
                <View style={[Layout.row, Layout.gap10]}>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.district')}
                    </Text>
                    <Controller
                      name={`address.${index}.district`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.district')}
                          variant={InputVariant.outlined}
                          value={value}
                          onChange={onChange}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </View>
                  <View style={[Layout.fill]}>
                    <Text style={[Fonts.text18]}>
                      {t('registerOldAddress.subdistrict')}
                    </Text>
                    <Controller
                      name={`address.${index}.subdistrict`}
                      control={control}
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => (
                        <Input
                          placeholder={t('registerOldAddress.subdistrict')}
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
              </View>
            </Card>
          ))}
        </View>

        <View style={[Layout.fill, Layout.gap20, Layout.justifyContentEnd]}>
          <View style={[Layout.row]}>
            <Controller
              name="isNews"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox setIsEnabled={onChange} isEnabled={value} />
              )}
            />

            <Text style={[Fonts.text18]}>{t('registerOldAddress.title')}</Text>
          </View>

          <Button
            title={t('registerOldAddress.next')}
            fullWidth
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default RegisterOldAddress;
