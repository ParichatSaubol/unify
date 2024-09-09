import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, DefaultLayout } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import InputSearchCourse from '@/components/Search/InputSearchCourse';
import LearnCatalog from '@/components/Learn/LearnCatalog';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'SearchCourse'>;

// @refresh reset
const SearchCourse = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Fonts, Layout, Images } = useTheme();
  // const dispatch = useDispatch();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [recentSearch, setRecentSearch] = useState<string[]>([
    'คอร์สเรียนสกาด้า',
    'การจัดการพลังงาน',
    'การลดต้นทุน',
    'การเพิ่มผลผลิต',
    'การใช้เครื่องมือวัด',
    'IOT',
    'SCADA',
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
        title="ค้นหาคอร์สเรียน"
        color={AppColor.blue}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.col,
          Layout.justifyContentBetween,
          styles.scrollView,
        ]}
      >
        <View style={[Layout.gap20, Layout.main, styles.grey]}>
          <View style={styles.search}>
            <InputSearchCourse placeholder="ค้นหาคอร์สเรียนได้ที่นี่" />
          </View>

          <View style={[Layout.row, Layout.justifyContentBetween]}>
            <Text style={[Fonts.text21Med, Fonts.textBlack]}>คำค้นหาบ่อยๆ</Text>
            <Images.icons.delete />
          </View>
          <View style={[Layout.row, Layout.gap10, styles.recent]}>
            {recentSearch.map((v, i) => {
              return (
                <Text
                  key={i}
                  style={[styles.tags, Fonts.textBlack, Fonts.text18]}
                >
                  {v}
                </Text>
              );
            })}
          </View>
          <View
            style={[Layout.col, Layout.gap20, Layout.justifyContentBetween]}
          >
            <Text style={[Fonts.text21Med, Fonts.textBlack]}>
              เรียนต่อสำหรับคุณ
            </Text>
            <LearnCatalog />
          </View>

          <View
            style={[Layout.col, Layout.gap20, Layout.justifyContentBetween]}
          >
            <Text style={[Fonts.text21Med, Fonts.textBlack]}>
              คอรส์เรียนแนะนำ
            </Text>
            <LearnCatalog />
          </View>

          {/* <View>{renderSortBoard()}</View> */}
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  grey: { backgroundColor: '#F3F3F3' },
  tags: {
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    borderRadius: 20,
    backgroundColor: '#FFFF',
  },
  recent: {
    flexWrap: 'wrap',
  },
  search: {
    width: '100%',
    height: 40,
    flexShrink: 0,
  },
  scrollView: { paddingBottom: 90 },
});

export default SearchCourse;
