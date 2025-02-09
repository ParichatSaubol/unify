import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  Carousel,
  Catalog,
  ChipImage,
  DefaultLayout,
  PromotionCard,
  Promotions,
  PromotionsPoint,
} from '@/components';
import { IPromotionCard } from '@/model/promotion';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<ProductParamsList, 'UnipointIndex'>;

// @refresh reset

const UnipointIndex = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  const insets = useSafeAreaInsets();

  // state
  const [menu] = useState([
    {
      icon: Images.icons.like,
      title: t('unipointIndex.recommended'),
      onPress: () => navigation.navigate('UnipointIndex'),
    },
    {
      icon: Images.icons.coupon2,
      title: t('unipointIndex.redeemFree'),
      onPress: () => navigation.navigate('UnipointIndex'),
    },
    {
      icon: Images.icons.discount,
      title: t('unipointIndex.discount'),
      onPress: () => navigation.navigate('UnipointIndex'),
    },
    {
      icon: Images.icons.reward,
      title: t('unipointIndex.winPrize'),
      onPress: () => navigation.navigate('UnipointIndex'),
    },
    {
      icon: Images.icons.product,
      title: t('unipointIndex.products'),
      onPress: () => navigation.navigate('UnipointIndex'),
    },
    {
      icon: Images.icons.other,
      title: t('unipointIndex.others'),
      onPress: () => navigation.navigate('UnipointIndex'),
    },
  ]);

  const [data] = useState<IPromotionCard[]>([
    {
      id: 1,
      image: Images.promotions.c,
      title: t('unipointIndex.discountCodeForBrandA'),
      point: 1500,
    },
    {
      id: 2,
      image: Images.promotions.c,
      title: t('unipointIndex.discountCodeForBrandA'),
      point: 1500,
    },
    {
      id: 3,
      image: Images.promotions.c,
      title: t('unipointIndex.discountCodeForBrandA'),
      point: 1500,
    },
    {
      id: 4,
      image: Images.promotions.c,
      title: t('unipointIndex.discountCodeForBrandA'),
      point: 1500,
    },
    {
      id: 5,
      image: Images.promotions.c,
      title: t('unipointIndex.discountCodeForBrandA'),
      point: 1500,
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
    <DefaultLayout>
      {/* <StatusBar /> */}
      <View
        style={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.bgPrimary,
          { paddingTop: insets.top },
        ]}
      >
        <View style={[Layout.main, Layout.gap20, styles.root]}>
          <View style={[Layout.center]}>
            <Images.icons.unipoint />
          </View>
          <View
            style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}
          >
            <View>
              <Text style={[Fonts.text21Bold, Fonts.textWhite]}>
                {t('unipointIndex.name')}
              </Text>
              <Text style={[Fonts.text18, Fonts.textWhite]}>
                {t('unipointIndex.company')}
              </Text>
              <View style={[Layout.alignItemsCenter, Layout.row, Layout.gap10]}>
                <Text style={[Fonts.text16, Fonts.textWhite]}>
                  {t('unipointIndex.manageAccount')}
                </Text>
                <Images.icons.circleArrowRight color="#FFF" />
              </View>
            </View>
            <View>
              <Text style={[Fonts.text24Med, Fonts.textWhite]}>
                {t('unipointIndex.unifyPoints')}
              </Text>
              <Text style={[Fonts.text48Med, Fonts.textWhite, Fonts.textRight]}>
                0
              </Text>
            </View>
          </View>
          <View
            style={[
              Layout.alignItemsCenter,
              Layout.row,
              Layout.gap10,
              Layout.justifyContentEnd,
            ]}
          >
            <Images.icons.reload color="#FFF" />
            <Text style={[Fonts.text16, Fonts.textWhite]}>
              {t('unipointIndex.lastUpdated')}
            </Text>
          </View>
          <View style={styles.menu} />
        </View>
        {/* <View></View> */}
      </View>
      <View style={[styles.menuArea]}>
        <View style={[styles.menuBox]}>
          <ChipImage
            title={t('unipointIndex.exchangeHistory')}
            logo={<Images.promotions.icons.history />}
          />
          <ChipImage
            title={t('unipointIndex.myCoupons')}
            logo={<Images.promotions.icons.coupon />}
          />
          <ChipImage
            title={t('unipointIndex.redeemedPrivileges')}
            logo={<Images.promotions.icons.reward />}
          />
        </View>
        {/*  */}
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[]}>
          <Carousel />
        </View>
        <View style={[Layout.main, Layout.gap10, Layout.bgWhite]}>
          <Catalog method="discountCoupon" />
          <Promotions method="default" />
        </View>
        <View style={[Layout.main, Layout.gap10, Layout.bgWhite]}>
          <Catalog method="allPrivileges" />
          <PromotionsPoint method="default" />
        </View>
        <View style={[Layout.main, Layout.gap10, Layout.bgWhite]}>
          <Catalog method="newPrivileges" />
          <PromotionsPoint method="default" />
        </View>
        <View style={[Layout.main, Layout.bgWhite]}>
          <View style={styles.subMenu}>
            {menu.map((item, index) => (
              <>
                <TouchableOpacity
                  key={`menu-${index}`}
                  style={[Layout.alignItemsCenter, Layout.gap5]}
                >
                  {item.icon && <item.icon color="#98A2B3" />}
                  <Text style={[Fonts.text16Med]}>
                    {item.title && item.title}
                  </Text>
                </TouchableOpacity>
                {index < menu.length - 1 && (
                  <View
                    style={styles.subMenuDivider}
                    key={`menu-divider-${index}`}
                  />
                )}
              </>
            ))}
          </View>

          <View style={styles.main}>
            {data.map((item, index) => (
              <TouchableOpacity
                style={styles.mainItem}
                key={`promotion-card-${index}`}
              >
                <PromotionCard {...item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/*  */}
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
  },
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  menu: {
    height: 23,
  },
  menuArea: {
    position: 'relative',
    top: -39,
    marginBottom: -23,
    width: '100%',
    paddingHorizontal: 16,
    gap: 20,
  },
  menuBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  subMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
    marginVertical: 19,
  },
  subMenuDivider: {
    backgroundColor: '#EAECF0',
    width: 1,
    height: '100%',
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

export default UnipointIndex;
