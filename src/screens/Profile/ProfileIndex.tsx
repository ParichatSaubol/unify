import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  AppBar,
  Button,
  ButtonIcon,
  ChipImage,
  DefaultLayout,
  ProfileLastOrder,
} from '@/components';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';
import { TMenu, TProfile } from '@/model/profile';
import { THB } from '@/utils';
import {
  AppColor,
  ButtonAlign,
  ButtonColor,
  ButtonIconColors,
  ButtonIconVariant,
  ButtonSize,
  OrderTabs,
} from '@/model/options';

type Props = NativeStackScreenProps<
  ProductParamsList & ApplicationStackParamList,
  'Profile'
>;

// @refresh reset
const ProfileIndex = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);

  const { Layout, Images, Fonts, Colors } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<TProfile>({
    name: 'คุณ ปิยะเดช ทวีิสินธนมงคล',
    company: 'บริษัท ทีเคเค คอร์ปอเรชั่น จำกัด',
    point: 92345,
    cart: 3,
    cartSummary: 10153945,
    lastOrder: {
      image: Images.mock.a,
      status: 'ดูสถานะการจัดส่ง',
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menu, setMenu] = useState<TMenu[]>([
    {
      title: 'การตั้งค่า และ ศูนย์ความช่วยเหลือ',
      name: 'ProfileSetting',
      isOption: true,
      icon: <Images.icons.setting2 color="#667085" />,
    },
    {
      title: 'รายการโปรด',
      name: 'ProfileSetting',
      isOption: true,
      icon: <Images.icons.heartadd color="#667085" />,
    },
    {
      title: 'บริการที่นัดหมายไว้',
      name: 'BookingIndex',
      isOption: true,
      icon: <Images.icons.isolation color="#667085" />,
    },
    {
      title: 'คอร์สเรียนของคุณ',
      name: 'ProfileSetting',
      isOption: false,
      icon: <Images.icons.courseProfile color="#667085" />,
    },
    {
      title: 'แชทหาเรา',
      name: 'ProfileSetting',
      isOption: false,
      icon: <Images.icons.chat color="#667085" />,
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileMenu, setProfileMenu] = useState<TMenu[]>([
    {
      title: 'บัตรและการชำระเงินของคุณ',
      name: 'ProfileSetting',
      isOption: true,
      icon: <Images.icons.payment color="#667085" />,
    },
    {
      title: 'ที่อยู่ของคุณ',
      name: 'AddressIndex',
      isOption: true,
      icon: <Images.icons.locationProfile color="#667085" />,
    },
    {
      title: 'ใบกำกับภาษีและใบเสร็จรับเงิน',
      name: 'Main',
      isOption: true,
      icon: <Images.icons.invoice color="#667085" />,
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
      <View style={[Layout.bgPrimary]}>
        <AppBar
          title="โปรไฟล์"
          titleAlign="center"
          color={AppColor.blue}
          right={
            <View
              style={[
                Layout.row,
                Layout.gap10,
                Layout.alignItemsCenter,
                Layout.justifyContentEnd,
              ]}
            >
              <TouchableOpacity>
                <ButtonIcon
                  icon={<Images.icons.search color={'#FFFFFF'} />}
                  variant={ButtonIconVariant.box}
                  colors={ButtonIconColors.primary}
                  // onPress={onPress}
                />
              </TouchableOpacity>
            </View>
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={[styles.profileBox, Layout.bgPrimary]}>
        <TouchableOpacity
          style={[
            Layout.main,
            Layout.row,
            Layout.justifyContentBetween,
            Layout.bgWhite,
            styles.profile,
          ]}
          onPress={() => {
            navigation.navigate('ProfileUser' as any);
          }}
        >
          <View>
            <Text style={[Fonts.text24Med]}>{data.name}</Text>
            <Text style={[Fonts.text18]}>{data.company}</Text>
            <View style={[Layout.row, Layout.gap5]}>
              <Text style={[Fonts.text16]}>จัดการบัญชีที่นี่</Text>
              <View
                style={[
                  styles.customSmallIcon,
                  { backgroundColor: Colors.primary },
                ]}
              >
                <Images.icons.arrowRight color="#FFF" />
              </View>
            </View>
          </View>
          <View>
            <Text style={[Fonts.text16, Fonts.textRight]}>คะแนนของคุณ</Text>
            <Text
              style={[Fonts.text28Light, Fonts.textRight, Fonts.textPrimary]}
            >
              {THB.format(data.point || 0).replace(/\b(\w*THB\w*)\b/, '')} P
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={[Layout.gap10, Layout.main, styles.body]}
      >
        {/*  */}
        <View style={[Layout.row, Layout.gap10]}>
          <View style={[Layout.fill]}>
            <Button title="คูปองของฉัน" colors={ButtonColor.white} />
          </View>
          <View style={[Layout.fill]}>
            <Button title="ใบเสนอราคาของฉัน" colors={ButtonColor.white} />
          </View>
        </View>
        {/*  */}
        <View style={[Layout.col]}>
          <Button
            startIcon={
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <View style={[Layout.row]}>
                  <Images.icons.cart color={Colors.gray500} 
                  />
                  <View style={styles.dots}>
                    <Text style={[styles.dotsFont, Fonts.textWhite]}>
                      {data.cart}
                    </Text>
                  </View>
                </View>
                <Text style={[Fonts.text21Bold]}>รถเข็นของฉัน</Text>
              </View>
            }
            title=" "
            colors={ButtonColor.white}
            align={ButtonAlign.between}
            onPress={() => {
              navigation.navigate('CartIndex' as any);
            }}
            endIcon={
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>
                  {THB.format(data.cartSummary || 0).replace(
                    /\b(\w*THB\w*)\b/,
                    '฿ ',
                  )}
                </Text>
                <Images.icons.arrowRight color={Colors.gray500} />
              </View>
            }
          />
        </View>
        {/*  */}
        <View style={[Layout.col, Layout.gap10]}>
          <Text style={[Fonts.text24Med]}>คำสั่งซื้อของฉัน</Text>
          <View style={[Layout.bgWhite, Layout.main, Layout.radius5]}>
            <View style={[Layout.row, Layout.justifyContentBetween]}>
              <ChipImage
                logo={
                  <Image
                    source={Images.profile.wallet}
                    style={styles.orderImage}
                  />
                }
                title="รอชำระเงิน"
                onPress={() => {
                  navigation.navigate('OrderIndex', {
                    tabs: OrderTabs.WaitingForPayment,
                  });
                }}
              />
              <ChipImage
                logo={
                  <Image
                    source={Images.profile.deliveryCar}
                    style={styles.orderImage}
                  />
                }
                title="รอการจัดส่ง"
                onPress={() => {
                  navigation.navigate('OrderIndex', {
                    tabs: OrderTabs.WaitingForDelivery,
                  });
                }}
              />
              <ChipImage
                logo={
                  <Image
                    source={Images.profile.box}
                    style={styles.orderImage}
                  />
                }
                title="ที่ต้องได้รับ"
                onPress={() => {
                  navigation.navigate('OrderIndex', {
                    tabs: OrderTabs.BeReceived,
                  });
                }}
              />
              <ChipImage
                logo={
                  <Image
                    resizeMode="contain"
                    source={Images.profile.shoppingBag}
                    style={styles.orderImage}
                  />
                }
                title="ยกเลิกสินค้า"
                onPress={() => {
                  navigation.navigate('OrderIndex', {
                    tabs: OrderTabs.CancelTheProduct,
                  });
                }}
              />
            </View>
          </View>
        </View>
        {/*  */}
        <ProfileLastOrder lastOrder={data.lastOrder} />
        {/*  */}
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text24Med]}>เมนูลัด</Text>
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
        {/*  */}
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text24Med]}>บัญชีของคุณ</Text>
          <View style={[Layout.radius5, Layout.gap10]}>
            {/*  */}
            {profileMenu.map((item, index) => (
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

        {/*  */}
        <View style={[Layout.fill, Layout.gap10]}>
          <Text style={[Fonts.text18, Fonts.textBlack, Fonts.textCenter]}>
            เวอร์ชั่นแอปพลิเคชัน (1.0)
          </Text>
          <Text style={[Fonts.text16, Fonts.textCenter]}>
            © ลิขสิทธิ์ของ บริษัท ทีเคเค คอร์ปอเรชั่น จำกัด (2023)
          </Text>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  profileBox: {
    height: 53,
    paddingHorizontal: 16,
    alignItems: 'center',
    zIndex: 1,
  },
  profile: {
    borderRadius: 5,
    position: 'absolute',
    width: '100%',
    // top: 70,
  },
  customSmallIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 1,
  },
  body: {
    paddingTop: 55,
  },
  dots: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 12.5,
    height: 12.5,
    backgroundColor: '#FC1B13',
    borderRadius: 6.25,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  dotsFont: {
    fontSize: 8,
  },
  orderImage: {
    width: 40,
    height: 40,
  },
});

export default ProfileIndex;
