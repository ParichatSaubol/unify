import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, Input } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'KnowledgeCertificate'
>;

// @refresh reset

const KnowledgeTest = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');

  const { Layout, Fonts, Images } = useTheme();

  // state
  const [email, setEmail] = React.useState<string>('');
  const [isConfirm, setIsConfirm] = React.useState<boolean>(false);
  // handle callback
  const handleConfirm = () => {
    setIsConfirm(true);
  };
  const handleBack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Product' }],
    });
  };
  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={[Layout.main, Layout.bgPrimary]}>
        <AppBar
          color={AppColor.blue}
          title={t('knowledgeCertificate.title')}
          onPress={() => {
            //กลับไปหน้าก่อนหน้า
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView contentContainerStyle={[Layout.gap20, Layout.col]}>
        {isConfirm ? (
          <View style={[styles.success, Layout.gap5]}>
            <Text
              style={[Fonts.text48Med, Fonts.textPrimary, Fonts.textCenter]}
            >
              {t('knowledgeCertificate.congratulations')}
            </Text>
            <Text
              style={[Fonts.text32Med, Fonts.textPrimary, Fonts.textCenter]}
            >
              {t('knowledgeCertificate.message')}
            </Text>
            <Text style={[Fonts.text18, Fonts.textPrimary, Fonts.textCenter]}>
              {t('knowledgeCertificate.sentEmail')}
            </Text>
            <View style={[Layout.center]}>
              <Images.icons.checkCircleOutline width={100} height={100} />
            </View>
          </View>
        ) : (
          <View style={[Layout.main, Layout.gap20]}>
            <Text style={[Fonts.text24Med, Fonts.textBlack]}>
              {t('knowledgeCertificate.certificate')}
            </Text>

            <View style={[Layout.gap5]}>
              <Text style={[Fonts.text21]}>
                {t('knowledgeCertificate.email')}
              </Text>
              <Input
                placeholder={t('knowledgeCertificate.placeholder')}
                value={email}
                onChange={val => setEmail(val)}
              />
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.bottom}>
        {isConfirm ? (
          <Button
            title={t('knowledgeCertificate.backToHome')}
            onPress={() => handleBack()}
          />
        ) : (
          <Button
            title={t('knowledgeCertificate.confirm')}
            onPress={() => handleConfirm()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    padding: 16,
  },
  success: {
    marginTop: 82,
  },
});

export default KnowledgeTest;
