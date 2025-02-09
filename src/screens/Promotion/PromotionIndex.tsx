import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AppBar,
  Button,
  DefaultLayout,
  PromotionCard,
  PromotionDetailModal,
  PromotionEmpty,
} from '@/components';
import { AppColor, ButtonSize, ButtonVariant } from '@/model/options';
import { ICouponTabs } from '@/model/coupon';
import { IPromotionCard } from '@/model/promotion';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<ProductParamsList, 'PromotionIndex'>;

// @refresh reset

const PromotionIndex = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');

  const { Layout, Images } = useTheme();
  // const dispatch = useDispatch();
  const ref = useRef<PagerView>(null);

  // state
  const [active, setActive] = React.useState<ICouponTabs>(
    ICouponTabs.AllDiscountCodes,
  );
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [data] = useState<IPromotionCard[]>([
    {
      id: 1,
      image: Images.promotions.c,
      title: t('promotionIndex.title'),
      description: t('promotionIndex.description'),
      button: (
        <Button
          title={t('promotionIndex.buttonTitle')}
          size={ButtonSize.mini}
          onPress={() => setIsDetail(true)}
        />
      ),
    },
    {
      id: 2,
      image: Images.promotions.c,
      title: t('promotionIndex.title'),
      description: t('promotionIndex.description'),
      button: (
        <Button
          title={t('promotionIndex.buttonTitle')}
          size={ButtonSize.mini}
        />
      ),
    },
    {
      id: 3,
      image: Images.promotions.c,
      title: t('promotionIndex.title'),
      description: t('promotionIndex.description'),
      button: (
        <Button
          title={t('promotionIndex.buttonTitle')}
          size={ButtonSize.mini}
        />
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
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('promotionIndex.promotion')}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={[Layout.bgWhite]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[Layout.row, Layout.gap20]}
        >
          <Button
            title={t('promotionIndex.codes')}
            variant={ButtonVariant.text}
            active={active === ICouponTabs.AllDiscountCodes}
            onPress={() => {
              setActive(ICouponTabs.AllDiscountCodes);
              ref.current?.setPage(ICouponTabs.AllDiscountCodes);
            }}
          />
          <Button
            title={t('promotionIndex.brand')}
            variant={ButtonVariant.text}
            active={active === ICouponTabs.Brand}
            onPress={() => {
              setActive(ICouponTabs.Brand);
              ref.current?.setPage(ICouponTabs.Brand);
            }}
          />
          <Button
            title={t('promotionIndex.minimum')}
            variant={ButtonVariant.text}
            active={active === ICouponTabs.Minimum}
            onPress={() => {
              setActive(ICouponTabs.Minimum);
              ref.current?.setPage(ICouponTabs.Minimum);
            }}
          />
          <Button
            title={t('promotionIndex.buy')}
            variant={ButtonVariant.text}
            active={active === ICouponTabs.BuyingWorthwhile}
            onPress={() => {
              setActive(ICouponTabs.BuyingWorthwhile);
              ref.current?.setPage(ICouponTabs.BuyingWorthwhile);
            }}
          />
        </ScrollView>
      </View>
      <PagerView
        ref={ref}
        style={Layout.fill}
        initialPage={active}
        onPageSelected={va => {
          setActive(va.nativeEvent.position);
        }}
      >
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
        <ScrollView
          key={ICouponTabs.Brand}
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.main,
          ]}
        >
          <PromotionEmpty />
        </ScrollView>
      </PagerView>
      <PromotionDetailModal
        modalVisible={isDetail}
        setModalVisible={setIsDetail}
      />
    </DefaultLayout>
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

export default PromotionIndex;
