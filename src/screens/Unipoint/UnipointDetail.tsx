import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, Chip, DefaultLayout } from '@/components';
import { AppColor, ButtonVariant, ChipColor } from '@/model/options';
import { IPromotionCard } from '@/model/promotion';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<ProductParamsList, 'UnipointDetail'>;

// @refresh reset

const UnipointDetail = ({ navigation }: Props): JSX.Element => {
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // state
  const sheetRef = useRef<BottomSheet>(null);
  const [isRedeem, setIsRedeem] = useState<boolean>(false); // แสดงรายละเอียดสินค้า
  const [data] = useState<IPromotionCard>({
    id: 1,
    image: Images.promotions.c,
    title: t('unipointDetail.details'),
    point: 1500,
    details: t('unipointDetail.details1', { returnObjects: true }),
  });

  // handle callback
  const handleSheetChange = useCallback((index: number) => {
    if (index < 0) {
      setIsRedeem && setIsRedeem(false);
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1}>
        <View style={styles.overscreen} />
      </BottomSheetBackdrop>
    ),
    [],
  );

  const handleOnRedeem = () => {
    setIsRedeem(true);
    sheetRef.current?.snapToIndex(0);
  };

  const init = async (): Promise<void> => {
    sheetRef.current?.close();
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 2000),
    // );
    // onChangeTheme({ darkMode: true });
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  useEffect(() => {
    if (isRedeem) {
      sheetRef.current?.snapToIndex(0);
    }
  }, [isRedeem]);

  useFocusEffect(
    useCallback(() => {
      return () => sheetRef.current?.close();
    }, []),
  );

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('unipointDetail.redeem')}
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
        <View style={[Layout.bgWhite, styles.main]}>
          <Image
            resizeMode="contain"
            source={Images.mock.promotionPoint}
            style={{ width: '100%', height: 180 }}
          />
          <View style={styles.body}>
            <Text style={[Fonts.text18]}>
              {t('unipointDetail.giftVoucher')}
            </Text>
          </View>
          <View style={[Layout.row, Layout.gap5, Layout.justifyContentCenter]}>
            <View style={styles.box}>
              <Text style={[Fonts.text14]}>
                {t('unipointDetail.redeemRightsLeft')}
              </Text>
              <Text style={[Fonts.text18]}>{t('unipointDetail.right')}</Text>
              <Text style={[Fonts.text14, Fonts.textRed]}>
                {t('unipointDetail.right1')}
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={[Fonts.text14]}>
                {t('unipointDetail.pointsUsed')}
              </Text>
              <Text style={[Fonts.text18]}>{t('unipointDetail.point')}</Text>
            </View>
            <View style={styles.box}>
              <Text style={[Fonts.text14]}>
                {t('unipointDetail.expirationDate')}
              </Text>
              <Text style={[Fonts.text21, Fonts.textRed]}>
                {t('unipointDetail.date')}
              </Text>
              <Text style={[Fonts.text14]}>
                {t('unipointDetail.orExpired')}
              </Text>
            </View>
          </View>
          <Button
            title={t('unipointDetail.redeem')}
            onPress={() => {
              handleOnRedeem();
            }}
          />

          <View style={styles.body}>
            <View style={styles.divider} />
            <View style={[Layout.row, Layout.gap20]}>
              <Chip
                title={t('unipointDetail.details')}
                color={ChipColor.primary}
              />
              <Chip title={t('unipointDetail.redeemCondition')} />
            </View>
            <Text style={[Fonts.text16, Fonts.textBlack]}>
              {t('unipointDetail.voucher')}
            </Text>
            <View>
              {data.details?.map((item, index) => (
                <View style={[Layout.row, Layout.gap5]} key={index}>
                  <Text>{'\u2022'}</Text>
                  <Text style={[Fonts.text18]}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['40%']}
        onChange={handleSheetChange}
        onClose={() => {
          isRedeem && setIsRedeem(false);
        }}
        index={0}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView style={[styles.container]}>
          <View style={[Layout.gap10]}>
            <Text
              style={[Fonts.text28Light, Fonts.textBlack, Fonts.textCenter]}
            >
              {t('unipointDetail.redeemConfirm')}
            </Text>
            <Text style={[Fonts.text16]}>{t('unipointDetail.gift')}</Text>
            <Text style={[Fonts.text21, Fonts.textPrimary]}>
              {t('unipointDetail.yourPoints')}
            </Text>
            <View style={[Layout.row, Layout.gap10]}>
              <View style={[Layout.fill]}>
                <Button
                  title={t('unipointDetail.cancel')}
                  variant={ButtonVariant.outlined}
                />
              </View>
              <View style={[Layout.fill]}>
                <Button title={t('unipointDetail.redeem')} />
              </View>
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'column',
  },
  main: {
    paddingVertical: 20,
    gap: 16,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  box: {
    backgroundColor: '#EAECF0',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
    borderRadius: 4,
  },
  body: {
    paddingHorizontal: 24,
    gap: 16,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#EAECF0',
  },
  overscreen: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default UnipointDetail;
