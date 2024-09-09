import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, DefaultLayout } from '@/components';
import {
  AppColor,
  ButtonAlign,
  ButtonColor,
  ButtonSize,
} from '@/model/options';
import { TMenu } from '@/model/profile';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'ProfileSetting'
>;

// @refresh reset
const ProfileSetting = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState<string>('ไทย');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLanguage, setIsLanguage] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currency, setCurrency] = useState<string>('ไทย(บาท)');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCurrency, setIsCurrency] = useState<boolean>(false);
  const [menu] = useState<TMenu[]>([
    {
      title: 'นโยบายความเป็นส่วนตัว',
      name: 'ProfilePolicy',
      isOption: true,
    },
    {
      title: 'เงื่อนไขการให้บริการ',
      name: 'ProfileSetting',
      isOption: true,
    },
    {
      title: 'คำถามที่พบบ่อย',
      name: 'BookingIndex',
      isOption: true,
    },
    {
      title: 'เกี่ยวกับ Unify',
      name: 'ProfileSetting',
      isOption: false,
    },
    {
      title: 'ติดต่อเรา',
      name: 'ProfileSetting',
      isOption: false,
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
        title="การตั้งค่า"
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
        <View style={[Layout.gap10]}>
          <Button
            title="ภาษา"
            colors={ButtonColor.white}
            endIcon={
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Images.icons.th />
                <Text style={[Fonts.text18]}>{language}</Text>
                <Images.icons.arrowDown color="#667085" />
              </View>
            }
            align={ButtonAlign.between}
            size={ButtonSize.small}
            onPress={() => {
              //
            }}
          />
          <Button
            title="ปรับสกุลเงิน"
            colors={ButtonColor.white}
            endIcon={
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Text style={[Fonts.text18]}>{currency}</Text>
                <Images.icons.arrowDown color="#667085" />
              </View>
            }
            align={ButtonAlign.between}
            size={ButtonSize.small}
            onPress={() => {
              //
            }}
          />
        </View>
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text24Med]}>ศูนย์บริการและความช่วยเหลือ</Text>
          <View style={[Layout.radius5, Layout.gap10]}>
            {/*  */}
            {menu.map((item, index) => (
              <Button
                key={index}
                startIcon={
                  <View
                    style={[Layout.row, Layout.gap20, Layout.alignItemsCenter]}
                  >
                    {item.icon}
                    <Text style={[Fonts.text18]}>{item.title}</Text>
                  </View>
                }
                title=" "
                colors={ButtonColor.white}
                endIcon={
                  (item.isOption && (
                    <Images.icons.arrowRight color="#667085" />
                  )) ||
                  undefined
                }
                align={ButtonAlign.between}
                size={ButtonSize.small}
                onPress={() => {
                  navigation.navigate(item.name as never);
                }}
              />
            ))}
          </View>
        </View>
        <View style={[Layout.gap10, styles.bottom]}>
          <Button title="ออกจากระบบ" size={ButtonSize.small} />
          <Button
            title="ลบบัญชี"
            size={ButtonSize.small}
            colors={ButtonColor.solid}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginTop: 20,
  },
});

export default ProfileSetting;
