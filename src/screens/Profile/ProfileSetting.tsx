import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, DefaultLayout } from '@/components';
import {
  AppColor,
  ButtonAlign,
  ButtonColor,
  ButtonSize,
} from '@/model/options';
import { TMenu } from '@/model/profile';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'ProfileSetting'
>;

// @refresh reset
const ProfileSetting = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState<string>(
    t('profileSetting.currentLanguage'),
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLanguage, setIsLanguage] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currency, setCurrency] = useState<string>(
    t('profileSetting.currentCurrency'),
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCurrency, setIsCurrency] = useState<boolean>(false);
  const [menu] = useState<TMenu[]>([
    {
      title: t('profileSetting.policy'),
      name: 'ProfilePolicy',
      isOption: true,
    },
    {
      title: t('profileSetting.condition'),
      name: 'ProfileSetting',
      isOption: true,
    },
    {
      title: t('profileSetting.question'),
      name: 'BookingIndex',
      isOption: true,
    },
    {
      title: t('profileSetting.about'),
      name: 'ProfileSetting',
      isOption: false,
    },
    {
      title: t('profileSetting.contact'),
      name: 'ProfileSetting',
      isOption: false,
    },
  ]);

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
        title={t('profileSetting.setting')}
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
        <View style={[Layout.gap10]}>
          <Button
            title={t('profileSetting.language')}
            colors={ButtonColor.white}
            endIcon={
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Images.icons.th />
                <Text style={[Fonts.text18]}>{language}</Text>
                <Images.icons.arrowDown color="#667085" />
              </View>
            }
            align={ButtonAlign.between}
            size={ButtonSize.small}
            onPress={() => {
              //
            }}
          />
          <Button
            title={t('profileSetting.currency')}
            colors={ButtonColor.white}
            endIcon={
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Text style={[Fonts.text18]}>{currency}</Text>
                <Images.icons.arrowDown color="#667085" />
              </View>
            }
            align={ButtonAlign.between}
            size={ButtonSize.small}
            onPress={() => {
              //
            }}
          />
        </View>
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text24Med]}>
            {t('profileSetting.serviceCenter')}
          </Text>
          <View style={[Layout.radius5, Layout.gap10]}>
            {/*  */}
            {menu.map((item, index) => (
              <Button
                key={index}
                startIcon={
                  <View
                    style={[Layout.row, Layout.gap20, Layout.alignItemsCenter]}
                  >
                    {item.icon}
                    <Text style={[Fonts.text18]}>{item.title}</Text>
                  </View>
                }
                title=" "
                colors={ButtonColor.white}
                endIcon={
                  (item.isOption && (
                    <Images.icons.arrowRight color="#667085" />
                  )) ||
                  undefined
                }
                align={ButtonAlign.between}
                size={ButtonSize.small}
                onPress={() => {
                  navigation.navigate(item.name as never);
                }}
              />
            ))}
          </View>
        </View>
        <View style={[Layout.gap10, styles.bottom]}>
          <Button title={t('profileSetting.logOut')} size={ButtonSize.small} />
          <Button
            title={t('profileSetting.deleteAccount')}
            size={ButtonSize.small}
            colors={ButtonColor.solid}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginTop: 20,
  },
});

export default ProfileSetting;
