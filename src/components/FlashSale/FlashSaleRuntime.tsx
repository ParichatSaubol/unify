import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCountdown, useTheme } from '@/hooks';
import { FlashSaleRuntimeBgColor } from '@/model/options';

interface Props {
  date?: Date;
  backgroundColor?: FlashSaleRuntimeBgColor;
}

const FlashSaleRuntime: FunctionComponent<Props> = ({ backgroundColor }) => {
  const { Layout, Fonts } = useTheme();

  const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  const timeStyle = [
    backgroundColor === FlashSaleRuntimeBgColor.red && styles.boxRed,
  ];

  const dotStyle = [
    backgroundColor === FlashSaleRuntimeBgColor.red && styles.boxDotRed,
  ];

  const timeTextStyle = [
    backgroundColor === FlashSaleRuntimeBgColor.red && Fonts.textWhite,
  ];

  const timeDotStyle = [
    backgroundColor === FlashSaleRuntimeBgColor.red && Fonts.textRed,
  ];

  return (
    <View
      style={[
        Layout.row,
        Layout.gap10,
        Layout.center,
        backgroundColor === FlashSaleRuntimeBgColor.white && styles.boxWhite,
      ]}
    >
      <View style={timeStyle}>
        <Text style={[Fonts.text16Bold, ...timeTextStyle]}>{days} วัน</Text>
      </View>
      <View style={[Layout.row, styles.house]}>
        <View style={timeStyle}>
          <Text style={[Fonts.text16Bold, ...timeTextStyle]}>{hours}</Text>
        </View>
        <View style={dotStyle}>
          <Text style={[Fonts.text16Bold, ...timeDotStyle]}>:</Text>
        </View>
        <View style={timeStyle}>
          <Text style={[Fonts.text16Bold, ...timeTextStyle]}>{minutes}</Text>
        </View>
        <View style={dotStyle}>
          <Text style={[Fonts.text16Bold, ...timeDotStyle]}>:</Text>
        </View>
        <View style={timeStyle}>
          <Text style={[Fonts.text16Bold, ...timeTextStyle]}>{seconds}</Text>
        </View>
      </View>
    </View>
  );
};

FlashSaleRuntime.defaultProps = {
  date: undefined,
  backgroundColor: FlashSaleRuntimeBgColor.red,
};

const styles = StyleSheet.create({
  house: {
    gap: 3,
  },
  boxRed: {
    backgroundColor: '#FC1B13',
    height: 28,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  boxDotRed: {
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxWhite: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
});

export default FlashSaleRuntime;
