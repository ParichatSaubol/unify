import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart, useTheme } from '@/hooks';
import Button from '../Button/Button';
import { ILearnDetail } from '@/model/course';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProductParamsList } from 'types/navigation';
import { ButtonColor, ButtonSize, ButtonVariant } from '@/model/options';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '@/theme/Variables';
import * as Progress from 'react-native-progress';
import CollapsibleMenuItem from '../Collapsible/CollapsibleMenuItem';

type LearnDetailProps = ILearnDetail & {};

const LearnDetail: FunctionComponent<LearnDetailProps> = ({
  title,
  code,
  detail,
  learnDuration,
  learnerCount,
  isGenuine,
  isReady,
  courseItems,
}) => {
  const { Layout, Fonts, Images } = useTheme();
  const navigation = useNavigation<NavigationProp<ProductParamsList>>();

  const { add } = useCart();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <View style={[Layout.col, styles.container, Layout.gap10]}>
        <View style={[Layout.row, Layout.gap10]}>
          <Text style={[styles.tagRecommend, Fonts.text16Med, Fonts.textWhite]}>
            คอร์สแนะนำ
          </Text>
          <Text style={[styles.tags, Fonts.text16Med, Fonts.textBlack]}>
            SCADA
          </Text>
        </View>
        <View style={Layout.fill}>
          <Text style={[Fonts.text21Med, Fonts.textBlack]}>{title}</Text>
        </View>
        <View
          style={[
            Layout.fill,
            Layout.row,
            Layout.alignItemsCenter,
            Layout.gap10,
          ]}
        >
          <Text style={[Fonts.text16, Fonts.textBlack]}>
            คอร์สเรียนโดย : {code}
          </Text>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap5]}>
            <Images.icons.certificate />
            <Text style={[Fonts.text18, Fonts.textPrimary]}>
              เรียนจบได้ใบรับรอง
            </Text>
          </View>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10]}>
            {isGenuine ? (
              <View style={Layout.fill}>
                <Button
                  title="เริ่มเรียน"
                  size={ButtonSize.regular}
                  fullWidth
                  startIcon={
                    <Images.icons.startLearn
                      color="#475467"
                      width="16px"
                      height="16px"
                    />
                  }
                  // onPress={() => {
                  //   navigation.navigate('CheckoutIndex', {
                  //     courses: { '1': { isChecked: true, no: 1, quantity: 1 } },
                  //   });
                  // }}
                />
              </View>
            ) : (
              <>
                <View style={Layout.fill}>
                  <Button
                    title="ซื้อเลย ฿25,900"
                    size={ButtonSize.regular}
                    fullWidth
                    onPress={() => {
                      navigation.navigate('CheckoutIndex', {
                        courses: {
                          '1': { isChecked: true, no: 1, quantity: 1 },
                        },
                      });
                    }}
                  />
                </View>
                <View style={Layout.fill}>
                  <Button
                    title="เพิ่มลงรถเข็น"
                    size={ButtonSize.regular}
                    variant={ButtonVariant.outlined}
                    colors={ButtonColor.secondary}
                    startIcon={
                      <Images.icons.cart
                        color="#475467"
                        width="16px"
                        height="16px"
                      />
                    }
                    fullWidth
                    onPress={() => {
                      add('1', { isChecked: false, quantity: 1 }, 'course');
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </View>
        <View
          style={[
            styles.learnContainer,
            Layout.row,
            Layout.fill,
            Layout.justifyContentBetween,
            Layout.gap10,
          ]}
        >
          <View style={[Layout.gap10, Layout.row]}>
            <Images.icons.timer color="#475467" />
            <Text style={[Fonts.text21, Fonts.textBlack]}>{learnDuration}</Text>
          </View>

          <View style={[Layout.gap10, Layout.row]}>
            <Images.icons.watch color="#475467" />
            <Text style={[Fonts.text21, Fonts.textBlack]}>
              {learnerCount} ผู้เรียน
            </Text>
          </View>
        </View>

        {isReady ? (
          <View style={Layout.fill}>
            <Button
              title="ดาวน์โหลดใบรับรอง Certificate"
              size={ButtonSize.regular}
              fullWidth
              // onPress={() => {
              //   navigation.navigate('CheckoutIndex', {
              //     courses: { '1': { isChecked: true, no: 1, quantity: 1 } },
              //   });
              // }}
            />
          </View>
        ) : (
          <View
            style={[
              Layout.col,
              Layout.fill,
              Layout.justifyContentBetween,
              Layout.gap10,
            ]}
          >
            <Text style={[Fonts.text21Med, Fonts.textBlack]}>เรียนแล้ว</Text>
            <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
              <Progress.Bar
                progress={0.9}
                height={10}
                width={270}
                borderRadius={5}
                style={{ height: 7 }}
              />
              <Text style={[Fonts.text18Med, Fonts.textBlack]}>90%</Text>
            </View>
          </View>
        )}
      </View>

      <View style={[Layout.col]}>
        <View style={[Layout.col, styles.containerDetail, Layout.gap10]}>
          <View style={[Layout.row, Layout.gap10]}>
            <TouchableOpacity
              style={[Layout.fill]}
              onPress={() => {
                setSelectedTab(0);
              }}
            >
              <View
                style={[selectedTab === 0 && styles.activeTab, styles.root]}
              >
                <Text
                  style={[
                    Fonts.text21,
                    Fonts.textCenter,
                    selectedTab === 0 && Fonts.text21Bold,
                    {
                      color: selectedTab === 0 ? Colors.blue : Colors.black,
                    },
                  ]}
                >
                  รายละเอียดคอร์สเรียน
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Layout.fill]}
              onPress={() => {
                setSelectedTab(1);
              }}
            >
              <View
                style={[selectedTab === 1 && styles.activeTab, styles.root]}
              >
                <Text
                  style={[
                    Fonts.text21,
                    Fonts.textCenter,
                    selectedTab === 1 && Fonts.text21Bold,
                    {
                      color: selectedTab === 1 ? Colors.blue : Colors.black,
                    },
                  ]}
                >
                  เนื้อหาการเรียนรู้
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={[Layout.col, Layout.gap10]}>
          {selectedTab == 0 ? (
            <View style={[Layout.gap10, styles.containerScrollView]}>
              <Text
                style={[
                  Fonts.text24Med,
                  Fonts.textBlack,
                  { textAlign: 'center' },
                ]}
              >
                รายละเอียดคอร์สเรียน
              </Text>
              <Text style={[Fonts.text16, Fonts.textBlack]}>{detail}</Text>
              <Text
                style={[Fonts.text21Med, Fonts.textBlack, Fonts.textCenter]}
              >
                อ่านต่อเพิ่มเติม
              </Text>
            </View>
          ) : (
            <>
              {courseItems?.map((v: any, k: any) => {
                return (
                  <CollapsibleMenuItem
                    key={k}
                    title={v.title}
                    items={v.items}
                  />
                );
              })}
            </>
          )}
        </ScrollView>
        <View style={styles.dividers} />
        <View style={[Layout.col, Layout.gap20, styles.containerLecturer]}>
          <Text style={[Fonts.text24Med, Fonts.textBlack]}>วิทยากรผู้สอน</Text>
          <View style={[Layout.row, Layout.gap10]}>
            <Images.icons.avatar color="#475467" />
            <View style={[Layout.col, Layout.gap10]}>
              <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                รศ. ดร.ศิริเดช บุญแสง
              </Text>
              <View style={[Layout.col, Layout.gap5]}>
                <Text style={[Fonts.text16, Fonts.textBlack]}>
                  คณบดีคณะเทคโนโลยีสารสนเทศ
                </Text>
                <Text style={[Fonts.text16, Fonts.textBlack]}>
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </Text>
              </View>
            </View>
          </View>
          <View style={[Layout.row, Layout.gap10]}>
            <Images.icons.avatar color="#475467" />
            <View style={[Layout.col, Layout.gap10]}>
              <Text style={[Fonts.text21Med, Fonts.textBlack]}>
                รศ. ดร.สมคิด จิตชื่อบาน
              </Text>
              <View style={[Layout.col, Layout.gap5]}>
                <Text style={[Fonts.text16, Fonts.textBlack]}>
                  คณบดีคณะเทคโนโลยีสารสนเทศ
                </Text>
                <Text style={[Fonts.text16, Fonts.textBlack]}>
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* {description && <View style={[Layout.center]}>{description}</View>} */}
    </View>
  );
};

LearnDetail.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  containerLecturer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  containerDetail: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFF',
    marginTop: 14,
  },
  containerScrollView: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFF',
  },
  learnContainer: {
    backgroundColor: '#FFF',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 5,
  },
  nonActive: {
    padding: 4,
  },
  active: {
    backgroundColor: '#F9FAFB',
    padding: 4,
  },
  brandLogo: {
    height: 60,
    width: 60,
  },
  brandButton: {
    width: 132,
  },
  detailFirst: {
    width: '40%',
  },
  dividers: {
    width: '100%',
    height: 1,
    backgroundColor: '#F2F4F7',
  },
  netAmount: {
    textDecorationLine: 'line-through',
  },
  tagRecommend: {
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    borderRadius: 5,
    backgroundColor: '#0057FF',
    width: 82,
    textAlign: 'center',
  },
  tags: {
    paddingTop: 4,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 4,
    borderRadius: 5,
    backgroundColor: '#FFFF',
    textAlign: 'center',
  },
  root: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0057FF',
  },
});

export default LearnDetail;
