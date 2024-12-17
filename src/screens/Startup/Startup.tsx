import React, { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { Brand, DefaultLayout } from '@/components';
import { ApplicationStackParamList } from 'types/navigation';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderTabs, RoleType } from '@/model/options';

type Props = StackScreenProps<ApplicationStackParamList, 'Startup'>;

// @refresh reset
const Startup = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation(['example', 'welcome']);
  const { Layout, Fonts, Images, Colors } = useTheme();

  const init = async (): Promise<void> => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    navigation.reset({
      index: 0,
      // routes: [{ name: 'KnowledgeTest' }],
      routes: [
        {
          name: 'Product',
          state: {
            routes: [
              {
                name: 'Home',
                params: {
                  tabs: OrderTabs.BeReceived,
                  member: RoleType.COMPANY,
                },
              },
            ],
          },
        },
      ],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <DefaultLayout>
      <ImageBackground
        source={Images.bg.a}
        resizeMode="cover"
        style={[Layout.fill, Layout.bg]}
      >
        <View style={[Layout.fill, Layout.colCenter, Layout.gap20]}>
          <Brand mode="contain" height={'80%'} width={'80%'} />
          <ActivityIndicator size={'large'} />
        </View>

        <Text
          style={[Fonts.textSmall, { color: Colors.white }, Fonts.textCenter]}
        >
          {t('welcome:credit')}
        </Text>
      </ImageBackground>
    </DefaultLayout>
  );
};

export default Startup;
