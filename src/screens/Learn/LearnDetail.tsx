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

  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Fonts } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [courseItems, setCourseItems] = React.useState<any>([
    {
      title: t('learnDetail.section1'),
      items: [
        {
          title: t('learnDetail.part1'),
          url: 'text',
        },
        {
          title: t('learnDetail.part2'),
          url: 'text',
        },
        {
          title: t('learnDetail.part3'),
          url: 'text',
        },
        {
          title: t('learnDetail.part4'),
          url: 'text',
        },
      ],
    },
    {
      title: t('learnDetail.section2'),
      items: [
        {
          title: t('learnDetail.part1'),
          url: 'text',
        },
        {
          title: t('learnDetail.part2'),
          url: 'text',
        },
        {
          title: t('learnDetail.part3'),
          url: 'text',
        },
        {
          title: t('learnDetail.part4'),
          url: 'text',
        },
      ],
    },
    {
      title: t('learnDetail.section3'),
      items: [
        {
          title: t('learnDetail.part1'),
          url: 'text',
        },
        {
          title: t('learnDetail.part2'),
          url: 'text',
        },
        {
          title: t('learnDetail.part3'),
          url: 'text',
        },
        {
          title: t('learnDetail.part4'),
          url: 'text',
        },
      ],
    },
    {
      title: t('learnDetail.test'),
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
    title: t('learnDetail.title'),
    star: 4,
    learnDuration: t('learnDetail.learnDuration'),
    learnerCount: '4,539',
    amount: 100,
    isGenuine: true,
    isReady: false,
    delivered: t('learnDetail.delivered'),
    brandName: 'IDEA',
    brandDescription: 'IDEA',
    detail: t('learnDetail.detail'),
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
          title={t('learnDetail.course')}
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
