import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'ProfilePolicy'>;

// @refresh reset
const ProfilePolicy = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
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
        title="นโยบายความเป็นส่วนตัว"
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
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text16]}>
            {'\t'}บริษัท ทีเคเค คอร์ปอเรชัน จำกัด (มหาชน) เคารพในสิทธิความเป็น
            ส่วนตัวของผู้เข้าชมและ/หรือผู้ใช้เว็บไซต์
            (“ผู้เข้าชม/ผู้ใช้เว็บไซต์”) และตระหนัก ถึงความคาดหวังของผู้
            เข้าชม/ผู้ใช้เว็บไซต์ว่าข้อมูล (“ข้อมูล”)
            ที่ผู้เข้าชม/ผู้ใช้เว็บไซต์ได้ให้ไว้กับ
            ทีเคเคผ่านเว็บไซต์นี้(“เว็บไซต์”)จะได้รับความคุ้มครอง
            อย่างเหมาะสมทีเคเคจึงขอประกาศนโยบายการใช้คุกกี้(“นโยบายการใช้คุกกี้”)
            สำหรับเว็บไซต์นี้
          </Text>
          <Text style={[Fonts.text16, Fonts.textBlack]}>การใช้คุกกี้</Text>
          <Text style={[Fonts.text16]}>
            {'\t'}คุกกี้ คือ ไฟล์ข้อความขนาดเล็ก ซึ่งประกอบด้วยตัวอักษรและตัวเลข
            ที่ ทีเคเค
            จัดเก็บไว้ในเบราว์เซอร์หรือฮาร์ดดิสก์ของคอมพิวเตอร์ของท่าน,แท็บเล็ตของท่านหรืออุปกรณ์สื่อสารพกพาของท่านทีเคเคอาจเก็บข้อมูลของท่านผ่านทางคุกกี้เหล่านี้
            เมื่อท่านเข้าชมเว็บไซต์ของเรา
          </Text>
          <Text style={[Fonts.text16, Fonts.textBlack]}>
            1.คุกกี้ที่มีความจำเป็น (Necessary Cookies)
          </Text>
          <Text style={[Fonts.text16]}>
            {'\t'}คุกกี้ประเภทนี้มีความจำเป็นอย่างยิ่งต่อการทำงานของเว็บไซต์
            ได้แก่ คุกกี้ที่ทำให้เว็บไซต์สามารถทำหน้าที่ขั้นพื้นฐาน เช่น
            การเลื่อนสำรวจหน้าเว็บ
            หรือทำให้ผู้เข้าชมผู้ใช้เว็บไซต์เข้าสู่ระบบและสามารถเข้าถึงส่วนของเว็บไซต์ที่ถูกสงวนไว้ให้ใช้ได้เฉพาะสมาชิกเท่านั้นเว็บไซต์จะไม่สามารถทำงานอย่างถูกต้องได้เลยหากไม่มีการเก็บรวบรวมคุกกี้เหล่านี้ทีเคเคจึงไม่มีความจำเป็นต้องขอความยินยอมจากท่านในการจัดวางคุกกี้เหล่านี้ลงในอุปกรณ์ของท่านคุกกี้ประเภทนี้ไม่ได้มีการจัดเก็บข้อมูลซึ่งสามารถระบุตัวตนของท่านได้อย่างเฉพาะเจาะจงแต่อย่างใด
          </Text>
          <Text style={[Fonts.text16]}>
            รายละเอียดคุกกี้แต่ละประเภทของทีเคเค
            ที่อาจจะถูกใช้งานในเว็บไซต์มีดังนี้
          </Text>
          <Text style={[Fonts.text16, Fonts.textBlack]}>
            2.คุกกี้ประสิทธิภาพ (Performance Cookies)
          </Text>
          <Text style={[Fonts.text16]}>
            {'\t'}
            คุกกี้ประเภทนี้ทำให้ทีเคเคสามารถนับจำนวนผู้เข้าชมเว็บไซต์และแหล่งที่มาของ
            ผู้เข้าชมเหล่านั้นทำให้เข้าใจว่าผู้เข้าชม/ผู้ใช้มีการปฏิสัมพันธ์กับเว็บไซต์
            อย่างไรบ้าง และหน้าเว็บใดที่ได้รับความนิยมมากที่สุดหรือน้อยที่สุด
            โดยการ
            เก็บรวบรวมและการรายงานข้อมูลโดยไม่ระบุตัวตนของท่านอย่างไม่เฉพาะ
            เจาะจงแก่ทีเคเคช่วยให้ทีเคเคสามารถพัฒนาและมอบประสบการณ์การใช้งานเว็บไซต์ที่ดีกว่าแก่ท่านหากท่านไม่อนุญาตให้ใช้คุกกี้ประเภทนี้ทีเคเคจะไม่อาจทราบได้ว่าท่านเคยมาเข้าชมเว็บไซต์ของ
            ทีเคเค เมื่อใดและไม่สามารถติดตาม
            ประสิทธิภาพการประมวลผลของหน้าเว็บได้
          </Text>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
});

export default ProfilePolicy;
