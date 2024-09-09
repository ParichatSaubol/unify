import React, { useCallback, useEffect, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import {
  AppBar,
  Button,
  Checkbox,
  ChipImage,
  DefaultLayout,
  Input,
  OrderDetail,
} from '@/components';
import { AppColor, OrderStatus } from '@/model/options';
import PagerView from 'react-native-pager-view';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'OrderCancelPayment'
>;

// @refresh reset
const OrderCancelPayment = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  const ref = useRef<PagerView>(null);
  const sheetRef = useRef<BottomSheet>(null);
  const [active, setActive] = React.useState(0);
  const [titleNote, setTitleNote] = React.useState('');
  const [note, setNote] = React.useState('');
  const [isRefundNote, setIsRefundNote] = React.useState(false);
  const [order] = React.useState({
    id: '12345678A',
    amount: 3000,
    netAmount: 3000,
    deliveryFee: 0,
    code: '12345678A',
    rewardPoint: 0,
    coursesCount: 0,
    discountBrunPoint: 0,
    discountCouponAmount: 0,
    discountCouponCode: '',
    itemsCount: 3,
    servicesCount: 0,
    vat: 0,
    status: OrderStatus.BeReceived,
    items: [
      {
        id: '1',
        image: Images.order.mock,
        amount: 1000,
        discountAmount: 1,
        netAmount: 1000,
        quantity: 1,
        option: 'สีขาว',
        title: 'Mitsubishi หน้าจอสัมผัส HMI Touch screen HMI ซีรีย์ GT',
      },
      {
        id: '2',
        image: Images.order.mock,
        amount: 1000,
        discountAmount: 1,
        netAmount: 1000,
        quantity: 1,
        option: 'สีขาว',
        title: 'Mitsubishi หน้าจอสัมผัส HMI Touch screen HMI ซีรีย์ GT',
      },
      {
        id: '3',
        image: Images.order.mock,
        amount: 1000,
        discountAmount: 1,
        netAmount: 1000,
        quantity: 1,
        option: 'สีขาว',
        title: 'Mitsubishi หน้าจอสัมผัส HMI Touch screen HMI ซีรีย์ GT',
      },
    ],
  });

  const [refundNote] = React.useState({
    optionOne: [
      { title: 'ต้องการเปลี่ยนที่อยู่ในการจัดส่ง' },
      { title: 'ต้องการเพิ่ม/เปลี่ยนโค้ดส่วนลด' },
      { title: 'ต้องการแก้ไขรายละเอียดคำสั่งซื้อ' },
      { title: 'ไม่ต้องการสินค้าชิ้นนี้แล้ว' },
      { title: 'เจอสินค้าชนิดเดียวกันที่ราคาถูกกว่า' },
      { title: 'อื่นๆ' },
    ],
    optionTwo: [
      {
        title: 'ได้รับสินค้าไม่ครบ / ชิ้นส่วนไม่ครบ / ไม่ได้รับสินค้า',
        sub: 'ได้รับพัสดุแล้ว แต่ไม่ได้รับสินค้าบางรายการ',
      },
      {
        title:
          'ได้รับสินค้าไม่ตรงกับรายการที่สั่ง เช่น สีผิด โมเดลผิด หรือสินค้าผิด',
        sub: 'ผู้ขายส่งสินค้าให้ฉันไม่ตรงกับที่เลือกไว้',
      },
      {
        title: 'สินค้าสภาพไม่ดีหรือมีความเสียหาย',
        sub: 'สินค้าที่ได้รับอยู่ในสภาพไม่เสียหายหรือแตกหัก/ไม่สามารถใช้งานได้',
      },
    ],
    optionThree: [
      {
        title: 'ฉันไม่ได้รับพัสดุของคำสั่งซื้อนี้',
        sub: 'ผู้ขายจัดส่งพัสดุแล้ว แต่ฉันไม่ได้รับพัสดุใดๆ',
      },
      {
        title: 'ได้รับสินค้าไม่ครบ / ชิ้นส่วนไม่ครบ / ไม่ได้รับสินค้า',
        sub: 'ได้รับพัสดุแล้ว แต่ไม่ได้รับสินค้าบางรายการ',
      },
    ],
  });

  // handle callback
  const handleOnPressTitleNote = (val: string) => {
    setTitleNote(val);
    ref.current?.setPage(1);
  };

  const handleOnPressNode = (val: string) => {
    setNote(val);
    sheetRef.current?.close();
  };

  const handleOnPressRefundNode = () => {
    setIsRefundNote(true);
  };

  const handleSheetChange = useCallback((index: number) => {
    if (index < 0) {
      setIsRefundNote(false);
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1}>
        <View style={styles.overscreen} />
      </BottomSheetBackdrop>
    ),
    [],
  );

  const renderNote = useCallback(() => {
    const elements: JSX.Element[] = [];

    switch (titleNote) {
      case 'ฉันได้ชำระเงินแล้ว แต่ต้องการเปลี่ยนคำสั่งซื้อ':
        refundNote.optionOne.map((item, index) => {
          elements.push(
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleOnPressNode(item.title);
              }}
              style={[Layout.row, Layout.alignItemsCenter, Layout.gap10]}
            >
              <Checkbox
                isEnabled={item.title === note}
                setIsEnabled={() => {
                  handleOnPressNode(item.title);
                }}
              />
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item.title}</Text>
            </TouchableOpacity>,
          );
        });
        break;
      case 'ฉันได้รับสินค้าแล้ว แต่สินค้ายังไม่สมบูรณ์':
        refundNote.optionTwo.map((item, index) => {
          elements.push(
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleOnPressNode(item.title);
              }}
              style={[Layout.row, Layout.alignItemsCenter, Layout.gap10]}
            >
              <Checkbox
                isEnabled={item.title === note}
                setIsEnabled={() => {
                  handleOnPressNode(item.title);
                }}
              />
              <View style={[Layout.fill]}>
                <Text style={[Fonts.text18, Fonts.textBlack]}>
                  {item.title}
                </Text>
                <Text style={[Fonts.text18]}>{item.sub}</Text>
              </View>
            </TouchableOpacity>,
          );
        });
        break;
      case 'ฉันไม่ได้รับสินค้าบางรายการ':
        refundNote.optionThree.map((item, index) => {
          elements.push(
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleOnPressNode(item.title);
              }}
              style={[Layout.row, Layout.alignItemsCenter, Layout.gap10]}
            >
              <Checkbox
                isEnabled={item.title === note}
                setIsEnabled={() => {
                  handleOnPressNode(item.title);
                }}
              />
              <View style={[Layout.fill]}>
                <Text style={[Fonts.text18, Fonts.textBlack]}>
                  {item.title}
                </Text>
                <Text style={[Fonts.text18]}>{item.sub}</Text>
              </View>
            </TouchableOpacity>,
          );
        });
        break;
    }

    return elements;
  }, [titleNote, note]);

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

  useEffect(() => {
    if (isRefundNote) {
      sheetRef.current?.snapToIndex(0);
    } else {
      sheetRef.current?.snapToIndex(-1);
    }
  }, [isRefundNote]);

  useFocusEffect(
    useCallback(() => {
      return () => sheetRef.current?.close();
    }, []),
  );

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        title="การยกเลิกสินค้า"
        onPress={() => {
          //กลับไปหน้าก่อนหน้า
          if (active === 0) {
            navigation.goBack();
          } else {
            ref.current?.setPage(active - 1);
          }
        }}
      />
      <PagerView
        ref={ref}
        style={Layout.fill}
        initialPage={active}
        onPageSelected={va => {
          setActive(va.nativeEvent.position);
        }}
        scrollEnabled={false}
      >
        <ScrollView
          key={0}
          contentContainerStyle={[
            Layout.gap20,
            Layout.col,
            Layout.justifyContentBetween,
          ]}
        >
          <View style={[Layout.main, Layout.gap20]}>
            <Text style={[Fonts.text21]}>เหตุผลในการยกเลิกสินค้า</Text>
            <View style={[Layout.gap10]}>
              <TouchableOpacity
                style={styles.infoBox}
                onPress={() =>
                  handleOnPressTitleNote(
                    'ฉันได้ชำระเงินแล้ว แต่ต้องการเปลี่ยนคำสั่งซื้อ',
                  )
                }
              >
                <Images.icons.cancel1 width="60" />
                <View style={[Layout.col, Layout.fill]}>
                  <Text style={[Fonts.text21, Fonts.textPrimary]}>
                    ฉันได้ชำระเงินแล้ว แต่ต้องการเปลี่ยนคำสั่งซื้อ
                  </Text>
                  <Text style={[Fonts.text21]}>
                    ฉันต้องการยกเลิกหรือเปลี่ยนคำสั่งซื้อ
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.infoBox}
                onPress={() =>
                  handleOnPressTitleNote(
                    'ฉันได้รับสินค้าแล้ว แต่สินค้ายังไม่สมบูรณ์',
                  )
                }
              >
                <Images.icons.cancel2 width="60" />
                <View style={[Layout.col, Layout.fill]}>
                  <Text style={[Fonts.text21, Fonts.textPrimary]}>
                    ฉันได้รับสินค้าแล้ว แต่สินค้ายังไม่สมบูรณ์
                  </Text>
                  <Text style={[Fonts.text21]}>
                    ฉันต้องการรับเงินคืน/คืนสินค้า เพราะสินค้ามีความเสียหาย
                    หรือได้รับสินค้าผิด
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.infoBox}
                onPress={() => {
                  handleOnPressTitleNote('ฉันไม่ได้รับสินค้าบางรายการ');
                }}
              >
                <Images.icons.cancel3 width="60" />
                <View style={[Layout.col, Layout.fill]}>
                  <Text style={[Fonts.text21, Fonts.textPrimary]}>
                    ฉันไม่ได้รับสินค้าบางรายการ
                  </Text>
                  <Text style={[Fonts.text21]}>
                    ฉันต้องการเงินคืน เพราะไม่ได้รับสินค้าบางรายการ
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <ScrollView
          key={1}
          contentContainerStyle={[Layout.gap10, Layout.col, styles.main]}
        >
          <OrderDetail order={order} />
          <View style={[styles.cancelRoot]}>
            <View style={[styles.cancelBox]}>
              <Text style={[Fonts.text18]}>เหตุผลในการคืนเงิน</Text>
              <TouchableOpacity
                onPress={() => {
                  handleOnPressRefundNode();
                }}
              >
                <Text style={[Fonts.text18]}>เลือก</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.cancelRoot]}>
            <View style={[styles.cancelBox]}>
              <Text style={[Fonts.text18]}>จำนวนเงินคืน:</Text>
              <Text style={[Fonts.text18, Fonts.textPrimary]}>฿877</Text>
            </View>
          </View>
          <View style={[styles.cancelRoot]}>
            <Text style={[Fonts.text18]}>
              คำอธิบายเพิ่มเติมเกี่ยวปัญหาที่คุณพบ (ข้อมูลจำเป็นต้องกรอก)
            </Text>
            <Input
              placeholder="กรุณาอธิบายเหตุผลในการยื่นขอ คืนเงิน/คืนสินค้า อย่างละเอียด"
              numberOfLines={2}
            />
          </View>
          <View style={[styles.cameraRoot]}>
            <View style={styles.cameraBox}>
              <ChipImage logo={<Images.icons.camera />} title="เพิ่มรูปภาพ" />
            </View>
          </View>
          <View style={[styles.cancelRoot]}>
            <Text style={[Fonts.text18, Fonts.textCenter, Layout.fill]}>
              หากคืนเงินสำเร็จ จะคืนเงินไปยังบัญชีธนาคารหรือบัตรเดบิต/เครดิต
              ที่คุณทำการชำระเงินมา และโค้ดส่วนลดที่คุณใช้ไปจะได้รับคืนพร้อมกัน
            </Text>
          </View>
        </ScrollView>
      </PagerView>
      <View style={[Layout.main, styles.bottom]}>
        {/* {active === 0 && (
          <Button
            title="ยืนยัน"
            onPress={() => {
              // navigation.goBack();
            }}
          />
        )} */}
        {active === 1 && (
          <Button
            title="ส่งคำขอ"
            onPress={() => {
              navigation.navigate('OrderResult');
            }}
          />
        )}
      </View>
      {isRefundNote && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={['40%']}
          onChange={handleSheetChange}
          onClose={() => {
            setIsRefundNote(false);
          }}
          index={0}
          enablePanDownToClose
          backdropComponent={renderBackdrop}
        >
          <BottomSheetScrollView style={[styles.container]}>
            <View style={[Layout.gap10]}>
              <Text
                style={[Fonts.text28Light, Fonts.textBlack, Fonts.textCenter]}
              >
                เหตุผลในการยกเลิกสินค้า
              </Text>
              <View style={styles.noteItems}>{renderNote()}</View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 16,
  },
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 1,
    backgroundColor: '#FFF',
    padding: 8,
    gap: 8,
  },
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  cancelRoot: {
    paddingHorizontal: 16,
    gap: 10,
  },
  cancelBox: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraRoot: {
    paddingHorizontal: 16,
    gap: 10,
    alignItems: 'flex-start',
  },
  cameraBox: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: '#FFF',
  },
  overscreen: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  noteItems: {
    gap: 10,
  },
});

export default OrderCancelPayment;
