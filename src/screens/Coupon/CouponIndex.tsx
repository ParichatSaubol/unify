import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, CouponEmpty, PromotionCard } from '@/components';
import {
  AppColor,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/model/options';
import { ICouponForMeTabs } from '@/model/coupon';
import { IPromotionCard } from '@/model/promotion';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<ProductParamsList, 'CouponIndex'>;

// @refresh reset

const CouponIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);

  const { Layout, Images } = useTheme();
  // const dispatch = useDispatch();
  const ref = useRef<PagerView>(null);

  // state
  const [active, setActive] = React.useState<ICouponForMeTabs>(
    ICouponForMeTabs.AllDiscountCodesForMe,
  );
  const [data] = useState<IPromotionCard[]>([
    {
      id: 1,
      image: Images.promotions.c,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้า แบรนด์ ACER',
      description: 'ลด 300 บาท เมื่อซื้อสินค้า แบรนด์ ACER ขั้นต่ำ ฿300',
      button: <Button title="ใช้คูปอง" size={ButtonSize.mini} disable />,
    },
    {
      id: 2,
      image: Images.promotions.c,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้า แบรนด์ ACER',
      description: 'ลด 300 บาท เมื่อซื้อสินค้า แบรนด์ ACER ขั้นต่ำ ฿300',
      button: (
        <Button
          title="หมดอายุ"
          size={ButtonSize.mini}
          colors={ButtonColor.disabled}
        />
      ),
    },
    {
      id: 3,
      image: Images.promotions.c,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้า แบรนด์ ACER',
      description: 'ลด 300 บาท เมื่อซื้อสินค้า แบรนด์ ACER ขั้นต่ำ ฿300',
      button: <Button title="ใช้คูปอง" size={ButtonSize.mini} />,
    },
    {
      id: 4,
      image: Images.promotions.c,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้า แบรนด์ ACER',
      description: 'ลด 300 บาท เมื่อซื้อสินค้า แบรนด์ ACER ขั้นต่ำ ฿300',
      button: <Button title="ใช้คูปอง" size={ButtonSize.mini} />,
    },
    {
      id: 5,
      image: Images.promotions.c,
      title: 'โค้ดส่วนลดเมื่อซื้อสินค้า แบรนด์ ACER',
      description: 'ลด 300 บาท เมื่อซื้อสินค้า แบรนด์ ACER ขั้นต่ำ ฿300',
      button: <Button title="ใช้คูปอง" size={ButtonSize.mini} />,
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
          title="โค้ดส่วนลดของฉัน"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={[Layout.bgWhite]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[Layout.row, Layout.gap20]}
        >
          <Button
            title="คูปองส่วนลดทั้งหมด"
            variant={ButtonVariant.text}
            active={active === ICouponForMeTabs.AllDiscountCodesForMe}
            onPress={() => {
              setActive(ICouponForMeTabs.AllDiscountCodesForMe);
              ref.current?.setPage(ICouponForMeTabs.AllDiscountCodesForMe);
            }}
          />
          <Button
            title="โค้ดที่ใช้แล้ว"
            variant={ButtonVariant.text}
            active={active === ICouponForMeTabs.UsedCode}
            onPress={() => {
              setActive(ICouponForMeTabs.UsedCode);
              ref.current?.setPage(ICouponForMeTabs.UsedCode);
            }}
          />
          <Button
            title="โค้ดที่หมดอายุ"
            variant={ButtonVariant.text}
            active={active === ICouponForMeTabs.ExpiredCode}
            onPress={() => {
              setActive(ICouponForMeTabs.ExpiredCode);
              ref.current?.setPage(ICouponForMeTabs.ExpiredCode);
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
          key={ICouponForMeTabs.AllDiscountCodesForMe}
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
          key={ICouponForMeTabs.UsedCode}
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.main,
          ]}
        >
          <CouponEmpty />
        </ScrollView>
        <ScrollView
          key={ICouponForMeTabs.ExpiredCode}
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
            Layout.main,
          ]}
        >
          <CouponEmpty />
        </ScrollView>
      </PagerView>
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
