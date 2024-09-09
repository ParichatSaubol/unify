import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, ButtonIcon, DefaultLayout } from '@/components';
import { ButtonIconColors, ButtonIconVariant, AppColor } from '@/model/options';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'LearnAllCategory'
>;

// @refresh reset
const LearnAllCategory = ({ navigation }: Props): JSX.Element => {
  // hooks

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout, Images, Fonts } = useTheme();

  // state
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
        title="หมวดหมู่คอร์สเรียนทั้งหมด"
        color={AppColor.blue}
        right={
          <TouchableOpacity>
            <ButtonIcon
              icon={<Images.icons.search color={'#FFFFFF'} />}
              variant={ButtonIconVariant.box}
              colors={ButtonIconColors.none}
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
        <View style={[styles.root, Layout.fullWidth]}>
          <View style={[styles.category, Layout.row, Layout.fullWidth]}>
            <View style={[styles.child]}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateEngineer width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>Engineer</Text>
              </View>
            </View>
            <View style={[styles.child]}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateDesign width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>Design</Text>
              </View>
            </View>
            <View style={styles.child}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateSales width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>Sales</Text>
              </View>
            </View>
            <View style={styles.child}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateManagement width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                  Management
                </Text>
              </View>
            </View>
            <View style={styles.child}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateTechnical width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                  Technical
                </Text>
              </View>
            </View>
            <View style={styles.child}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateAdmin width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>Admin</Text>
              </View>
            </View>
            <View style={styles.child}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateMarketing width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                  Marketing
                </Text>
              </View>
            </View>
            <View style={styles.child}>
              <View style={[Layout.col, styles.card]}>
                <View>
                  <Images.learn.learnCateNetwork width={164} />
                </View>

                {/* Title or Name */}
                <Text style={[Fonts.text21Med, Fonts.textBlack]}>Network</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  blue: { backgroundColor: '#0047FF' },
  card: {
    gap: 5,
    paddingVertical: 15,
  },
  root: {
    paddingVertical: 20,
    paddingHorizontal: 4,
  },
  scrollView: { paddingBottom: 80 },
  header: { paddingBottom: 0 },
  category: {
    flex: 1,
    flexWrap: 'wrap',
    gap: 0,
  },
  child: { width: 168 },
});

export default LearnAllCategory;
