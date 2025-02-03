import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, DefaultLayout } from '@/components';
import { AppColor, ButtonSize } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ProfileUser'>;

// @refresh reset
const ProfileUser = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  const [user] = useState({
    name: t('profileUser.name'),
    email: 'abc@abc.com',
    register: '01/01/2564',
    phone: '0812345678',
    address: t('profileUser.address'),
  });
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
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('profileUser.information')}
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
          <Text style={[Fonts.text24Med]}>{t('profileUser.information')}</Text>
          <View style={styles.box}>
            <Text style={[Fonts.text21]}>{t('profileUser.nameOne')}</Text>
            <Text style={[Fonts.text21]}>{user.name}</Text>
          </View>
          <View style={styles.box}>
            <Text style={[Fonts.text21]}>{t('profileUser.date')}</Text>
            <Text style={[Fonts.text21]}>{user.register}</Text>
          </View>
          <View style={styles.box}>
            <Text style={[Fonts.text21]}>{t('profileUser.phone')}</Text>
            <Text style={[Fonts.text21]}>{user.phone}</Text>
          </View>
          <View style={styles.box}>
            <Text style={[Fonts.text21]}>{t('profileUser.email')}</Text>
            <Text style={[Fonts.text21]}>{user.email}</Text>
          </View>
          <View style={styles.box}>
            <Text style={[Fonts.text21]}>{t('profileUser.addressOne')}</Text>
            <View style={[Layout.row, Layout.gap10, Layout.center]}>
              <Text style={[Fonts.text21]}>{t('profileUser.viewDetails')}</Text>
              <Images.icons.arrowRight color="#667085" />
            </View>
          </View>
        </View>
        <View style={[Layout.gap10, styles.bottom]}>
          <Button
            title={t('profileUser.deleteAccount')}
            size={ButtonSize.small}
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
  box: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});

export default ProfileUser;
