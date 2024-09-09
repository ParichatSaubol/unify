import React, { FunctionComponent, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import ButtonIcon from '../Button/ButtonIcon';

interface Props {
  title?: string;
  setAddon: (item: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServiceOptionDetail: FunctionComponent<Props> = ({ title, setAddon }) => {
  const { Layout, Fonts, Images } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [datail, setDatail] = useState({
    id: 1,
    title: 'ชื่อสินค้า',
    details: [
      'เบรกเกอร์พร้อมฝาครอบ 1 ชุด ขนาด 220 โวลต์',
      'ขายางรอง Condensing 1 ชุด',
      'ท่อน้ำทิ้ง PVC ยาวไม่เกิน 4 เมตร',
      'สายไฟฟ้า ระหว่าง คอยล์ร้อน-คอลย์เย็น ยาวไม่เกิน 10 เมตร',
      'สายดิน ยาวไม่เกิน 4 เมตร',
    ],
    addon: [
      'รางครอบท่อเมตรละ 350 บาท รวมข้อต่อ',
      'ขาแขวนแบบห้อย ROD+ยางแบน ขนาดใหญ่ (18-24 kBtu/h) ชุดละ 1,500 บาท',
    ],
  });

  return (
    <View style={[styles.header]}>
      <View style={[Layout.main]}>
        <Text style={[Fonts.text24Med, Fonts.textCenter]}>
          รายละเอียดงานบริการ
        </Text>
        <View style={styles.buttonClose}>
          <ButtonIcon
            icon={<Images.icons.arrowLeft color="#475467" />}
            onPress={() => {
              setAddon(false);
            }}
          />
        </View>
      </View>
      <View style={styles.divider} />
      {/* Detail Product */}
      <ScrollView style={styles.container}>
        <View style={[styles.product, Layout.col, Layout.gap10]}>
          <Text style={[Fonts.text21]}>
            บริการติดตั้งสวิสซ์ปุ่มฉุกเฉิน แบรนด์ IDEC ประเมินหน้างาน
            (ไม่รวมค่าอุปกรณ์)
          </Text>
          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            อุปกรณ์มาตรฐานพร้อมติดตั้ง (ฟรี)
          </Text>
          {datail.details?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}

          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            อุปกรณ์มาตรฐานส่วนเพิ่ม (มีค่าใช้จ่าย) สามารถติดต่อซื้อจากช่างได้เลย
          </Text>
          {datail.addon?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}
          {/*  */}
        </View>
      </ScrollView>
    </View>
  );
};

ServiceOptionDetail.defaultProps = {
  title: 'ชื่อสินค้า',
};

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#F2F4F7',
  },
  root: {
    borderTopColor: '#EAECF0',
    borderTopWidth: 2,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderColor: '#EAECF0',
    borderWidth: 2,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
  },
  buttonClose: {
    position: 'absolute',
    top: 20,
    left: 5,
  },
  model: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
    gap: 5,
  },
  serviceOptions: {
    flexDirection: 'row',
    gap: 10,
  },
  product: {
    padding: 16,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default ServiceOptionDetail;
