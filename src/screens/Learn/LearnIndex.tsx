import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  Button,
  Carousel,
  Catalog,
  CatalogImageList,
  CommunityContent,
  CustomScrollView,
  DefaultLayout,
  LearnAppBar,
} from '@/components';
import LearnCatalog from '@/components/Learn/LearnCatalog';
import { TopBrand } from '@/model/brand';
import { ButtonColor, ButtonVariant, CarouselSize } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'LearnIndex'>;

// @refresh reset
const LearnIndex = ({}: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Images, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topBrand, setTopBrand] = useState<TopBrand[]>([
    {
      title: 'Mitsubishi',
      logo: <Image source={Images.brand.hitachiLogo} />,
      name: 'LearnCategory',
    },
    { title: 'GRACO', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'TRUSCO', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'IDEC', logo: <Image source={Images.brand.gracoLogo} /> },
  ]);

  const [learn] = useState<TopBrand[]>([
    { title: 'Engineer', logo: <Image source={Images.learn.mock2} /> },
    { title: 'Design', logo: <Image source={Images.learn.mock2} /> },
    { title: 'Sales', logo: <Image source={Images.learn.mock2} /> },
    { title: 'Sales', logo: <Image source={Images.learn.mock2} /> },
  ]);
  const [state, setState] = useState<'foryou' | 'all'>('all');

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <CustomScrollView>
        {state === 'all' ? (
          <ImageBackground source={Images.bg.j} style={styles.imageBody} />
        ) : (
          <ImageBackground source={Images.bg.k} style={styles.imageBody2} />
        )}

        <View style={[styles.container]}>
          <LearnAppBar />
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Button
                startIcon={
                  <Images.icons.book1
                    color={state === 'all' ? '#FFFFFF' : '#475467'}
                  />
                }
                fullRadius
                title="คอร์สเรียนทั้งหมด"
                variant={
                  state === 'all' ? ButtonVariant.contained : ButtonVariant.text
                }
                onPress={() => {
                  setState('all');
                }}
              />
            </View>
            <View style={[Layout.fill]}>
              <Button
                startIcon={
                  <Images.icons.book2
                    color={state === 'foryou' ? '#FFFFFF' : '#475467'}
                  />
                }
                fullRadius
                title="คอร์สเรียนของคุณ"
                variant={
                  state === 'foryou'
                    ? ButtonVariant.contained
                    : ButtonVariant.text
                }
                onPress={() => {
                  setState('foryou');
                }}
              />
            </View>
          </View>
          {state === 'foryou' && (
            <>
              <Text style={[Fonts.text28Light, Fonts.textBlack]}>
                เรียนต่อสำหรับคุณ
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textWhite]}>
                คอรส์เรียนแนะนำ
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textBlack]}>
                คอร์สเรียนสถาบันชั้นนำ
              </Text>
              <CatalogImageList rowNumber={1} data={topBrand} />

              <Catalog method="catalogLearn" />
              <CatalogImageList rowNumber={1} data={learn} />
            </>
          )}
          {state === 'all' && (
            <>
              <Carousel
                hiddentScrollPos
                size={CarouselSize.small}
                dataImages={[
                  Images.learn.mock,
                  Images.learn.mock,
                  Images.learn.mock,
                ]}
              />
              <Text style={[Fonts.text28Light, Fonts.textWhite]}>
                TOP 10 คอร์สเรียนยอดนิยม
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textWhite]}>
                คอร์สเรียนจาก Denso Thailand
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textWhite]}>
                คอร์สเรียนจาก Mitsubishi FA.
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textWhite]}>
                คอร์สเรียนจาก สถาบัน MARA
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textWhite]}>
                คอร์สเรียนจาก สถาบันไทยญี่ปุ่น
              </Text>
              <LearnCatalog />

              <Text style={[Fonts.text28Light, Fonts.textBlack]}>
                คอร์สเรียนสถาบันชั้นนำ
              </Text>
              <CatalogImageList rowNumber={1} data={topBrand} />
              <Catalog method="catalogLearn" />
              <CatalogImageList rowNumber={1} data={learn} />

              <Catalog method="community" />
              <Carousel
                size={CarouselSize.small}
                dataJSX={[
                  <CommunityContent
                    bannerImage={Images.community.content}
                    logoImage={Images.community.logo}
                    createdBy="ข่าวสารด้านอุตสาหกรรม"
                    title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
                    isWhite
                  />,
                  <CommunityContent
                    bannerImage={Images.community.content}
                    logoImage={Images.community.logo}
                    createdBy="ข่าวสารด้านอุตสาหกรรม"
                    title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
                    isWhite
                  />,
                ]}
              />
              <Button
                title="ดูทั้งหมด"
                colors={ButtonColor.white}
                variant={ButtonVariant.contained}
                onPress={() => {
                  //
                }}
              />
            </>
          )}
        </View>
      </CustomScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  blue: { backgroundColor: '#0047FF' },
  container: { paddingVertical: 32, paddingHorizontal: 16, gap: 20 },
  imageBody2: { height: 1575, position: 'absolute', width: '100%' },
  imageBody: { height: 2900, position: 'absolute', width: '100%' },
  header: { paddingBottom: 0 },
  history: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default LearnIndex;
