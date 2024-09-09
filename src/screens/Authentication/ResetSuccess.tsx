import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { useDispatch } from 'react-redux';
import { Button, ButtonIcon, Dividers, Link } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthenticationParamsList } from 'types/navigation';
import { LinkSize } from '@/model/options';

type Props = NativeStackScreenProps<AuthenticationParamsList, 'ResetSuccess'>;

// @refresh reset
const ResetSuccess = ({}: Props): JSX.Element => {
  const { t } = useTranslation(['authentication']);
  const { Layout, Images, Fonts, Colors } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const init = async (): Promise<void> => {
    //
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ImageBackground
      source={Images.bg.d}
      resizeMode="cover"
      style={[Layout.fill, Layout.bg, Layout.main]}
    >
      <SafeAreaView style={[Layout.fill]}>
        <ScrollView
          contentContainerStyle={[Layout.scrollSpaceBetween, Layout.gap10]}
        >
          {/* Top */}
          <View style={[Layout.gap10]}>
            <View
              style={[Layout.fullWidth, Layout.alignItemsStart, Layout.mt89]}
            >
              <Image source={Images.pdpa.unifly} />
            </View>
            <View
              style={[Layout.col, Layout.fullWidth, Layout.alignItemsStart]}
            >
              <Text style={[Fonts.text32Med, { color: Colors.gray600 }]}>
                {t('authentication:resetSuccess.title')}
              </Text>
              <Text style={[Fonts.text21, { color: Colors.gray600 }]}>
                {t('authentication:resetSuccess.desctiption')}
              </Text>
            </View>
          </View>
          {/* Bottom  */}
          <View style={[Layout.gap20]}>
            <View
              style={[
                Layout.rowHCenter,
                Layout.fullWidth,
                Layout.justifyContentBetween,
              ]}
            >
              <Button
                title={t('authentication:resetSuccess.login')}
                fullWidth
              />
            </View>
            <View
              style={[
                Layout.rowHCenter,
                Layout.fullWidth,
                Layout.center,
                Layout.gap10,
              ]}
            >
              <Text style={[Fonts.text21, { color: Colors.gray600 }]}>
                {t('authentication:signIn.nonAccount')}
              </Text>
              <Link
                title={t('authentication:signIn.registerNow')}
                size={LinkSize.medium}
              />
            </View>
            <View>
              <Dividers title={t('authentication:signIn.loginWith')} />
            </View>
            <View
              style={[
                Layout.rowHCenter,
                Layout.fullWidth,
                Layout.center,
                Layout.gap10,
              ]}
            >
              <ButtonIcon icon={<Images.button.apple />} />
              <ButtonIcon icon={<Images.button.google />} />
              <ButtonIcon icon={<Images.button.line />} />
              <ButtonIcon icon={<Images.button.facebook />} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ResetSuccess;
