import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import {
  AppBar,
  DefaultLayout,
  InputSelection,
  ProductCard,
} from '@/components';
import { IProductCard } from '@/model/product';
import { AppColor, InputSelectionVariant } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ServiceBrand'>;

// @refresh reset
const ServiceBrand = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');

  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState();
  const [search, setSearch] = useState('');
  const [localtion, setLocaltion] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState<IProductCard[]>([
    {
      brand: 'MITSUBISHI',
      title: t('serviceBrand.title'),
      description: t('serviceBrand.description'),
      amount: 1000000,
      netAmount: 1232990,
      discount: -44,
      serviceCount: 100,
      image: Images.mock.solution,
    },
    {
      brand: 'MITSUBISHI',
      title: t('serviceBrand.title'),
      description: t('serviceBrand.description'),
      amount: 1232990,
      serviceCount: 100,
      image: Images.mock.solution,
    },
    {
      brand: 'MITSUBISHI',
      title: t('serviceBrand.title'),
      description: t('serviceBrand.description'),
      amount: 1232990,
      netAmount: 1232990,
      discount: -44,
      serviceCount: 100,
      image: Images.mock.solution,
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
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('serviceBrand.service')}
        onPress={() => {
          navigation.goBack();
        }}
      />
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
              placeholder={t('serviceBrand.placeholder')}
              variant={InputSelectionVariant.outlined}
              value={search}
              onChange={setSearch}
              option={[
                t('serviceBrand.spraying'),
                t('serviceBrand.water'),
                t('serviceBrand.water'),
              ]}
            />
          </View>
        </View>
        {
          <View style={[styles.container]}>
            <Text style={[Fonts.text18]}>
              {t('serviceBrand.selectService')}
            </Text>
            <View style={styles.inputBox}>
              <InputSelection
                startIcon={<Images.icons.location color={Colors.gray600} />}
                placeholder={t('serviceBrand.selectService')}
                variant={InputSelectionVariant.outlined}
                value={localtion}
                onChange={setLocaltion}
                option={[
                  t('serviceBrand.bangkok'),
                  t('serviceBrand.nonthaburi'),
                  t('serviceBrand.pathumThani'),
                ]}
              />
            </View>
          </View>
        }
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
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  appBar: {
    paddingVertical: 16,
    paddingHorizontal: 16,
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

export default ServiceBrand;
