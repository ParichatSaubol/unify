import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import Chip from '../Chip/Chip';
import { Booking } from '@/model/booking';
import { THB } from '@/utils';
import { BookingStatus, ChipColor } from '@/model/options';
import { t } from 'i18next';

type Props = Booking & {};

// การ์ดแสดงการจอง
const BookingCard: FunctionComponent<Props> = ({
  name,
  description,
  number,
  amount,
  bookingDate,
  status,
}) => {
  const { Layout, Fonts } = useTheme();

  return (
    <View style={[styles.card]}>
      <Text style={[Fonts.text18Med, Fonts.textBlack]}>{name}</Text>
      <Text style={[Fonts.text18]}>{description}</Text>
      <View
        style={[
          Layout.row,
          Layout.gap5,
          Layout.justifyContentBetween,
          styles.customTop,
        ]}
      >
        <View style={[Layout.col, Layout.gap20]}>
          <Text style={[Fonts.text16, Fonts.textCenter]}>
            {t('bookingCard.quantity')}
          </Text>
          <Text style={[Fonts.text21, Fonts.textBlack, Fonts.textCenter]}>
            {number}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={[Layout.col, Layout.gap20]}>
          <Text style={[Fonts.text16, Fonts.textCenter]}>
            {t('bookingCard.price')}
          </Text>
          <Text style={[Fonts.text21, Fonts.textBlack, Fonts.textCenter]}>
            {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={[Layout.col, Layout.gap20]}>
          <Text style={[Fonts.text16, Fonts.textCenter]}>
            {t('bookingCard.appointmentDate')}
          </Text>
          <Text style={[Fonts.text21, Fonts.textBlack, Fonts.textCenter]}>
            {bookingDate}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={[Layout.col, Layout.gap20]}>
          <Text style={[Fonts.text16, Fonts.textCenter]}>
            {t('bookingCard.status')}
          </Text>
          <Text style={[Fonts.text21, Fonts.textBlack, Fonts.textCenter]}>
            {status === BookingStatus.inProgress && (
              <Chip
                title={t('bookingCard.statusInProgress')}
                color={ChipColor.primary}
              />
            )}
            {status === BookingStatus.inPayment && (
              <Chip
                title={t('bookingCard.statusInPayment')}
                color={ChipColor.warning}
              />
            )}
            {status === BookingStatus.completed && (
              <Chip
                title={t('bookingCard.statusCompleted')}
                color={ChipColor.success}
              />
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

BookingCard.defaultProps = {};

const styles = StyleSheet.create({
  container: {},
  customTop: {
    marginTop: 16,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#F2F4F7',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 16,
  },
});

export default BookingCard;
