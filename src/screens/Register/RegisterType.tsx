import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { ButtonIcon } from '@/components';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonIconColors, ButtonIconVariant, RoleType } from '@/model/options';

type Props = NativeStackScreenProps<AuthenticationParamsList, 'RegisterType'>;

// @refresh reset
const RegisterTypeScreen = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation(['register']);
  const { Layout, Images, Fonts, Colors } = useTheme();

  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <ImageBackground
      source={Images.bg.e}
      resizeMode="cover"
      style={[Layout.fill]}
    >
      <SafeAreaView style={[Layout.fill]}>
        <ScrollView contentContainerStyle={[Layout.gap20, Layout.main]}>
          <View style={[Layout.col, Layout.alignItemsStart]}>
            <ButtonIcon
              icon={<Images.icons.arrowLeft color={Colors.gray800} />}
              variant={ButtonIconVariant.box}
              colors={ButtonIconColors.transparent}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View>
            <Text style={[Fonts.text34Med, Fonts.textWhite]}>
              {t('register:registerType.title')}
            </Text>
            <Text style={[Fonts.text24Med, Fonts.textWhite]}>
              {t('register:registerType.description')}
            </Text>
          </View>
          <View style={[Layout.center]}>
            <TouchableOpacity
              style={[]}
              onPress={() => {
                navigation.navigate('RegisterCustomer', {
                  type: RoleType.PERSONAL,
                });
              }}
            >
              <Image source={Images.register.generalRegister} />
            </TouchableOpacity>
          </View>
          <View style={[Layout.center]}>
            <TouchableOpacity
              style={[]}
              onPress={() => {
                navigation.navigate('RegisterCustomer', {
                  type: RoleType.COMPANY,
                });
              }}
            >
              <Image source={Images.register.corporateRegister} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RegisterTypeScreen;
