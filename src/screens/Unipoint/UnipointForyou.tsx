import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'UnipointForyou'>;

// @refresh reset

const UnipointForyou = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // state
  const [data] = useState([
    {
      id: 1,
      title: 'อันดามันตรา รีสอร์ต แอนด์ วิลลา ภูเก็ต พูลวิลลา 2 ห้องนอน',
      detail: 'Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม',
      image: Images.mock.promotionPoint,
      isActive: true,
    },
    {
      id: 2,
      title: 'ส่วนลดเมื่อซื้อสินค้า UNIFY มูลค่า 500 บาท',
      detail:
        'Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม...',
      image: Images.mock.promotionPoint,
      isActive: true,
    },
    {
      id: 3,
      title: 'iPhone 14 Pro Max (256GB) สีดำกราฟไฟท์',
      detail:
        'Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม...',
      image: Images.mock.promotionPoint,
      isActive: true,
    },
    {
      id: 4,
      title: 'Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท',
      detail:
        'Gift Voucher Card จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม จากสตาร์บัคส์ มูลค่า 200 บาท สำหรับดื่ม...',
      image: Images.mock.promotionPoint,
      isActive: false,
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
        title="สิทธิพิเศษของคุณ"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap10,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
        ]}
      >
        {data.map((item, index) => (
          <View
            style={[
              styles.box,
              item.isActive ? styles.isActive : styles.inActive,
            ]}
            key={`reward-list-${index}`}
          >
            <Image source={Images.mock.promotionPoint} style={styles.image} />
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18, Fonts.textBlack]} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={[Fonts.text16]} numberOfLines={2}>
                {item.detail}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  box: {
    flexDirection: 'row',
    gap: 16,
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 10,
    maxHeight: 80,
  },
  isActive: {
    borderRightColor: '#00D504',
    borderRightWidth: 8,
  },
  inActive: {
    borderRightColor: '#667085',
    borderRightWidth: 8,
  },
  image: {
    width: 64,
    height: '100%',
  },
});

export default UnipointForyou;
