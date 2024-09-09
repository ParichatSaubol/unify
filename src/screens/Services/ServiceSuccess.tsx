import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { Button } from '@/components';
import { ButtonVariant } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'ServiceSuccess'
>;

// @refresh reset
const ServiceSuccess = ({}: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState();

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <ImageBackground
      source={Images.bg.l}
      resizeMode="cover"
      style={[Layout.fill, Layout.bg]}
    >
      <SafeAreaView style={[Layout.bg, Layout.fill]}>
        <ScrollView
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.main,
          ]}
        >
          <View
            style={[
              Layout.col,
              Layout.gap10,
              Layout.center,
              styles.container,
              styles.customMargin,
            ]}
          >
            <Images.icons.circleCheck color="#0038FF" />
            <Text
              style={[
                Fonts.text34Med,
                Fonts.textPrimary,
                Fonts.textCenter,
                styles.customMargin,
              ]}
            >
              เราได้รับข้อมูลการขอเข้ารับ{'\n'}งานบริการ ของคุณแล้ว
            </Text>
            <Text style={[Fonts.text21Med, Fonts.textCenter]}>
              จะมีเจ้าหน้าที่ติดต่อกลับไปภายใน 1 ถึง 3 วันทำการ
              {'\n'}เพื่อสอบถามข้อมูลการเข้ารับบริการเพิ่มเติม
            </Text>
            <View style={[Layout.fill, Layout.fullWidth, styles.customMargin]}>
              <Button title="ดูการนัดหมายของคุณ" />
            </View>
            <View style={[Layout.fill, Layout.fullWidth]}>
              <Button title="กลับหน้าแรก" variant={ButtonVariant.text} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {},
  customMargin: {
    marginTop: 40,
  },
});

export default ServiceSuccess;
