import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  InputSearch,
  Button,
  Chip,
  Catalog,
  ProductCatalog,
  ProductRecommend,
  DefaultLayout,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { ButtonColor, ButtonSize, ProductCatalogMethod } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'SearchIndex'>;

// @refresh reset
const SearchIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  const { Fonts, Layout, Images } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [history, setHistory] = useState<string[]>([
    'Mitsubishi',
    'TRUSCO',
    t('searchIndex.scada'),
    'AC SERVO',
    'PLC',
    t('searchIndex.switch'),
    t('searchIndex.display'),
    'IDEC',
    t('searchIndex.spraying'),
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
        onPress={() => {
          navigation.goBack();
        }}
        right={
          <View style={[Layout.fill]}>
            <InputSearch placeholder={t('searchIndex.placeholder')} />
          </View>
        }
      />
      <ScrollView>
        <View style={[Layout.gap20, Layout.main, Layout.bgWhite]}>
          <View
            style={[
              Layout.row,
              Layout.scrollSpaceBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Text style={[Fonts.text24Med]}>{t('searchIndex.searches')}</Text>
            <Button
              title={t('searchIndex.clear')}
              colors={ButtonColor.solid}
              size={ButtonSize.mini}
              endIcon={<Images.icons.trashcan />}
            />
          </View>
          <View style={styles.history}>
            {history.map((item, index) => (
              <Chip key={index} title={item} />
            ))}
          </View>

          <Catalog method="unisolution" />
          <ProductCatalog method={ProductCatalogMethod.solution} />

          <Catalog method="unilearn" />
          <ProductCatalog method={ProductCatalogMethod.learn} />

          <Catalog method="recommend" />
          <ProductRecommend />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: { paddingBottom: 0 },
  history: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, columnGap: 10 },
});

export default SearchIndex;
