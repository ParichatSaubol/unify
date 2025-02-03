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

  const { t } = useTranslation('register');
  const { Fonts, Layout, Images } = useTheme();
  // const dispatch = useDispatch();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [recentSearch, setRecentSearch] = useState<string[]>([
    t('searchCourse.scadaCourse'),
    t('searchCourse.energyManagement'),
    t('searchCourse.costReduction'),
    t('searchCourse.increasingProductivity'),
    t('searchCourse.usingMeasuringTools'),
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
        title={t('searchCourse.searchACourse')}
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
            <InputSearchCourse placeholder={t('searchCourse.searchHere')} />
          </View>

          <View style={[Layout.row, Layout.justifyContentBetween]}>
            <Text style={[Fonts.text21Med, Fonts.textBlack]}>
              {t('searchCourse.recentSearch')}
            </Text>
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
              {t('searchCourse.recommendedForYou')}
            </Text>
            <LearnCatalog />
          </View>

          <View
            style={[Layout.col, Layout.gap20, Layout.justifyContentBetween]}
          >
            <Text style={[Fonts.text21Med, Fonts.textBlack]}>
              {t('searchCourse.recommendedCourses')}
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
