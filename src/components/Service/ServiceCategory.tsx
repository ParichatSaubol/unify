import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import ButtonIcon from '../Button/ButtonIcon';
import { ButtonIconColors, ButtonIconVariant } from '@/model/options';
import { useTranslation } from 'react-i18next';

interface Props {}

const ServiceCategory: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[Layout.row, styles.container]}>
      <View style={[Layout.col, Layout.gap10, Layout.center]}>
        <ButtonIcon
          icon={<Images.icons.brifecasetick color="white" />}
          variant={ButtonIconVariant.box}
        />
        <Text style={[Fonts.text18, Fonts.textWhite]}>
          {t('serviceCategory.service')}
        </Text>
      </View>
      <View style={[Layout.col, Layout.gap10, Layout.center]}>
        <ButtonIcon
          icon={<Images.icons.setting2 color="white" />}
          variant={ButtonIconVariant.box}
        />
        <Text style={[Fonts.text18, Fonts.textWhite]}>
          {t('serviceCategory.solution')}
        </Text>
      </View>
      <View style={[Layout.col, Layout.gap10, Layout.center]}>
        <ButtonIcon
          icon={<Images.icons.receiptitem color="white" />}
          variant={ButtonIconVariant.box}
          isNotify
        />
        <Text style={[Fonts.text18, Fonts.textWhite]}>
          {t('serviceCategory.appointments')}
        </Text>
      </View>
    </View>
  );
};

ServiceCategory.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    gap: 32,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#E4EBFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 64,
    width: 64,
  },
  button: {},
});

export default ServiceCategory;
