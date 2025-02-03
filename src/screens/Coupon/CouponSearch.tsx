import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, Input, PromotionCard } from '@/components';
import { AppColor, ButtonColor, ButtonSize } from '@/model/options';
import { ICouponTabs } from '@/model/coupon';
import { IPromotionCard } from '@/model/promotion';

type Props = NativeStackScreenProps<ProductParamsList, 'CouponSearch'>;

// @refresh reset
const CouponIndex = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');

  const { Layout, Images } = useTheme();
  // const dispatch = useDispatch();

  // state
  const [data] = useState<IPromotionCard[]>([
    {
      id: 1,
      image: Images.promotions.c,
      title: t('couponSearch.acer'),
      description: t('couponSearch.description'),
      button: (
        <Button
          title={t('couponSearch.buttonTitle')}
          size={ButtonSize.mini}
          disable
        />
      ),
    },
    {
      id: 2,
      image: Images.promotions.c,
      title: t('couponSearch.acer'),
      description: t('couponSearch.description'),
      button: (
        <Button title={t('couponSearch.buttonTitle')} size={ButtonSize.mini} />
      ),
    },
    {
      id: 3,
      image: Images.promotions.c,
      title: t('couponSearch.acer'),
      description: t('couponSearch.description'),
      button: (
        <Button
          title={t('couponSearch.buttonTitle2')}
          size={ButtonSize.mini}
          colors={ButtonColor.secondary}
        />
      ),
    },
    {
      id: 4,
      image: Images.promotions.c,
      title: t('couponSearch.acer'),
      description: t('couponSearch.description'),
      button: (
        <Button title={t('couponSearch.buttonTitle')} size={ButtonSize.mini} />
      ),
    },
    {
      id: 5,
      image: Images.promotions.c,
      title: t('couponSearch.acer'),
      description: t('couponSearch.description'),
      button: (
        <Button title={t('couponSearch.buttonTitle')} size={ButtonSize.mini} />
      ),
    },
  ]);
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
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={[Layout.main, Layout.gap20, Layout.bgWhite]}>
        <AppBar
          color={AppColor.white}
          title={t('couponSearch.title')}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={[Layout.main]}>
        <View style={[Layout.row, Layout.gap10]}>
          <View style={[Layout.fill]}>
            <Input
              placeholder={t('couponSearch.placeholder')}
              error
              helperText={t('couponSearch.invalidCode')}
            />
          </View>
          <View>
            <Button
              title={t('couponSearch.searchButton')}
              size={ButtonSize.small}
            />
          </View>
        </View>
      </View>
      <ScrollView
        key={ICouponTabs.AllDiscountCodes}
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
        ]}
      >
        <View style={styles.main}>
          {data.map((item, index) => (
            <View style={styles.mainItem} key={`promotion-card-${index}`}>
              <PromotionCard {...item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    gap: 20,
  },
  mainItem: {
    width: 180,
  },
});

export default CouponIndex;
