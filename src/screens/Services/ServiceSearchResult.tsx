import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme, useYupValidationResolver } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Chip, DefaultLayout, ProductCard } from '@/components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TSolution } from '@/model/solution';
import { IProductCard } from '@/model/product';
import { AppColor, ChipColor } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'ServiceSearchResult'
>;

const messageRequired = 'required';

const SolutionSchema: yup.ObjectSchema<TSolution> = yup.object().shape({
  address: yup.string().required(messageRequired),
  building: yup.string().required(messageRequired),
  village: yup.string().required(messageRequired),
  road: yup.string().required(messageRequired),
  postalCode: yup.string().required(messageRequired),
  province: yup.string().required(messageRequired),
  district: yup.string().required(messageRequired),
  subdistrict: yup.string().required(messageRequired),
  name: yup.string().required(messageRequired),
  company: yup.string().required(messageRequired),
  position: yup.string().required(messageRequired),
  department: yup.string().required(messageRequired),
  phone: yup.string().required(messageRequired),
  description: yup.string().required(messageRequired),
  photo: yup.string().required(messageRequired),
});

// @refresh reset
const ServiceSearchResult = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const methods = useForm<TSolution>({
    defaultValues: {},
    resolver: useYupValidationResolver(SolutionSchema),
  });

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchItem, setSearchItem] = useState<string[]>([
    'ระบบ EV Charger',
    'นนทบุรี',
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState<IProductCard[]>([
    {
      brand: 'MITSUBISHI',
      title: 'ติดตั้งระบบ PLC และ HDMI พร้อมอุปกรณ์ รุ่น GOT2000',
      description: 'ติดตั้งแล้ว จำนวน 106 ครั้ง',
      amount: 1232990,
      netAmount: 1232990,
      discount: -44,
      // service: true,
      // serviceBy: 'MIKITA',
      serviceCount: 100,
      image: Images.mock.solution,
    },
    {
      brand: 'MITSUBISHI',
      title: 'ติดตั้งระบบ PLC และ HDMI พร้อมอุปกรณ์ รุ่น GOT2000',
      description: 'ติดตั้งแล้ว จำนวน 106 ครั้ง',
      amount: 1232990,
      netAmount: 1232990,
      discount: -44,
      // service: true,
      // serviceBy: 'MIKITA',
      serviceCount: 100,
      image: Images.mock.solution,
    },
    {
      brand: 'MITSUBISHI',
      title: 'ติดตั้งระบบ PLC และ HDMI พร้อมอุปกรณ์ รุ่น GOT2000',
      description: 'ติดตั้งแล้ว จำนวน 106 ครั้ง',
      amount: 1232990,
      netAmount: 1232990,
      discount: -44,
      // service: true,
      // serviceBy: 'MIKITA',
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
        title="การค้นหา"
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
          <View
            style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}
          >
            <View style={[Layout.row, Layout.gap10]}>
              {searchItem.map((item, index) => (
                <Chip
                  key={index}
                  title={item}
                  color={ChipColor.primary}
                  onPress={() => {
                    // navigation.navigate('ProductDetail', { id: item.id });
                  }}
                />
              ))}
            </View>
            <Chip
              title="ค้นหาอีกครั้ง"
              startIcon={
                <Images.icons.search color="#475467" height="12" width="12" />
              }
            />
          </View>
        </View>

        <View style={[styles.container]}>
          <Text style={[Fonts.text18, Fonts.textBlack]}>ค้นพบ 5 รายการ</Text>
        </View>

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
    width: '100%',
    position: 'absolute',
    paddingVertical: 28,
    paddingHorizontal: 13,
    zIndex: 1,
  },
  itemsBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    gap: 10,
  },
});

export default ServiceSearchResult;
