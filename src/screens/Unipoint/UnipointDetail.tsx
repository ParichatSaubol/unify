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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // state
  const sheetRef = useRef<BottomSheet>(null);
  const [isRedeem, setIsRedeem] = useState<boolean>(false); // แสดงรายละเอียดสินค้า
  const [data] = useState<IPromotionCard>({
    id: 1,
    image: Images.promotions.c,
    title: 'โค้ดส่วนลดเมื่อซื้อสินค้าแบรนด์ A',
    point: 1500,
    details: [
      'บริษัทขอสงวนสิทธิ์จำหน่ายให้เฉพาะกลุ่มลูกค้าที่สั่งซื้อในนามบริษัทเท่านั้น',
      'จำหน่ายขั้นต่ำ 50,000 บาทต่อครั้ง',
      'เติมเงินได้ตั้งแต่ 100 – 20,000 บาท ต่อใบ ***บัตรสตาร์บัคส์ไม่มีภาษีมูลค่าเพิ่ม',
      'สะสมยอดสั่งซื้อเพื่อรับส่วนลด',
      'จำหน่ายขั้นต่ำ 50,000 บาทต่อครั้ง',
      'บริษัทขอสงวนสิทธิ์จำหน่ายให้เฉพาะกลุ่มลูกค้าที่สั่งซื้อในนามบริษัทเท่านั้น',
      'เติมเงินได้ตั้งแต่ 100 – 20,000 บาท ต่อใบ ***บัตรสตาร์บัคส์ไม่มีภาษีมูลค่าเพิ่ม',
      'เติมเงินได้ตั้งแต่ 100 – 20,000 บาท ต่อใบ ',
    ],
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
        title="แลกคะแนน"
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
              Starbuck e-coupon มูลค่า 200 บาท (ใช้สิทธิ์ได้ที่สตาร์บัคส์
              ทุกสาขา) เงื่อนไขและรายละเอียดเป็นไปตามที่บริษัทกำหนด
            </Text>
          </View>
          <View style={[Layout.row, Layout.gap5, Layout.justifyContentCenter]}>
            <View style={styles.box}>
              <Text style={[Fonts.text14]}>สิทธิ์คงเหลือ</Text>
              <Text style={[Fonts.text18]}>169 สิทธิ์</Text>
              <Text style={[Fonts.text14, Fonts.textRed]}>
                จาก 1,900 สิทธิ์
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={[Fonts.text14]}>คะแนนที่ใช้</Text>
              <Text style={[Fonts.text18]}>1,500 คะแนน</Text>
            </View>
            <View style={styles.box}>
              <Text style={[Fonts.text14]}>วันหมดอายุ</Text>
              <Text style={[Fonts.text21, Fonts.textRed]}>31 ก.ค 2566</Text>
              <Text style={[Fonts.text14]}>(หรือจนกว่าคูปองจะหมด)</Text>
            </View>
          </View>
          <Button
            title="แลกคะแนน"
            onPress={() => {
              handleOnRedeem();
            }}
          />

          <View style={styles.body}>
            <View style={styles.divider} />
            <View style={[Layout.row, Layout.gap20]}>
              <Chip title="รายละเอียด" color={ChipColor.primary} />
              <Chip title="เงื่อนไขการแลกคะแนน" />
            </View>
            <Text style={[Fonts.text16, Fonts.textBlack]}>
              Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท
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
              ยืนยันการแลกคะแนน
            </Text>
            <Text style={[Fonts.text16]}>
              Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท ใช้ 1,500
              คะแนนใช้ได้ทุก สาขาที่สตาร์บัคส์
            </Text>
            <Text style={[Fonts.text21, Fonts.textPrimary]}>
              คะแนนของคุณ 12,879
            </Text>
            <View style={[Layout.row, Layout.gap10]}>
              <View style={[Layout.fill]}>
                <Button title="ยกเลิก" variant={ButtonVariant.outlined} />
              </View>
              <View style={[Layout.fill]}>
                <Button title="แลกคะแนน" />
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
