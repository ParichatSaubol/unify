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
import { AppColor, InputVariant, RoleType } from '@/model/options';
import { FormProvider, useForm } from 'react-hook-form';
import { TRegisterInvoice } from '@/model/customer';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<ProductParamsList, 'QuotationInformation'>;

// @refresh reset
const QuotationInformation = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  const ref = useRef<PagerView>(null);
  const method = useForm<TRegisterInvoice>({
    defaultValues: {
      type: RoleType.COMPANY,
    },
  });

  // state
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [email, setEmail] = useState<string>('');

  // handle callback
  const handleNext = () => {
    ref.current?.setPage(currentPage + 1);
    setCurrentPage;
  };

  const handleSubmit = () => {
    navigation.goBack();
  };

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('quotationInformation.quotationInfoTitle')}
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
            <FormProvider {...method}>
              <InvoiceForm />
            </FormProvider>

            <View style={[styles.bottomArea]}>
              <Button
                title={t('quotationInformation.confirm')}
                onPress={() => {
                  handleNext();
                }}
              />
            </View>
          </View>
        </ScrollView>
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
              {t('quotationInformation.emailPrompt')}
            </Text>
            <View style={[Layout.col, Layout.gap5]}>
              <Text style={[Fonts.text21, styles.left]}>
                {t('quotationInformation.yourEmail')}
              </Text>
              <Input
                placeholder={t('quotationInformation.email')}
                value={email}
                onChange={v => setEmail(v)}
                variant={InputVariant.outlined}
              />
            </View>
          </View>

          <View style={[styles.bottomArea]}>
            <Button
              title={t('quotationInformation.confirm')}
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
              {t('quotationInformation.quotationSuccess')}
            </Text>
            <Text style={[Fonts.text21, Fonts.textCenter]}>
              {t('quotationInformation.quotationSentMessage')}
            </Text>
            <Images.icons.checkCircleOutline
              width="100"
              height="100"
              color="#0057FF"
            />
          </View>

          <View style={[styles.bottomArea]}>
            <Button
              title={t('quotationInformation.backToHome')}
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

export default QuotationInformation;
