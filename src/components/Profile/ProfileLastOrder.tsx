import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { TProfile } from '@/model/profile';
import Chip from '../Chip/Chip';
import { ChipColor } from '@/model/options';

type Props = TProfile & {};

const ProfileLastOrder: FunctionComponent<Props> = ({ lastOrder }) => {
  const { Layout, Fonts } = useTheme();

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <Text style={[Fonts.text24Med]}>คำสั่งซื้อล่าสุด</Text>
      <View
        style={[
          Layout.bgWhite,
          Layout.main,
          Layout.radius5,
          Layout.row,
          Layout.gap20,
          Layout.alignItemsCenter,
        ]}
      >
        {lastOrder?.image && (
          <Image source={lastOrder?.image} style={styles.image} />
        )}
        <View>
          <Text style={[Fonts.text21, Fonts.textPrimary]} numberOfLines={1}>
            ที่ต้องได้รับ
          </Text>
          <Text style={[Fonts.text16]} numberOfLines={1}>
            พัสดุของคุณได้ถูกจัดส่งออกไปแล้ว
          </Text>
        </View>
        <View style={[Layout.fill]}>
          <Chip title={lastOrder?.status || ''} color={ChipColor.primary} />
        </View>
        {/*  */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: { width: 42, height: 42 },
});

ProfileLastOrder.defaultProps = {};

export default ProfileLastOrder;
