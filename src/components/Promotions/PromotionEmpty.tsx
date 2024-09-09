import React, { FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {}

const PromotionEmpty: FunctionComponent<Props> = ({}) => {
  const { Layout, Images, Fonts } = useTheme();

  return (
    <View style={[Layout.center, Layout.gap10]}>
      <Image source={Images.promotions.empty} />
      <Text style={[Fonts.text21]}>ยังไม่มีโปรโมชันในขณะนี้</Text>
    </View>
  );
};

PromotionEmpty.defaultProps = {};

export default PromotionEmpty;
