import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AppBar,
  Button,
  DefaultLayout,
  OrderCard,
  OrderDetailCancel,
} from '@/components';
import { IOrder } from '@/model/order';
import {
  ButtonVariant,
  AppColor,
  OrderTabs,
  OrderStatus,
} from '@/model/options';
import PagerView from 'react-native-pager-view';

type Props = NativeStackScreenProps<ProductParamsList, 'OrderIndex'>;

//หน้าแสดงรายการสั่งซื้อ
// @refresh reset
const OrderIndex = ({ navigation, route }: Props): JSX.Element => {
  const { tabs } = route.params;
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();

  // state
  const ref = useRef<PagerView>(null);
  const [active, setActive] = React.useState<typeof tabs>(tabs);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orders, setOrders] = React.useState<IOrder[]>([
    {
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
      status: OrderStatus.WaitingForPayment,
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
    },
    {
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
      status: OrderStatus.WaitingForPayment,
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
    },
  ]);

  // ชั่วคราว
  const [ordersWaitingForDelivery] = React.useState<IOrder[]>([
    {
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
      status: OrderStatus.WaitingForDelivery,
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
    },
    {
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
      status: OrderStatus.WaitingForDelivery,
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
    },
  ]);
  const [ordersBeReceived] = React.useState<IOrder[]>([
    {
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
    },
  ]);

  // handle callback
  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>): void => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

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
        title="สถานะการสั่งซื้อสินค้า"
        onPress={() => {
          //กลับไปหน้าก่อนหน้า
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap5,
          Layout.col,
          Layout.justifyContentBetween,
          styles.root,
        ]}
      >
        <View style={[Layout.bgWhite]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[Layout.row, Layout.gap20]}
          >
            <Button
              title="รอการชำระเงิน"
              variant={ButtonVariant.text}
              active={active === OrderTabs.WaitingForPayment}
              onPress={() => {
                setActive(OrderTabs.WaitingForPayment);
                ref.current?.setPage(OrderTabs.WaitingForPayment);
              }}
            />
            <Button
              title="รอการจัดส่ง"
              variant={ButtonVariant.text}
              active={active === OrderTabs.WaitingForDelivery}
              onPress={() => {
                setActive(OrderTabs.WaitingForDelivery);
                ref.current?.setPage(OrderTabs.WaitingForDelivery);
              }}
            />
            <Button
              title="ที่ต้องได้รับ"
              variant={ButtonVariant.text}
              active={active === OrderTabs.BeReceived}
              onPress={() => {
                setActive(OrderTabs.BeReceived);
                ref.current?.setPage(OrderTabs.BeReceived);
              }}
            />
            <Button
              title="ยกเลิกสินค้า"
              variant={ButtonVariant.text}
              active={active === OrderTabs.CancelTheProduct}
              onPress={() => {
                setActive(OrderTabs.CancelTheProduct);
                ref.current?.setPage(OrderTabs.CancelTheProduct);
              }}
            />
          </ScrollView>
        </View>
        <PagerView
          ref={ref}
          style={Layout.fill}
          initialPage={active}
          onPageSelected={va => {
            setActive(va.nativeEvent.position);
          }}
        >
          {/* รอการชำระเงิน */}
          <ScrollView
            contentContainerStyle={[Layout.gap20]}
            key={OrderTabs.WaitingForPayment}
          >
            {orders.map((order, key) => (
              <OrderCard key={key} order={order} />
            ))}
          </ScrollView>
          {/* รอการจัดส่ง */}
          <ScrollView
            contentContainerStyle={[Layout.gap20]}
            key={OrderTabs.WaitingForDelivery}
          >
            {ordersWaitingForDelivery.map((order, key) => (
              <OrderCard key={key} order={order} />
            ))}
          </ScrollView>
          {/* ที่ต้องได้รับ */}
          <ScrollView
            contentContainerStyle={[Layout.gap20]}
            key={OrderTabs.BeReceived}
          >
            {ordersBeReceived.map((order, key) => (
              <OrderCard key={key} order={order} />
            ))}
          </ScrollView>
          {/* ยกเลิกสินค้า */}
          <ScrollView
            key={OrderTabs.CancelTheProduct}
            contentContainerStyle={[Layout.gap20]}
          >
            {ordersBeReceived[0] && (
              <OrderDetailCancel order={ordersBeReceived[0]} />
            )}
            {/* <OrderEmpty />
            <View style={[styles.bottom]}>
              <Button title="สั่งซื้อสินค้า" />
            </View> */}
          </ScrollView>
        </PagerView>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  root: {
    flexGrow: 1,
  },
  bottom: {
    padding: 16,
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
});

export default OrderIndex;
