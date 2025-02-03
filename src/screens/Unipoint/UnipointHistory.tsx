import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'UnipointHistory'>;

// @refresh reset
const UnipointHistory = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // state
  const [history] = useState([
    {
      id: 1,
      date: t('unipointHistory.date1'),
      reward: t('unipointHistory.reward'),
      point: -1992,
    },
    {
      id: 1,
      date: t('unipointHistory.date2'),
      reward: t('unipointHistory.reward2'),
      point: +302,
    },
    {
      id: 1,
      date: t('unipointHistory.date3'),
      reward: t('unipointHistory.reward2'),
      point: +302,
    },
  ]);

  // handle callback

  const init = async (): Promise<void> => {
    //
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('unipointHistory.historyTitle')}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap10,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.bgWhite]}>
          <View style={[Layout.main, Layout.gap10]}>
            <View style={styles.box}>
              <Text style={[Fonts.text18, Fonts.textBlack]}>
                {t('unipointHistory.couponDescription')}
              </Text>
              <Text style={[Fonts.text24Med, Fonts.textPrimary]}>
                {t('unipointHistory.couponPoints')}
              </Text>
            </View>
            <Text style={[Fonts.text16, Fonts.textCenter]}>
              {t('unipointHistory.waitingMessage')}
            </Text>

            <View>
              <Text style={[Fonts.text21, Fonts.textBlack]}>
                {t('unipointHistory.rewardHistory')}
              </Text>
              <Text style={[Fonts.text16, Fonts.textBlack]}>
                {t('unipointHistory.historyDescription')}
              </Text>
            </View>
          </View>
        </View>
        {history.map((item, index) => (
          <View key={`history-list-${index}`}>
            <View style={styles.dateBox}>
              <Text style={[Fonts.text18]}>{item.date}</Text>
            </View>
            <View
              style={[Layout.bgWhite, Layout.main, Layout.row, Layout.gap20]}
            >
              <Text style={[Fonts.text16, Layout.fill]}>{item.reward}</Text>
              <View style={[Layout.row, Layout.gap10]}>
                <Text
                  style={[
                    Fonts.text21,
                    item.point < 0 ? Fonts.textRed : Fonts.textSuccess,
                  ]}
                >
                  {item.point}
                </Text>
                <Images.icons.coin />
              </View>
            </View>
          </View>
        ))}

        <View style={[Layout.main]}>
          <Button title={t('unipointHistory.viewAllDetails')} />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  box: {
    paddingHorizontal: 21,
    paddingVertical: 18,
    backgroundColor: '#E6EEFF',
  },
  dateBox: {
    paddingHorizontal: 21,
  },
});

export default UnipointHistory;
