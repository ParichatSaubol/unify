import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  Catalog,
  Community,
  BrandList,
  CommunityContent,
  InputSearchBrand,
  DefaultLayout,
  CustomScrollView,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'CommunityIndex'
>;

// @refresh reset
const CommunityIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
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
      <CustomScrollView>
        <ImageBackground
          source={Images.bg.m}
          style={styles.imageBody}
          resizeMethod="resize"
        />
        <AppBar
          onPress={() => {
            navigation.goBack();
          }}
          title="คอมมูนิตี้และบทความ"
          color={AppColor.blue}
        />
        <View style={[Layout.gap20, Layout.main]}>
          <View style={styles.container}>
            <InputSearchBrand placeholder="ค้นหาคอมมูนิตี้และบทความได้ที่นี่" />
          </View>

          <Catalog method="community" />
          <BrandList />
          <Community />

          <Catalog method="technicalCenter" />
          <CommunityContent
            bannerImage={Images.community.content}
            logoImage={Images.community.logo}
            createdBy="ข่าวสารด้านอุตสาหกรรม"
            title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
            onPress={() => {
              navigation.navigate('CommunityDetail' as any);
            }}
          />
          <Catalog method="knowledgeIndustry" />
          <CommunityContent
            bannerImage={Images.community.content}
            logoImage={Images.community.logo}
            createdBy="ข่าวสารด้านอุตสาหกรรม"
            title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
          />
          <Catalog method="knowledge" />
          <CommunityContent
            bannerImage={Images.community.content}
            logoImage={Images.community.logo}
            createdBy="ข่าวสารด้านอุตสาหกรรม"
            title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
          />
          <Catalog method="industrialTechnologyCorner" />
          <CommunityContent
            bannerImage={Images.community.content}
            logoImage={Images.community.logo}
            createdBy="ข่าวสารด้านอุตสาหกรรม"
            title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
          />
        </View>
      </CustomScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { height: 46 },
  header: { paddingBottom: 0 },
  history: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // gap: 10,
  },
  imageBody: {
    height: 2000,
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: -1,
  },
});

export default CommunityIndex;
