import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'UnipointHistoryDetail'>;

// @refresh reset

const UnipointHistoryDetail = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors } = useTheme();

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
        title={t('unipointHistoryDetail.historyTitle')}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        {/* <View></View> */}
      </ScrollView>
    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
});

export default UnipointHistoryDetail;
