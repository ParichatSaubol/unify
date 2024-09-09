import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import Button from '@/components/Button/Button';
import { AuthenticationParamsList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonColor } from '@/model/options';

type Props = NativeStackScreenProps<AuthenticationParamsList, 'PDPAConfirm'>;

// @refresh reset
const PDPAConfirm = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation(['pdpa']);
  const { Layout, Images, Fonts, Colors } = useTheme();

  const [accept, setAccpt] = useState<boolean>(false);

  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();
  }, []);

  return (
    <ImageBackground
      source={Images.bg.c}
      resizeMode="cover"
      style={[Layout.fill, Layout.bg, Layout.main]}
    >
      <SafeAreaView style={[Layout.fill]}>
        <ScrollView
          contentContainerStyle={[
            Layout.colCenter,
            Layout.scrollSpaceBetween,
            Layout.gap10,
          ]}
        >
          <View style={[Layout.fullWidth, Layout.colCenter, Layout.mt50]}>
            <Image source={Images.pdpa.unifly} resizeMode={'contain'} />
          </View>
          <View style={[Layout.fullWidth, Layout.colCenter]}>
            <Text style={[Fonts.text40Med, Fonts.textCenter, Fonts.textBlack]}>
              {t('pdpa:confirm.title')}
            </Text>
            <Text style={[Fonts.text28Light, Fonts.textCenter]}>
              {t('pdpa:confirm.description')}
            </Text>
          </View>
          <View
            style={[
              Layout.fullWidth,
              Layout.colCenter,
              Layout.bgWhite,
              Layout.p12,
            ]}
          >
            <Text style={[Fonts.text16]}>{t('pdpa:confirm.label')}</Text>
          </View>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Button
                startIcon={
                  accept ? (
                    <Images.icons.circleAccept color={Colors.white} />
                  ) : (
                    <Images.icons.circle color={Colors.white} />
                  )
                }
                title="ยินยอม"
                onPress={() => {
                  setAccpt(!accept);
                }}
                fullWidth
              />
            </View>
            <View style={[Layout.fill]}>
              <Button
                colors={ButtonColor.solid}
                title="ไม่ยินยอม"
                onPress={() => {}}
                fullWidth
              />
            </View>
          </View>
          <View style={[Layout.fullWidth, Layout.colCenter]}>
            <Text style={[Fonts.textWhite, Fonts.text18]}>
              {t('pdpa:confirm.accept')}
            </Text>
          </View>
          <View style={[Layout.fullWidth, Layout.colCenter]}>
            <Button
              colors={!accept ? ButtonColor.disabled : ButtonColor.secondary}
              title="ยืนยัน"
              onPress={() => {
                navigation.navigate('SignInWithEmail');
              }}
              fullWidth
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PDPAConfirm;
