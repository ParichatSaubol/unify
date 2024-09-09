import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { IServiceOptions } from '@/model/product';
import { THB } from '@/utils';
import Button from '../Button/Button';
import { ButtonColor, ButtonSize } from '@/model/options';

type Props = IServiceOptions & {
  active?: boolean;
  onPress?: () => void;
  onViewDetail?: () => void;
};

const ServiceOptions: FunctionComponent<Props> = ({
  title,
  active,
  amount,
  // description,
  // id,
  onPress,
  onViewDetail,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <>
      <TouchableOpacity
        style={[Layout.col, styles.container, active && styles.active]}
        onPress={() => {
          onPress && onPress();
        }}
      >
        <View style={[Layout.row, Layout.gap5]}>
          <View style={[Layout.col, Layout.gap10, Layout.fill]}>
            <View style={styles.buttonService}>
              <Button
                title="งานบริการ"
                size={ButtonSize.mini}
                colors={ButtonColor.error}
              />
            </View>
            <Text style={[Fonts.text16, Fonts.textBlack]} numberOfLines={2}>
              {title}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={[Layout.col, Layout.alignItemsEnd, Layout.fill]}>
            <TouchableOpacity
              onPress={() => {
                onViewDetail && onViewDetail();
              }}
            >
              <Images.icons.warning1 color="red" width={22} height={22} />
            </TouchableOpacity>
            <Text style={[Fonts.text24Med, Fonts.textRed]}>
              {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text16]}>ราคานี้ ไม่รวมค่าสินค้า</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

ServiceOptions.defaultProps = {
  active: false,
  onPress: undefined,
  onViewDetail: undefined,
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(252, 27, 19, 0.10)',
    width: 260,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  active: {
    borderWidth: 1,
    borderColor: '#FC1B13',
  },
  buttonService: {
    width: 80,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});

export default ServiceOptions;
