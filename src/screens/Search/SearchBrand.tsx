import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  CatalogImageList,
  DefaultLayout,
  InputSearchBrand,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import ChipImage from '@/components/Chip/ChipImage';
import { TopBrand } from '@/model/brand';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'SearchBrand'>;

// @refresh reset
const SearchBrand = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Fonts, Layout, Images } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topBrand, setTopBrand] = useState<TopBrand[]>([
    { title: 'Mitsubishi', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'GRACO', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'TRUSCO', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'IDEC', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'PATLITE', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'SMC', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'Makita', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'HITACHI', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'Mitsubishi', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'Mitsubishi', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'Mitsubishi', logo: <Image source={Images.brand.hitachiLogo} /> },
  ]);

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // child elements
  const renderSortBoard: () => JSX.Element[] = () => {
    const children: JSX.Element[] = [];
    let elements: JSX.Element[] = [];
    for (let index = 0; index < topBrand.length; index++) {
      elements.push(
        <ChipImage
          key={index}
          title={topBrand[index].title}
          logo={topBrand[index].logo}
        />,
      );

      if (elements.length >= 4) {
        children.push(
          <View
            key={`brand-sort-item-${children.length}`}
            style={[Layout.row, Layout.justifyContentBetween]}
          >
            {elements}
          </View>,
        );
        elements = [];
      }
    }

    if (elements.length > 0) {
      children.push(
        <View key={`brand-sort-item-${children.length}`} style={[Layout.row]}>
          {elements}
        </View>,
      );
    }

    return children;
  };

  return (
    <DefaultLayout>
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        title="ค้นหาแบรนด์"
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.gap20, Layout.main, Layout.bgWhite]}>
          <View style={styles.container}>
            <InputSearchBrand placeholder="ค้นหาแบรนด์ได้ที่นี่" />
          </View>

          <Text style={[Fonts.text24Med]}>สินค้าแบรนด์ชั้นนำ</Text>
          <CatalogImageList data={topBrand} />

          <Text style={[Fonts.text24Med]}>เรียงตาม หมวดตัวอักษร</Text>
          <View>{renderSortBoard()}</View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { height: 46 },
  header: { paddingBottom: 0 },
});

export default SearchBrand;
