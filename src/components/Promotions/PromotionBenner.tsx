import React, { FunctionComponent } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import FlashSaleRuntime from '../FlashSale/FlashSaleRuntime';
import Chip from '../Chip/Chip';
import { ChipColor, FlashSaleRuntimeBgColor } from '@/model/options';

interface Props {
  title?: string;
  description?: string;
  isFlash?: boolean;
}

const PromotionBenner: FunctionComponent<Props> = ({
  title,
  description,
  isFlash,
}) => {
  const { Images, Fonts, Layout } = useTheme();

  return (
    <>
      {isFlash ? (
        <View style={styles.flashSale}>
          <View
            style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}
          >
            <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
              <Images.icons.flashSale height={19} color="#FFF" />
              <Text style={[Fonts.text21Bold, Fonts.textWhite]}>
                FLASH STORE
              </Text>
              <Chip title="-89%" color={ChipColor.error} />
            </View>

            <FlashSaleRuntime backgroundColor={FlashSaleRuntimeBgColor.white} />
          </View>
          <View
            style={[
              Layout.alignItemsCenter,
              Layout.row,
              Layout.justifyContentBetween,
            ]}
          >
            <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
              <Text
                style={[Fonts.text28Bold, Fonts.textWhite]}
                numberOfLines={1}
              >
                ฿322,000.00
              </Text>
              <Text style={[Fonts.text16, Fonts.textWhite]} numberOfLines={1}>
                ฿1,202,990.00 / ชิ้น
              </Text>
            </View>
            <Text style={[Fonts.text16, Fonts.textWhite]}>
              ขายแล้วในดีลนี้ 2 ชิ้น
            </Text>
          </View>
        </View>
      ) : (
        <ImageBackground
          source={Images.bg.i}
          resizeMode="cover"
          style={[styles.container]}
        >
          <View style={styles.banner}>
            <Image source={Images.promotions.d} resizeMode="cover" />
          </View>
          <View>
            <Text style={[Fonts.text24Med, Fonts.textWhite]}>{title}</Text>
            <Text style={[Fonts.text16Med, Fonts.textWhite]}>
              {description}
            </Text>
          </View>
        </ImageBackground>
      )}
    </>
  );
};

PromotionBenner.defaultProps = {
  title: '8.8 ช้อปสินค้าลดสูงสุด 88%',
  description: 'ผ่อน 0% นานสูงสุด 10 เดือน รับเงินคืน สูงสุด 15%',
  isFlash: false,
};

const styles = StyleSheet.create({
  container: {
    height: 59,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  banner: {
    position: 'relative',
    height: 73,
    top: -14,
    paddingHorizontal: 10,
  },
  flashSale: { padding: 12, backgroundColor: '#FB1B13', marginBottom: 12 },
});

export default PromotionBenner;
