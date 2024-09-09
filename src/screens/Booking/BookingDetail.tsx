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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
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
        title="รายละเอียดนัดหมายของคุณ"
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
            <Text style={[Fonts.text18]}>จำนวน</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>{data.number}</Text>
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>ราคา</Text>
            {data.amount ? (
              <Text style={[Fonts.text18, Fonts.textBlack]}>
                {THB.format(data.amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
              </Text>
            ) : (
              <Text style={[Fonts.text18, Fonts.textPrimary]}>
                เจ้าหน้าที่ประเมินราคาหน้างาน
              </Text>
            )}
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>วันที่ทำการจอง</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {data.bookingDate}
            </Text>
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>วันที่เข้ารับบริการ</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {data.serviceDate}
            </Text>
          </View>
          <View style={[Layout.row, Layout.justifyContentBetween, styles.row]}>
            <Text style={[Fonts.text18]}>สถานะ</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>
              {data.status === BookingStatus.inProgress && (
                <Chip title="รอเจ้าหน้าที่ติดต่อ" color={ChipColor.primary} />
              )}
              {data.status === BookingStatus.inPayment && (
                <Chip title="รอการชำระเงิน" color={ChipColor.warning} />
              )}
              {data.status === BookingStatus.completed && (
                <Chip title="ชำระเงินแล้ว" color={ChipColor.success} />
              )}
            </Text>
          </View>

          <View style={[Layout.mt50]}>
            <Text style={[Fonts.text18, Fonts.textBlack]}>ข้อมูลลูกค้า</Text>
            <View style={[Layout.row, styles.customTop]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                ชื่อผู้รับบริการ :
              </Text>
              <Text style={[Fonts.text18]}>{data.customerContact?.name}</Text>
            </View>
            <View style={[Layout.row]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                ชื่อบริษัท :
              </Text>
              <Text style={[Fonts.text18]}>
                {data.customerContact?.company}
              </Text>
            </View>
            <View style={[Layout.row]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                โทร :
              </Text>
              <Text style={[Fonts.text18]}>{data.customerContact?.tel}</Text>
            </View>
            <View style={[Layout.row]}>
              <Text style={[Fonts.text18, Fonts.textBlack, styles.column]}>
                ที่อยู่ :
              </Text>
              <Text style={[Fonts.text18, Layout.fill]}>
                {data.customerContact?.address}
              </Text>
            </View>
          </View>
        </View>
        <Button title="ติดต่อเจ้าหน้าที่" />
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
