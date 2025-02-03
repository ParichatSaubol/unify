import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ProfilePolicy'>;

// @refresh reset
const ProfilePolicy = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // handle callback
  const init = async (): Promise<void> => {
    //
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('profilePolicy.policy')}
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
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text16]}>
            {'\t'}
            {t('profilePolicy.tkk')}
          </Text>
          <Text style={[Fonts.text16, Fonts.textBlack]}>
            {t('profilePolicy.cookies')}
          </Text>
          <Text style={[Fonts.text16]}>
            {'\t'}
            {t('profilePolicy.smallTextFile')}
          </Text>
          <Text style={[Fonts.text16, Fonts.textBlack]}>
            {t('profilePolicy.necessity')}
          </Text>
          <Text style={[Fonts.text16]}>
            {'\t'}
            {t('profilePolicy.navigation')}
          </Text>
          <Text style={[Fonts.text16]}>{t('profilePolicy.details')}</Text>
          <Text style={[Fonts.text16, Fonts.textBlack]}>
            {t('profilePolicy.performance')}
          </Text>
          <Text style={[Fonts.text16]}>
            {'\t'}
            {t('profilePolicy.performanceCookies')}
          </Text>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
});

export default ProfilePolicy;
