import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';
import Clipboard from '@react-native-clipboard/clipboard';

type ITimeline = {
  title: string;
  subTitle: string;
  description: string;
  active: boolean;
};

type Props = NativeStackScreenProps<ProductParamsList, 'OrderDeliveryStatus'>;

//หน้าแสดงรายการสั่งซื้อ
// @refresh reset
const OrderIndex = ({ navigation, route }: Props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { orderId } = route.params;
  // hooks

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeline, setTimeline] = React.useState<ITimeline[]>([
    {
      title: t('orderDeliveryStatus.today'),
      subTitle: '13:30',
      description: t('orderDeliveryStatus.parcelInTransit'),
      active: true,
    },
    {
      title: t('orderDeliveryStatus.oct4'),
      subTitle: '13:30',
      description: t('orderDeliveryStatus.parcelReceived'),
      active: false,
    },
    {
      title: t('orderDeliveryStatus.oct3'),
      subTitle: '13:30',
      description: t('orderDeliveryStatus.parcelPickedUp'),
      active: false,
    },
    {
      title: t('orderDeliveryStatus.oct3'),
      subTitle: '13:30',
      description: t('orderDeliveryStatus.sellerPreparing'),
      active: false,
    },
  ]);

  // handle callback
  const handleCopy = () => {
    Clipboard.setString('hello world');
  };

  const init = async (): Promise<void> => {
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

  // useEffect(() => {
  //   ref.current?.setPage(active || 0); // change page
  // }, [active]);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title={t('orderDeliveryStatus.deliveryStatus')}
        onPress={() => {
          //กลับไปหน้าก่อนหน้า
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[Layout.col, Layout.justifyContentBetween]}
      >
        <View style={[Layout.main, Layout.gap20, Layout.bgWhite]}>
          <View
            style={[
              Layout.row,
              Layout.gap20,
              Layout.justifyContentBetween,
              styles.numberBox,
              Layout.alignItemsCenter,
            ]}
          >
            <Text style={[Fonts.text21]}>
              {t('orderDeliveryStatus.trackingNumber')}
            </Text>
            <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
              <Text style={[Fonts.text21, Fonts.textPrimary]}>
                TH015063650999
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handleCopy();
                }}
              >
                <Images.icons.copy color="#0057FF" width="16" height="16" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[Layout.row, Layout.gap20, Layout.alignItemsCenter]}>
            <Image source={Images.order.dhl} />
            <Text style={[Fonts.text21]}>
              {t('orderDeliveryStatus.logistics')}
            </Text>
          </View>
        </View>

        <View style={[Layout.main, Layout.bgWhite, Layout.col]}>
          {timeline.map((item, index) => (
            <View
              style={[Layout.row, Layout.gap10, Layout.fill]}
              key={`timeline-${index}`}
            >
              <View
                style={[Layout.col, Layout.alignItemsCenter, styles.dateBox]}
              >
                <Text style={[Fonts.text21]}>{item.title}</Text>
                {item.subTitle && (
                  <Text style={[Fonts.text21]}>{item.subTitle}</Text>
                )}
              </View>
              <View style={[Layout.alignItemsCenter, styles.timelineBox]}>
                {item.active ? (
                  <Images.icons.checkCircle color="#0057FF" />
                ) : (
                  <View style={styles.dotBox}>
                    <View style={styles.dot} />
                  </View>
                )}
                {timeline.length - 1 > index && <View style={styles.line} />}
              </View>
              <View>
                <Text style={[Fonts.text21, item.active && Fonts.textPrimary]}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
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
  numberBox: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
    elevation: 2,
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#D9D9D9',
  },
  dateBox: {
    width: 80,
    paddingBottom: 40,
  },
  timelineBox: {
    width: 24,
  },
  dotBox: {
    position: 'relative',
    top: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D9D9D9',
  },
});

export default OrderIndex;
