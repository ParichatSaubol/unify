import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AppBar,
  ButtonIcon,
  Carousel,
  CartBooking,
  DefaultLayout,
  ServiceDetail as Detail,
} from '@/components';
import { IServiceDetail } from '@/model/service';
import {
  AppColor,
  ButtonIconColors,
  ButtonIconVariant,
  CarouselSize,
} from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'ServiceDetail'>;

// @refresh reset
const ServiceDetail = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState<IServiceDetail>({
    id: '1',
    title:
      'บริการล้างแอร์แบบแขวน/ตั้งพื้น ขนาด 12,000 - 48,000 BTU บริการล้างแอร์แบบแขวน/ตั้งพื้น ขนาด 12,000 - 48..',
    image: Images.service.detailMock,
    star: 4,
    soldCount: 12800,
    netAmount: 1029090,
    amount: undefined,
    detail: [
      'ติดตั้งโดยช่างที่ชำนาญการ',
      'ช่างผ่านการรับรองความรู้ความสามารถช่างไฟฟ้าภายในอาคาร',
      'รับประกันงานติดตั้ง 365 วัน',
      'บริการติดตั้งเฉพาะในเขต กทม.ปริมณฑล',
    ],
    standardFree: [
      'เบรกเกอร์พร้อมฝาครอบ 1 ชุด ขนาด 220 โวลต์',
      'ขายางรอง Condensing 1 ชุด',
      'ท่อน้ำทิ้ง PVC ยาวไม่เกิน 4 เมตร',
      'สายไฟฟ้า ระหว่าง คอยล์ร้อน-คอลย์เย็น ยาวไม่เกิน 10 เมตร',
      'สายดิน ยาวไม่เกิน 4 เมตร',
    ],
    standardCost: [
      'รางครอบท่อเมตรละ 350 บาท รวมข้อต่อ',
      'าแขวนแบบห้อย ROD+ยางแบน ขนาดใหญ่ (18-24 kBtu/h) ชุดละ 1500 บาท',
      'ท่อน้ำทิ้ง PVC ยาวไม่เกิน 4 เมตร',
      'สายไฟฟ้า ระหว่าง คอยล์ร้อน-คอลย์เย็น ยาวไม่เกิน 10 เมตร',
      'สายดิน ยาวไม่เกิน 4 เมตร',
    ],
    serviceArea: [
      'กรุงเทพมหานครและปริมณฑล - สมุทรปราการ, ปทุมธานี, นนทบุรี, กรุงเทพมหานคร, สมุทรสาคร, นครปฐม',
      'ภาคเหนือ - อุตรดิตถ์, ลำปาง',
      'ภาคใต้ - สงขลา, ยะลา, ภูเก็ต, พัทลุง, ปัตตานี, นราธิวาส, นครศรีธรรมราช, ตรัง, ชุมพร',
      'ภาคกลาง - อุทัยธานี, สุโขทัย, อ่างทอง, สิงห์บุรี, สมุทรสงคราม, ลพบุรี, พระนครศรีอยุธยา',
      'ภาคตะวันออก - ระยอง, ปราจีนบุรี, ชลบุรี, ฉะเชิงเทรา, จันทบุรี',
      'ภาคตะวันออกเฉียงเหนือ - อุบลราชธานี, อุดรธานี, อำนาจเจริญ, สุรินทร์, ศรีสะเกษ, ร้อยเอ็ด, ยโสธร, มุกดาหาร, นครพนม, ชัยภูมิ',
      'ภาคตะวันตก - ราชบุรี, เพชรบุรี',
    ],
    note: [
      'ติดตั้งบริการแค่เพียง1จุด กรณีย้ายติดตั้งต้องเสียค่าใช้จ่ายเพิ่ม',
      'การติดท่อน้ำยา และสายไฟฟ้า ติดลักษณะเดินลอยผนังเท่านั้น',
      'ความสูงหน้างาน ไม่เกิน 8 เมตร กรณีต้องใช้นั่งร้านลูกค้าฝ่ายจัดเช่านั่งให้กับทางบริษัท',
      'อุปกรณ์มาตรฐาน ไม่สามารถเปลี่ยน,ตัด หรือขอคืนแทนเงินสดหรือส่วนลดได้',
      'งดให้บริการในสถานที่ไม่สะดวกระหว่างช่างฯปฎิบัติงาน',
    ],
    model: [
      'FX2N-49ER-ES-01',
      'FX2N-49ER-ES-02',
      'FX2N-49ER-ES-03',
      'FX2N-49ER-ES-04',
      'FX2N-49ER-ES-05',
      'FX2N-49ER-ES-06',
    ],
  });

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        onPress={() => {
          navigation.goBack();
        }}
        right={
          <View
            style={[
              Layout.row,
              Layout.gap10,
              Layout.alignItemsCenter,
              Layout.justifyContentEnd,
            ]}
          >
            <ButtonIcon
              icon={
                <Images.icons.favorite
                  key={'favorite'}
                  color={'black'}
                  height={18}
                  width={18}
                />
              }
              colors={ButtonIconColors.white}
              variant={ButtonIconVariant.box}
            />
            <ButtonIcon
              icon={
                <Images.icons.share
                  key={'share'}
                  color={'black'}
                  height={18}
                  width={18}
                />
              }
              colors={ButtonIconColors.white}
              variant={ButtonIconVariant.box}
            />
          </View>
        }
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[styles.container]}>
          <Carousel
            isPadding={false}
            isRadius={false}
            hiddentScrollPos
            fullWidth
            size={CarouselSize.large}
            dataImages={[
              Images.service.detailMock,
              Images.service.detailMock,
              Images.service.detailMock,
            ]}
          />
          <Detail {...detail} />
        </View>
      </ScrollView>
      <CartBooking {...detail} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  appBar: {
    width: '100%',
    position: 'absolute',
    paddingVertical: 16,
    paddingHorizontal: 16,
    zIndex: 1,
  },
});

export default ServiceDetail;
