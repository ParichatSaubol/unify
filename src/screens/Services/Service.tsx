import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, InputSelection, ProductCard } from '@/components';
import { IProductCard } from '@/model/product';
import { AppColor, InputSelectionVariant } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'Service'>;

// @refresh reset
const Service = ({ navigation }: Props): JSX.Element => {
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
      title: t('service.title'),
      description: t('service.description'),
      amount: 1000000,
      netAmount: 1232990,
      discount: -44,
      serviceCount: 100,
      image: Images.mock.solution,
    },
    {
      brand: 'MITSUBISHI',
      title: t('service.title'),
      description: t('service.description'),
      amount: 1232990,
      serviceCount: 100,
      image: Images.mock.solution,
    },
    {
      brand: 'MITSUBISHI',
      title: t('service.title'),
      description: t('service.description'),
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
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={styles.appBar}>
        <AppBar
          color={AppColor.white}
          title={t('service.service')}
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
              placeholder={t('service.placeholder')}
              variant={InputSelectionVariant.outlined}
              value={search}
              onChange={setSearch}
              option={[
                t('service.spraying'),
                t('service.water'),
                t('service.water'),
              ]}
            />
          </View>
        </View>
        {
          <View style={[styles.container]}>
            <Text style={[Fonts.text18]}>{t('service.selectService')}</Text>
            <View style={styles.inputBox}>
              <InputSelection
                startIcon={<Images.icons.location color={Colors.gray600} />}
                placeholder={t('service.selectService')}
                variant={InputSelectionVariant.outlined}
                value={localtion}
                onChange={setLocaltion}
                option={[
                  t('service.bangkok'),
                  t('service.nonthaburi'),
                  t('service.pathumThani'),
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
    </SafeAreaView>
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

export default Service;
