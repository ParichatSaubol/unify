import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  AppBar,
  ButtonIcon,
  DefaultLayout,
  LearnDetail as Detail,
} from '@/components';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';
import { ILearnDetail } from '@/model/course';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ButtonIconColors, ButtonIconVariant, AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'LearnDetail'>;

// @refresh reset
const LearnDetail = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Fonts } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [courseItems, setCourseItems] = React.useState<any>([
    {
      title: 'ส่วนที่ 1 AI Deep Learning',
      items: [
        {
          title: 'Part 1 : Introduction',
          url: 'text',
        },
        {
          title: 'Part 2 : รู้จัก AI Deep Learning PART 1',
          url: 'text',
        },
        {
          title: 'Part 3 :  รู้จัก AI Deep Learning PART 2',
          url: 'text',
        },
        {
          title: 'Part 4 : เริ่มต้นใช้โปรแกรม CIRA CORE',
          url: 'text',
        },
      ],
    },
    {
      title: 'ส่วนที่ 2 การใช้งานโปรแกรม',
      items: [
        {
          title: 'Part 1 : Introduction',
          url: 'text',
        },
        {
          title: 'Part 2 : รู้จัก AI Deep Learning PART 1',
          url: 'text',
        },
        {
          title: 'Part 3 :  รู้จัก AI Deep Learning PART 2',
          url: 'text',
        },
        {
          title: 'Part 4 : เริ่มต้นใช้โปรแกรม CIRA CORE',
          url: 'text',
        },
      ],
    },
    {
      title: 'ส่วนที่ 3 การวางกลยุทธ์',
      items: [
        {
          title: 'Part 1 : Introduction',
          url: 'text',
        },
        {
          title: 'Part 2 : รู้จัก AI Deep Learning PART 1',
          url: 'text',
        },
        {
          title: 'Part 3 :  รู้จัก AI Deep Learning PART 2',
          url: 'text',
        },
        {
          title: 'Part 4 : เริ่มต้นใช้โปรแกรม CIRA CORE',
          url: 'text',
        },
      ],
    },
    {
      title: 'แบบทดสอบ',
      items: [
        {
          title: 'TEST',
          url: 'text',
        },
      ],
    },
  ]);

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = React.useState<ILearnDetail>({
    title:
      'ระบบการจัดการพลังงาน Energy Monitoring วิเคราะห์ โดย..ซอฟต์แวร์ GENESIS64 ด้วย SCADA จาก มิซูบิชิ',
    code: 'Mitsubishi e-Factory Learning Center',
    star: 4,
    learnDuration: '1 ชั่วโมง 55 นาที',
    learnerCount: '4,539',
    amount: 100,
    isGenuine: true,
    isReady: false,
    delivered: '1 วันทำการ',
    brandName: 'IDEA',
    brandDescription: 'IDEA',
    detail:
      'CiRA CORE เป็นแพลตฟอร์มปัญญาประดิษฐ์ (AI) ที่เกิดจากการความร่วมมือ ระหว่างสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง กับมหาวิทยา ลัยขอนแก่น และมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ โดยย้อน กลับไปก่อนหน้านี้นับ ตั้งแต่ปี 2010 เป็นต้นมา Deep Learning ซึ่งเป็นสาขา ของ AI เริ่มได้รับความนิยมมากขึ้น และมีความต้องการใช้ในการพัฒนามีเพิ่ม มากขึ้นอย่างยิ่งยวด...',
    description: <Image source={Images.mock.description} />,
    courseItems: courseItems,
  });

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  return (
    <DefaultLayout>
      <View style={[Layout.bgPrimary]}>
        <AppBar
          title="คอร์สเรียน"
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
                  icon={<Images.icons.cart color={'#FFFFFF'} />}
                  variant={ButtonIconVariant.box}
                  colors={ButtonIconColors.primary}
                  // onPress={onPress}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ButtonIcon
                  onPress={() => {
                    navigate('SearchCourse');
                  }}
                  icon={<Images.icons.search color={'#FFFFFF'} />}
                  variant={ButtonIconVariant.box}
                  colors={ButtonIconColors.primary}
                />
              </TouchableOpacity>
            </View>
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          styles.grey,
          styles.scrollView,
        ]}
      >
        <View style={[styles.grey]}>
          <Image
            style={[Layout.fullWidth, styles.image]}
            source={Images.learn.detail}
            resizeMode="stretch"
          />
        </View>
        <Detail {...detail} />
        {/* <View style={[Layout.gap20, styles.container, Layout.bgWhite]} /> */}
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  blue: { backgroundColor: '#0047FF' },
  grey: { backgroundColor: '#F2F4F7' },
  image: {
    height: 211,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 20,
  },
  root: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 10,
  },
  scrollView: { paddingBottom: 70 },
  header: { paddingBottom: 0 },
  course: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  child: {
    flexBasis: '48%',
  },
});

export default LearnDetail;
