import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  ImageURISource,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import Language from '@/components/Language/Language';
import Button from '@/components/Button/Button';
import Stepper from '@/components/Stepper/Stepper';
import { AuthenticationParamsList } from 'types/navigation';
import PagerView from 'react-native-pager-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonColor } from '@/model/options';
interface PageType {
  macord: ImageURISource;
  image: ImageURISource;
  title: string;
  description: string;
}

type Props = NativeStackScreenProps<AuthenticationParamsList, 'PDPA'>;

// @refresh reset
const PDPA = ({ navigation }: Props): JSX.Element => {
  // Hooks
  const { t } = useTranslation(['pdpa']);
  const { Layout, Images, Fonts } = useTheme();
  // State
  const ref = useRef<PagerView>(null);
  const [current, setCurrent] = useState<number>(0);
  const [page] = useState<PageType[]>([
    {
      macord: Images.pdpa.macord_a,
      image: Images.pdpa.unisolution,
      title: t('pdpa:one.title'),
      description: t('pdpa:one.description'),
    },
    {
      macord: Images.pdpa.macord_b,
      image: Images.pdpa.unilearn,
      title: t('pdpa:two.title'),
      description: t('pdpa:two.description'),
    },
    {
      macord: Images.pdpa.macord_c,
      image: Images.pdpa.unipoint,
      title: t('pdpa:three.title'),
      description: t('pdpa:three.description'),
    },
    {
      macord: Images.pdpa.macord_d,
      image: Images.pdpa.unistore,
      title: t('pdpa:four.title'),
      description: t('pdpa:four.description'),
    },
    {
      macord: Images.pdpa.macord_e,
      image: Images.pdpa.unifly,
      title: t('pdpa:five.title'),
      description: t('pdpa:five.description'),
    },
    {
      macord: Images.pdpa.macord_f,
      image: Images.pdpa.unifly,
      title: t('pdpa:six.title'),
      description: t('pdpa:six.description'),
    },
  ]);

  // Handle

  const init = async (): Promise<void> => {};

  useEffect(() => {
    init();

    return () => {
      setCurrent(0);
    };
  }, []);

  return (
    <ImageBackground
      source={Images.bg.b}
      resizeMode="cover"
      style={[
        Layout.fill,
        Layout.bg,
        Layout.gap20,
        { paddingHorizontal: 16, paddingTop: 16 },
      ]}
    >
      <PagerView
        ref={ref}
        style={{ flex: 1 }}
        initialPage={current}
        orientation={'horizontal'}
        onPageSelected={va => {
          setCurrent(va.nativeEvent.position);
        }}
      >
        {page.map((val, index) => (
          <SafeAreaView style={[Layout.fill]} key={index}>
            <ScrollView
              contentContainerStyle={[
                Layout.colCenter,
                Layout.scrollSpaceBetween,
                Layout.gap10,
                // Layout.p12,
              ]}
            >
              <View
                style={[Layout.row, Layout.fullWidth, Layout.justifyContentEnd]}
              >
                <Language />
              </View>
              {/*  */}
              <View
                style={[Layout.fullWidth, Layout.colCenter, { height: 320 }]}
              >
                <Image source={val.macord} resizeMode={'contain'} />
              </View>
              <View style={[Layout.fullWidth, Layout.colCenter]}>
                <View style={[{ height: 51 }, Layout.mb20]}>
                  <Image source={val.image} resizeMode={'contain'} />
                </View>
                <Text
                  style={[Fonts.text48Med, Fonts.textCenter, Fonts.textBlack]}
                >
                  {val.title}
                </Text>
                <Text style={[Fonts.text32Light, Fonts.textCenter]}>
                  {val.description}
                </Text>
              </View>
              {index + 1 !== page.length && (
                <View>
                  <Stepper
                    length={page.length}
                    current={index + 1}
                    onPress={number => {
                      ref.current?.setPage(number);
                    }}
                  />
                </View>
              )}
            </ScrollView>
          </SafeAreaView>
        ))}
      </PagerView>
      <View style={[Layout.fullWidth, Layout.colCenter, Layout.gap10]}>
        {current + 1 === page.length ? (
          <>
            <Button
              fullWidth
              title={t('pdpa.startShopping')}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Product' }],
                });
              }}
            />
            <Button
              fullWidth
              colors={ButtonColor.solid}
              title={t('pdpa.loginOrSignUp')}
              onPress={() => {
                navigation.navigate('PDPAConfirm');
              }}
            />
          </>
        ) : (
          <Button
            fullWidth
            title={t('pdpa.next')}
            onPress={() => {
              if (current + 1 < page.length) {
                ref.current?.setPage(current + 1);
              }
            }}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default PDPA;
