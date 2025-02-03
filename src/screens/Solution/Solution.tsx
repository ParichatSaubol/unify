import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, InputSelection, ProductCard } from '@/components';
import { IProductCard } from '@/model/product';
import { AppColor, InputSelectionVariant } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'Solution'>;

// @refresh reset
const Solution = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState();
  const [search, setSearch] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState<IProductCard[]>([
    {
      brand: 'MITSUBISHI',
      title: t('solution.title'),
      description: t('solution.description'),
      // amount: 1232990,
      // netAmount: 1232990,
      // discount: -44,
      // service: true,
      // serviceBy: 'MIKITA',
      serviceCount: 100,
      image: Images.mock.solution,
      booking: true,
    },
    {
      brand: 'MITSUBISHI',
      title: t('solution.title'),
      description: t('solution.description'),
      // amount: 1232990,
      // netAmount: 1232990,
      // discount: -44,
      // service: true,
      // serviceBy: 'MIKITA',
      serviceCount: 100,
      image: Images.mock.solution,
      booking: true,
    },
    {
      brand: 'MITSUBISHI',
      title: t('solution.title'),
      description: t('solution.description'),
      // amount: 1232990,
      // netAmount: 1232990,
      // discount: -44,
      // service: true,
      // serviceBy: 'MIKITA',
      serviceCount: 100,
      image: Images.mock.solution,
      booking: true,
    },
  ]);

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={styles.appBar}>
        <AppBar
          color={AppColor.white}
          title={t('solution.series')}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
        ]}
      >
        <View style={[styles.container]}>
          <View style={styles.inputBox}>
            <InputSelection
              placeholder={t('solution.placeholder')}
              variant={InputSelectionVariant.outlined}
              value={search}
              onChange={setSearch}
              option={[]}
            />
          </View>
        </View>
        <View style={styles.itemsBox}>
          {result.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // navigation.navigate('ProductDetail', { id: item.id });
              }}
            >
              <ProductCard {...item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  appBar: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  customMargin: {
    marginTop: 40,
  },
  inputBox: {
    zIndex: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  itemsBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    gap: 10,
  },
});

export default Solution;
