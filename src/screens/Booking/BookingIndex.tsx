import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, BookingCard, DefaultLayout } from '@/components';
import { Booking } from '@/model/booking';
import { BookingStatus, AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'BookingIndex'>;

// @refresh reset
const BookingIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);

  const { Layout, Images, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Booking[]>([
    {
      id: 1,
      name: 'งานบริการที่คุณลงทะเบียนไว้',
      description: '4 งานบริการที่คุณได้ทำการนัดหมาย',
      number: 1,
      amount: 1000000,
      bookingDate: '10 พ.ค. 66',
      status: BookingStatus.inProgress,
    },
    {
      id: 2,
      name: 'งานบริการที่คุณลงทะเบียนไว้',
      description: '4 งานบริการที่คุณได้ทำการนัดหมาย',
      number: 1,
      amount: 1000000,
      bookingDate: '10 พ.ค. 66',
      status: BookingStatus.completed,
    },
    {
      id: 2,
      name: 'งานบริการที่คุณลงทะเบียนไว้',
      description: '4 งานบริการที่คุณได้ทำการนัดหมาย',
      number: 1,
      amount: 1000000,
      bookingDate: '10 พ.ค. 66',
      status: BookingStatus.inPayment,
    },
  ]);

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
        title="การนัดหมายของคุณ"
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
          <Text style={[Fonts.text21, Fonts.textBlack]}>กิจกรรม</Text>
          <View
            style={[
              styles.banner,
              Layout.row,
              Layout.justifyContentBetween,
              styles.customTop,
            ]}
          >
            <View>
              <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>
                งานบริการที่คุณลงทะเบียนไว้
              </Text>
              <Text style={[Fonts.text16, Fonts.textPrimary]}>
                4 งานบริการที่คุณได้ทำการนัดหมาย
              </Text>
            </View>
            <View>
              <Images.icons.bookingIndex />
            </View>
          </View>
        </View>

        <View style={[styles.container, styles.customTop]}>
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            งานบริการของคุณ ({data.length} รายการ)
          </Text>
          <View style={[styles.customTop, Layout.gap10]}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('BookingDetail');
                }}
              >
                <BookingCard {...item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  banner: {
    backgroundColor: 'rgba(0, 56, 255, 0.20)',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 5,
  },
  customTop: {
    marginTop: 16,
  },
});

export default BookingIndex;
