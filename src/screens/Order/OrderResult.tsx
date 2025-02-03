import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { Button } from '@/components';
import { OrderTabs, RoleType } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'OrderResult'>;

// @refresh reset
const OrderResult = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');

  const { Layout, Fonts, Images } = useTheme();
  // state

  // ข้อมูลส่วนลด แต้ม ที่ได้รับ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rewardPoint, setRewardPoint] = useState({});

  const init = async (): Promise<void> => {
    // Get Order By Id
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <ImageBackground
      source={Images.bg.l}
      resizeMode="cover"
      style={[Layout.fill]}
    >
      <SafeAreaView style={[Layout.bg, Layout.fill]}>
        <ScrollView contentContainerStyle={[Layout.fill, styles.main]}>
          <View style={[Layout.fill, Layout.gap10, styles.customMargin]}>
            <Images.icons.circleCheck color="#0038FF" />
            <Text
              style={[Fonts.text34Med, Fonts.textPrimary, Fonts.textCenter]}
            >
              {t('orderResult.orderCancellationSuccess')}
            </Text>
            <Text style={[Fonts.text21Med, Fonts.textCenter]}>
              {t('orderResult.orderCancellationMessage')}
            </Text>
            <View style={[Layout.fullWidth]}>
              <Button
                title={t('orderResult.backToHome')}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Product',
                        state: {
                          routes: [
                            {
                              name: 'OrderIndex',
                              params: {
                                tabs: OrderTabs.WaitingForPayment,
                                member: RoleType.COMPANY,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
  },
  customMargin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
});

export default OrderResult;
