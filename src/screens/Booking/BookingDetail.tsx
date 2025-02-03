import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, Chip, DefaultLayout } from '@/components';
import { Booking } from '@/model/booking';
import { THB } from '@/utils';
import { BookingStatus, ChipColor, AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'BookingDetail'>;

// @refresh reset
const BookingDetail = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Booking>({
    id: 1,
    name: 'บริการล้างแอร์แบบแขวน/ตั้งพื้น ขนาด 12,000 - 48,000 BTU',
    description: '12,000 BTU',
    number: 1,
    amount: undefined,
    bookingDate: '10 พ.ค. 66',
    serviceDate: '10 พ.ค. 66',
    status: BookingStatus.inProgress,
    customerContact: {
      name: 'สมศักดิ์ ยินดีมาก',
      company: 'บริษัท ทีเคเค คอร์ปอเรชั่น จำกัด',
      tel: '090 999 8899',
      address:
        '26/53 หมู่7 ถนนกิ่งแก้ว 62/2 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10540',
    },
  });

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
        title={t('bookingDetail.bookingDetailTitle')}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.fill,
          Layout.main,
        ]}
      >
        <View style={[styles.container]}>
          <Text style={[Fonts.text18, Fonts.textBlack]}>{data.name}</Text>
          <Text style={[Fonts.text18]}>{data.description}</Text>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              styles.customTop,
              styles.row,
            ]}
          >
            <Text style={[Fonts.text18]}>{t('bookingDetail.quantity')}</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>{data.number}</Text>
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>{t('bookingDetail.price')}</Text>
            {data.amount ? (
              <Text style={[Fonts.text18, Fonts.textBlack]}>
                {THB.format(data.amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
              </Text>
            ) : (
              <Text style={[Fonts.text18, Fonts.textPrimary]}>
                {t('bookingDetail.priceAssessment')}
              </Text>
            )}
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>{t('bookingDetail.bookingDate')}</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {data.bookingDate}
            </Text>
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>{t('bookingDetail.serviceDate')}</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {data.serviceDate}
            </Text>
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>{t('bookingDetail.status')}</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {data.status === BookingStatus.inProgress && (
                <Chip
                  title={t('bookingDetail.waitingForContact')}
                  color={ChipColor.primary}
                />
              )}
              {data.status === BookingStatus.inPayment && (
                <Chip
                  title={t('bookingDetail.waitingForPayment')}
                  color={ChipColor.warning}
                />
              )}
              {data.status === BookingStatus.completed && (
                <Chip
                  title={t('bookingDetail.paymentCompleted')}
                  color={ChipColor.success}
                />
              )}
            </Text>
          </View>

          <View style={[Layout.mt50]}>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {t('bookingDetail.customerInfo')}
            </Text>
            <View style={[Layout.row, styles.customTop]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                {t('bookingDetail.serviceName')}
              </Text>
              <Text style={[Fonts.text18]}>{data.customerContact?.name}</Text>
            </View>
            <View style={[Layout.row]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                {t('bookingDetail.companyName')}
              </Text>
              <Text style={[Fonts.text18]}>
                {data.customerContact?.company}
              </Text>
            </View>
            <View style={[Layout.row]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                {t('bookingDetail.phone')}
              </Text>
              <Text style={[Fonts.text18]}>{data.customerContact?.tel}</Text>
            </View>
            <View style={[Layout.row]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                {t('bookingDetail.address')}
              </Text>
              <Text style={[Fonts.text18, Layout.fill]}>
                {data.customerContact?.address}
              </Text>
            </View>
          </View>
        </View>
        <Button title={t('bookingDetail.contactAgent')} />
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  banner: {
    backgroundColor: 'rgba(0, 56, 255, 0.20)',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 5,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F4F7',
    paddingVertical: 8,
  },
  customTop: {
    marginTop: 16,
  },
  column: {
    width: 90,
  },
});

export default BookingDetail;
