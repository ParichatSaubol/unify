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
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonColor } from '@/model/options';

type Props = NativeStackScreenProps<AuthenticationParamsList, 'ConfirmOTP'>;

//หน้าคอนเฟิร์ม OTP
// @refresh reset
const ConfirmOTP = ({ navigation }: Props): JSX.Element => {
  // Hooks
  const { t } = useTranslation(['authentication']); // Translation
  const { Layout, Images, Fonts, Colors } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // State
  const [code, setCode] = useState('');

  // Handler

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
        <ScrollView contentContainerStyle={[Layout.gap10]}>
          <View
            style={[Layout.fullWidth, Layout.alignItemsStart, Layout.mt89]}
          />
          <View style={[Layout.col, Layout.fullWidth, Layout.alignItemsStart]}>
            <Text style={[Fonts.text32Med, { color: Colors.gray600 }]}>
              {t('authentication:otp.title')}
            </Text>
            <Text style={[Fonts.text21, { color: Colors.gray600 }]}>
              {t('authentication:otp.desctiption')}
            </Text>
          </View>
          <Pressable onPress={Keyboard.dismiss}>
            <InputOTP
              code={code}
              setCode={text => {
                setCode(text);
              }}
              maximumLength={6}
              // setIsPinReady={val => {}}
            />
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
                phoneNumber: '++61*****78',
              })}
            </Text>
          </View>
          <View style={[Layout.rowCenter, Layout.fullWidth, Layout.gap10]}>
            <Button
              startIcon={<Images.icons.reload color={Colors.gray600} />}
              title={t('authentication:otp.reConfirm')}
              colors={ButtonColor.text}
            />
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
                navigation.navigate('SignInWithEmail');
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
