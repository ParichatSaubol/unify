import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Text,
  Pressable,
  Keyboard,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { useDispatch } from 'react-redux';
import { Button, InputOTP } from '@/components';
import { ApplicationStackParamList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonColor } from '@/model/options';
import { transformPhoneNumber } from '@/utils';
import { checkOTP, loginWithPhone } from '@/services/restapi/authApi';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ConfirmOTP'>;

//หน้าคอนเฟิร์ม OTP
// @refresh reset
const ConfirmOTP = ({ navigation, route }: Props): JSX.Element => {
  const { otpRef, otpTel, isLogin } = route.params;
  // Hooks
  const { t } = useTranslation(['authentication']); // Translation
  const { Layout, Images, Fonts, Colors } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // State
  const [code, setCode] = useState('');
  const [ref, setRef] = useState(otpRef);
  const [errorMsg, setErrorMsg] = useState('');
  // Handler

  const init = async (): Promise<void> => {
    //
  };

  const onResendOTP = async (): Promise<void> => {
    try {
      let modifiedPhoneNumber = '0' + otpTel.replace('66', '');

      const response = await loginWithPhone(modifiedPhoneNumber);
      if (response.status === 200) {
        setRef(response.data?.otp_ref || '');
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (): Promise<void> => {
    try {
      const response = await checkOTP(otpRef, code);
      if (response.status === 200) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Product',
              state: {
                routes: [
                  {
                    name: 'Home',
                  },
                ],
              },
            },
          ],
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
        <ScrollView contentContainerStyle={[Layout.gap10]}>
          <View
            style={[Layout.fullWidth, Layout.alignItemsStart, Layout.mt89]}
          />
          <View style={[Layout.col, Layout.fullWidth, Layout.alignItemsStart]}>
            <Text style={[Fonts.text32Med, { color: Colors.gray600 }]}>
              {t('authentication:otp.title')}
            </Text>
            <Text style={[Fonts.text21, { color: Colors.gray600 }]}>
              {isLogin
                ? t('authentication:otp.desctiption')
                : t('authentication:otp.desctiptionReset')}
            </Text>
          </View>
          <View style={[Layout.col, Layout.fullWidth, Layout.gap40]}>
            <Pressable onPress={Keyboard.dismiss}>
              <InputOTP
                code={code}
                setCode={text => {
                  setCode(text);
                }}
                maximumLength={6}
                // setIsPinReady={val => {}}
              />
              {errorMsg && (
                <Text style={[Fonts.text16, { color: Colors.error }]}>
                  {errorMsg}
                </Text>
              )}
            </Pressable>
            <View style={[Layout.rowCenter, Layout.fullWidth]}>
              <Text
                style={[
                  Fonts.text16,
                  Fonts.textCenter,
                  { color: Colors.gray600 },
                ]}
              >
                {t('authentication:otp.confirm', {
                  phoneNumber: transformPhoneNumber(otpTel),
                  otpRef: ref,
                })}
              </Text>
            </View>
            <View style={[Layout.rowCenter, Layout.fullWidth, Layout.gap10]}>
              <Button
                startIcon={<Images.icons.reload color={Colors.gray600} />}
                title={t('authentication:otp.reConfirm')}
                onPress={() => {
                  onResendOTP();
                }}
                colors={ButtonColor.text}
              />
            </View>
          </View>
          <View
            style={[
              Layout.rowHCenter,
              Layout.fullWidth,
              Layout.justifyContentBetween,
              Layout.mt50,
            ]}
          >
            <Button
              title={t('authentication:otp.submit')}
              fullWidth
              onPress={() => {
                isLogin
                  ? onSubmit()
                  : navigation.navigate('Main', { screen: 'SignInWithEmail' });
              }}
            />
          </View>
          <View style={[Layout.rowHCenter, Layout.fullWidth, Layout.center]}>
            <Text
              style={[
                Fonts.text18,
                Fonts.textCenter,
                { color: Colors.gray600 },
              ]}
            >
              {t('authentication:otp.policy')}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ConfirmOTP;
