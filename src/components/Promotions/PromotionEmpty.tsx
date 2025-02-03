import React, { FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';

interface Props {}

const PromotionEmpty: FunctionComponent<Props> = ({}) => {
  const { Layout, Images, Fonts } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[Layout.center, Layout.gap10]}>
      <Image source={Images.promotions.empty} />
      <Text style={[Fonts.text21]}>{t('promotionEmpty.title')}</Text>
    </View>
  );
};

PromotionEmpty.defaultProps = {};

export default PromotionEmpty;
