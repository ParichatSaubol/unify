import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, useYupValidationResolver } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import {
  AppBar,
  Button,
  DefaultLayout,
  ServiceAddressForm,
  ServiceReceiveForm,
} from '@/components';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TSolutionAddress } from '@/model/solution';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'ServiceBooking'
>;

const messageRequired = 'required';

const AddressSchema: yup.ObjectSchema<TSolutionAddress> = yup.object().shape({
  address: yup.string().required(messageRequired),
  building: yup.string().required(messageRequired),
  village: yup.string().required(messageRequired),
  road: yup.string().required(messageRequired),
  postalCode: yup.string().required(messageRequired),
  province: yup.string().required(messageRequired),
  district: yup.string().required(messageRequired),
  subdistrict: yup.string().required(messageRequired),
});

// @refresh reset
const ServiceBooking = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors } = useTheme();
  const methods = useForm<TSolutionAddress>({
    defaultValues: {},
    resolver: useYupValidationResolver(AddressSchema),
  });

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
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('serviceBooking1.title')}
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
        <View style={[styles.container]}>
          <FormProvider {...methods}>
            <ServiceAddressForm />
          </FormProvider>
        </View>
        <View style={[styles.container]}>
          <FormProvider {...methods}>
            <ServiceReceiveForm />
          </FormProvider>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Button title={t('serviceBooking1.button')} />
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 13,
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
