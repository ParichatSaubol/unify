import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, ButtonIcon, DefaultLayout } from '@/components';
import { TopBrand } from '@/model/brand';
import LearnCard, { LearnCardProps } from '@/components/Learn/LearnCard';
import {
  ButtonIconColors,
  ButtonIconVariant,
  ButtonVariant,
  AppColor,
  LearnCardSize,
} from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'CourseCategory'
>;

// @refresh reset
const CourseCategory = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Images, Fonts } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [learn] = useState<TopBrand[]>([
    { title: 'Engineer', logo: <Image source={Images.learn.mock2} /> },
    { title: 'Design', logo: <Image source={Images.learn.mock2} /> },
    { title: 'Sales', logo: <Image source={Images.learn.mock2} /> },
    { title: 'Sales', logo: <Image source={Images.learn.mock2} /> },
  ]);
  const [state, setState] = useState<'course' | 'package'>('course');
  const dataLearn: LearnCardProps = {
    brand: Images.learn.brand,
    description: 'ติดตั้งระบบ SCADAGENESIS64 พร้อมอุปกรณ์',
    isPlay: false,
  };

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
        title="คอร์สเรียนแพ็กเก็จ"
        color={AppColor.blue}
        right={
          <TouchableOpacity>
            <ButtonIcon
              icon={<Images.icons.search color={'#FFFFFF'} />}
              variant={ButtonIconVariant.box}
              colors={ButtonIconColors.primary}
              // onPress={onPress}
            />
          </TouchableOpacity>
        }
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.col,
          Layout.justifyContentBetween,
          Layout.bgWhite,
          styles.scrollView,
        ]}
      >
        <View style={[styles.root]}>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Button
                startIcon={
                  <Images.icons.book1
                    color={state === 'course' ? '#FFFFFF' : '#475467'}
                  />
                }
                fullRadius
                title="คอร์สเรียน"
                variant={
                  state === 'course'
                    ? ButtonVariant.contained
                    : ButtonVariant.text
                }
                onPress={() => {
                  setState('course');
                }}
              />
            </View>
            <View style={[Layout.fill]}>
              <Button
                startIcon={
                  <Images.icons.book2
                    color={state === 'package' ? '#FFFFFF' : '#475467'}
                  />
                }
                fullRadius
                title="แพ็คเก็จ"
                variant={
                  state === 'package'
                    ? ButtonVariant.contained
                    : ButtonVariant.text
                }
                onPress={() => {
                  setState('package');
                }}
              />
            </View>
          </View>
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            หมวดหมู่ “Engineer”
          </Text>

          {state === 'package' && (
            <View style={[styles.course, Layout.gap10]}>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
            </View>
          )}
          {state === 'course' && (
            <View style={[styles.course, Layout.gap10]}>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
              <View style={styles.child}>
                <LearnCard {...dataLearn} size={LearnCardSize.large} />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  blue: { backgroundColor: '#0047FF' },
  root: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 30,
  },
  scrollView: { paddingBottom: 80 },
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

export default CourseCategory;
