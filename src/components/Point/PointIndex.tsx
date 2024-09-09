import React, { FunctionComponent } from 'react';
import { useTheme } from '@/hooks';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  onChange?: (text: string) => void | undefined;
  value?: string;
  point?: number;
}

const styles = StyleSheet.create({
  container: {
    height: 53,
    width: '100%',
    backgroundColor: '#EFF3FA',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 17,
    borderRadius: 10,
  },
  point: {
    justifyContent: 'flex-end',
  },
});

const PointIndex: FunctionComponent<Props> = ({ point }) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[Layout.row, styles.container]}>
      <View style={[Layout.fill]}>
        <Images.point.unipoint />
      </View>
      <View
        style={[
          Layout.fill,
          Layout.row,
          styles.point,
          Layout.center,
          Layout.gap10,
        ]}
      >
        <Images.icons.coin />
        <View style={[Layout.col]}>
          <Text style={[Fonts.text18]}>คะแนนของคุณ</Text>
          <Text style={[Fonts.text18Bold]}>{point}</Text>
        </View>
      </View>
    </View>
  );
};

PointIndex.defaultProps = {
  onChange: () => {},
  value: '',
  point: 0,
};

export default PointIndex;
