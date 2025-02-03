import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, DefaultLayout, NotificationCard } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { NotificationCardProps } from '@/components/Notifications/NotificationCard';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'Notifications'>;

// @refresh reset
const Notifications = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  const { Layout, Images } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotifications] = useState<NotificationCardProps[]>([
    {
      title: t('home.title'),
      image: Images.mock.notification,
      description: t('home.description'),
      timestamp: '12-07-2565 12:00',
    },
    {
      title: t('home.title'),
      image: Images.mock.notification,
      description: t('home.description'),
      timestamp: '12-07-2565 12:00',
    },
    {
      title: t('home.title'),
      image: Images.mock.notification,
      description: t('home.description'),
      timestamp: '12-07-2565 12:00',
    },
    {
      title: t('home.title'),
      image: Images.mock.notification,
      description: t('home.description'),
      timestamp: '12-07-2565 12:00',
    },
    {
      title: t('home.title'),
      image: Images.mock.notification,
      description: t('home.description'),
      timestamp: '12-07-2565 12:00',
    },
    {
      title: t('home.title'),
      image: Images.mock.notification,
      description: t('home.description'),
      timestamp: '12-07-2565 12:00',
    },
  ]);

  // handle callback
  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // child elements
  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        title={t('notifications.title')}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.gap20]}>
          <View style={[Layout.col]}>
            {notifications.map((notification, index) => {
              return (
                <NotificationCard
                  key={index}
                  {...notification}
                  isActive={index === 0}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default Notifications;
