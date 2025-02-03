import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AppBar,
  Button,
  DefaultLayout,
  Input,
  InvoiceForm,
} from '@/components';
import { AppColor, ButtonVariant, RoleType } from '@/model/options';
import { TRegisterInvoice } from '@/model/customer';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<ProductParamsList, 'InvoiceInformation'>;

// @refresh reset

const InvoiceInformation = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();
  const ref = useRef<PagerView>(null);

  const method = useForm<TRegisterInvoice>({
    defaultValues: {
      type: RoleType.COMPANY,
    },
    // resolver: useYupValidationResolver(InvoiceSchema),
  });

  const { control } = method;

  // state
  const [currentPage, setCurrentPage] = useState<number>(0);

  // handle callback
  const handleNext = () => {
    ref.current?.setPage(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = () => {};

  const init = async (): Promise<void> => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 2000),
    // );
    // onChangeTheme({ darkMode: true });
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('invoiceInformation.information')}
        onPress={() => {
          //กลับไปหน้าก่อนหน้า
          navigation.goBack();
        }}
      />
      <PagerView ref={ref} style={Layout.fill} initialPage={currentPage}>
        <ScrollView
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
          ]}
          key={0}
        >
          <View style={[Layout.gap10]}>
            <View style={[Layout.rowCenter, Layout.gap10, Layout.main]}>
              <View style={[Layout.fill]}>
                <Controller
                  name="type"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Button
                      active={value === RoleType.COMPANY}
                      title={t('invoiceInformation.company')}
                      fullWidth
                      onPress={() => {
                        onChange('company');
                      }}
                      variant={ButtonVariant.outlined}
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
                      active={value === RoleType.PERSONAL}
                      title={t('invoiceInformation.personal')}
                      fullWidth
                      onPress={() => {
                        onChange('personal');
                      }}
                      variant={ButtonVariant.outlined}
                    />
                  )}
                />
              </View>
            </View>

            <FormProvider {...method}>
              <InvoiceForm />
            </FormProvider>
          </View>

          <View style={[styles.bottomArea]}>
            <Button
              title={t('invoiceInformation.confirm')}
              onPress={() => {
                handleNext();
              }}
            />
          </View>
        </ScrollView>

        {/*  */}
        <ScrollView
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.fill,
          ]}
          key={1}
        >
          <View style={[Layout.main, Layout.gap10]}>
            <Text style={[Fonts.text21, Fonts.textBlack]}>
              {t('invoiceInformation.emailPrompt')}
            </Text>
            <View style={[Layout.col, Layout.gap5]}>
              <Text style={[Fonts.text21, styles.left]}>
                {t('invoiceInformation.yourEmail')}
              </Text>
              <Input placeholder={t('invoiceInformation.email')} />
            </View>
          </View>

          <View style={[styles.bottomArea]}>
            <Button
              title={t('invoiceInformation.confirm')}
              onPress={() => {
                handleNext();
              }}
            />
          </View>
        </ScrollView>

        <ScrollView
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.fill,
          ]}
          key={2}
        >
          <View style={[Layout.main, Layout.gap10, Layout.center, Layout.fill]}>
            <Text
              style={[Fonts.text40Med, Fonts.textPrimary, Fonts.textCenter]}
            >
              {t('invoiceInformation.successTitle')}
            </Text>
            <Text style={[Fonts.text21, Fonts.textCenter]}>
              {t('invoiceInformation.successMessage')}
            </Text>
            <Images.icons.checkCircleOutline
              width="100"
              height="100"
              color="#0057FF"
            />
          </View>

          <View style={[styles.bottomArea]}>
            <Button
              title={t('invoiceInformation.backToHome')}
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        </ScrollView>
      </PagerView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  left: {
    marginLeft: 4,
  },
  bottomArea: {
    padding: 16,
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
});

export default InvoiceInformation;
