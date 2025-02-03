import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, useYupValidationResolver } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, DefaultLayout, Input } from '@/components';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TSolution } from '@/model/solution';
import { AppColor, InputSize, InputVariant } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ServiceSearch'>;

const messageRequired = 'required';

const SolutionSchema: yup.ObjectSchema<TSolution> = yup.object().shape({
  address: yup.string().required(messageRequired),
  building: yup.string().required(messageRequired),
  village: yup.string().required(messageRequired),
  road: yup.string().required(messageRequired),
  postalCode: yup.string().required(messageRequired),
  province: yup.string().required(messageRequired),
  district: yup.string().required(messageRequired),
  subdistrict: yup.string().required(messageRequired),
  name: yup.string().required(messageRequired),
  company: yup.string().required(messageRequired),
  position: yup.string().required(messageRequired),
  department: yup.string().required(messageRequired),
  phone: yup.string().required(messageRequired),
  description: yup.string().required(messageRequired),
  photo: yup.string().required(messageRequired),
});

// @refresh reset
const ServiceBooking = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  const methods = useForm<TSolution>({
    defaultValues: {},
    resolver: useYupValidationResolver(SolutionSchema),
  });
  const { control } = methods;

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState();

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <FormProvider {...methods}>
      <DefaultLayout>
        <AppBar
          color={AppColor.white}
          title={t('serviceBooking.searchServiceAndSolution')}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.main,
          ]}
        >
          <View style={[styles.container, styles.customMargin]}>
            <Controller
              name="department"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <View style={styles.inputBox}>
                  <Input
                    startIcon={<Images.icons.search color="#98A2B3" />}
                    size={InputSize.large}
                    placeholder={t('serviceBooking.selectService')}
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                </View>
              )}
            />
          </View>

          <View style={[styles.container]}>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {t('serviceBooking.selectService')}
            </Text>
            <Controller
              name="department"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <View style={styles.inputBox}>
                  <Input
                    startIcon={<Images.icons.search color="#98A2B3" />}
                    size={InputSize.large}
                    placeholder={t('serviceBooking.placeholder')}
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                </View>
              )}
            />
          </View>

          <View style={[styles.container]}>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {t('serviceBooking.chooseServiceArea')}
            </Text>
            <Controller
              name="department"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <View style={styles.inputBox}>
                  <Input
                    startIcon={<Images.icons.search color="#98A2B3" />}
                    size={InputSize.large}
                    placeholder={t('serviceBooking.chooseServiceArea')}
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.bottom}>
            <Button title={t('serviceBooking.search')} />
          </View>
        </ScrollView>
      </DefaultLayout>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {},
  customMargin: {
    marginTop: 40,
  },
  bottom: {
    marginTop: 40,
  },
  inputBox: {
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  appBar: {
    width: '100%',
    position: 'absolute',
    paddingVertical: 28,
    paddingHorizontal: 13,
    zIndex: 1,
  },
});

export default ServiceBooking;
