import React, { useEffect, useState } from 'react';
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
import { Button, ButtonIcon, Dividers, Input, Link } from '@/components';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinkColor, LinkSize } from '@/model/options';
import { loginWithPhone } from '@/services/restapi/authApi';

type Props = NativeStackScreenProps<
  AuthenticationParamsList,
  'SignInWithPhone'
>;

// @refresh reset
const SignInWithPhone = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation(['authentication']);
  const { Layout, Images, Fonts, Colors } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const init = async (): Promise<void> => {};
  const onSignIn = async (): Promise<void> => {
    try {
      const response = await loginWithPhone(phoneNumber);
      if (response.status === 200) {
        navigation.navigate('ConfirmOTP', {
          isLogin: true,
          otpRef: response.data?.otp_ref || '',
          otpTel: response.data?.otp_tel || '',
        });
      } else {
        setErrorMsg(response.message);
      }
    } catch (error) {
      console.log(error);
    }
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
          showsVerticalScrollIndicator={false}
        >
          <View style={[Layout.fullWidth, Layout.alignItemsStart, Layout.mt89]}>
            <Image source={Images.pdpa.unifly} width={10} />
          </View>
          <View style={[Layout.col, Layout.fullWidth, Layout.alignItemsStart]}>
            <Text style={[Fonts.text34Med, { color: Colors.gray600 }]}>
              {t('authentication:signIn.title')}
            </Text>
            <Text style={[Fonts.text21, { color: Colors.gray600 }]}>
              {t('authentication:signIn.desctiption')}
            </Text>
          </View>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Input
                value={phoneNumber}
                keyboardType="phone-pad"
                onChange={e => setPhoneNumber(e)}
                placeholder={t('authentication:signIn.placeholder')}
              />
            </View>
          </View>
          <View
            style={[
              Layout.rowHCenter,
              Layout.fullWidth,
              Layout.justifyContentBetween,
            ]}
          >
            <View style={[Layout.rowHCenter, Layout.gap10]}>
              <Images.icons.checkCircleOutline color={Colors.gray600} />
              <Text style={[Fonts.text16, { color: Colors.gray600 }]}>
                {t('authentication:signIn.validation')}
              </Text>
            </View>
            <Link
              title={t('authentication:signIn.loginWithEmail')}
              color={LinkColor.gray}
              onPress={() => {
                navigation.navigate('SignInWithEmail');
              }}
            />
          </View>
          <Text style={[Fonts.text16, { color: Colors.error }]}>
            {errorMsg}
          </Text>
          <View
            style={[
              Layout.rowHCenter,
              Layout.fullWidth,
              Layout.center,
              Layout.bgGrey50,
              Layout.mt89,
              Layout.gap10,
            ]}
          >
            <Text style={[Fonts.text21, { color: Colors.gray600 }]}>
              {/* {t('authentication:signIn.promotion')} */}
              หากคุณเคยเป็น ลูกค้าทีเคเค คอร์ปอเรชั่น
            </Text>
            <Link
              title={t('authentication:signIn.click')}
              size={LinkSize.medium}
              color={LinkColor.gray}
              underline
            />
          </View>
          <View
            style={[
              Layout.rowHCenter,
              Layout.fullWidth,
              Layout.justifyContentBetween,
            ]}
          >
            <Button
              onPress={() => {
                onSignIn();
              }}
              title={t('authentication:signIn.next')}
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
              onPress={() => {
                navigation.navigate('RegisterType');
              }}
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
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignInWithPhone;
