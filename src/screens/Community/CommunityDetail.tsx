import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, DefaultLayout, CommunityDetail as Detail } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'CommunityDetail'
>;

// @refresh reset
const CommunityDetail = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Fonts, Layout, Images } = useTheme();

  // state

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // child elements

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        title={t('communityDetail.title')}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.gap20, Layout.main, Layout.bgWhite]}>
          <Detail
            bannerImage={Images.community.content}
            createdBy={t('communityDetail.createdBy')}
            title={t('communityDetail.description')}
            contentImage={Images.community.content2}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default CommunityDetail;
