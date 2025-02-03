import { TabBar } from '@/components';
import { useCart, useTheme } from '@/hooks';
import {
  AddressIndex,
  CartIndex,
  CheckoutIndex,
  CouponCategory,
  CouponIndex,
  CouponSearch,
  Home,
  InvoiceInformation,
  LearnDetail,
  LearnIndex,
  OrderCancel,
  OrderDeliveryStatus,
  OrderIndex,
  PaymentCreditCard,
  PaymentIndex,
  PaymentQrPromtpay,
  PaymentResult,
  ProductDetail,
  ProductFlashStore,
  ProfileIndex,
  PromotionIndex,
  QuotationInformation,
  ServiceDetail,
  ServiceIndex,
  UnipointCategory,
  UnipointDetail,
  UnipointForyou,
  UnipointHistory,
  UnipointHistoryDetail,
  UnipointIndex,
} from '@/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { ProductParamsList } from 'types/navigation';

const Tab = createBottomTabNavigator<ProductParamsList>();

//router product สินค้า
const ProductNavigator: () => React.JSX.Element = () => {
  const { Images } = useTheme();
  const { currentCart } = useCart();
  const { t } = useTranslation('common');

  const cartCount =
    Object.keys(currentCart.items).length +
    Object.keys(currentCart.services).length +
    Object.keys(currentCart.courses).length;

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
      backBehavior="history"
    >
      <Tab.Screen
        key="Home"
        name="Home"
        component={Home}
        options={{
          title: 'Home|ProductDetail',
          tabBarLabel: t('ProductNavigator.homeTabLabel'),
          tabBarIcon: ({ color, size }) => (
            <Images.icons.buyProducts
              color={color}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ServiceIndex"
        component={ServiceIndex}
        options={{
          title: 'ServiceIndex|ServiceDetail',
          tabBarLabel: t('ProductNavigator.serviceTabLabel'),
          tabBarIcon: ({ color, size }) => (
            <Images.icons.serviceWork
              color={color}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LearnIndex"
        component={LearnIndex}
        options={{
          title: 'LearnIndex|LearnDetail',
          tabBarLabel: t('ProductNavigator.learnTabLabel'),
          tabBarIcon: ({ color, size }) => (
            <Images.icons.course color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CartIndex"
        component={CartIndex}
        options={{
          title:
            'CartIndex|CheckoutIndex|PaymentIndex|PaymentQrPromtpay|PaymentCreditCard|PaymentResult',
          tabBarLabel: t('ProductNavigator.cartTabLabel'),
          tabBarIcon: ({ color, size }) => (
            <View>
              <Images.icons.shoppingcart
                color={color}
                width={size}
                height={size}
              />
              {cartCount > 0 && <View style={styles.dot} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileIndex}
        options={{
          title: 'Profile',
          tabBarLabel: t('ProductNavigator.profileTabLabel'),
          tabBarIcon: ({ color, size }) => (
            <Images.icons.profile2user
              color={color}
              width={size}
              height={size}
            />
          ),
        }}
      />

      <Tab.Screen name="ProductDetail" component={ProductDetail} />
      <Tab.Screen name="ServiceDetail" component={ServiceDetail} />
      <Tab.Screen name="LearnDetail" component={LearnDetail} />
      <Tab.Screen name="CheckoutIndex" component={CheckoutIndex} />
      <Tab.Screen name="PaymentIndex" component={PaymentIndex} />
      <Tab.Screen name="PaymentQrPromtpay" component={PaymentQrPromtpay} />
      <Tab.Screen name="PaymentCreditCard" component={PaymentCreditCard} />
      <Tab.Screen name="PaymentResult" component={PaymentResult} />
      <Tab.Screen name="OrderIndex" component={OrderIndex} />
      <Tab.Screen name="OrderDeliveryStatus" component={OrderDeliveryStatus} />
      <Tab.Screen name="OrderCancel" component={OrderCancel} />
      <Tab.Screen name="ProductFlashStore" component={ProductFlashStore} />
      <Tab.Screen name="AddressIndex" component={AddressIndex} />
      <Tab.Screen
        name="QuotationInformation"
        component={QuotationInformation}
      />
      <Tab.Screen name="InvoiceInformation" component={InvoiceInformation} />
      <Tab.Screen name="UnipointIndex" component={UnipointIndex} />
      <Tab.Screen name="UnipointDetail" component={UnipointDetail} />
      <Tab.Screen name="UnipointHistory" component={UnipointHistory} />
      <Tab.Screen name="UnipointForyou" component={UnipointForyou} />
      <Tab.Screen
        name="UnipointHistoryDetail"
        component={UnipointHistoryDetail}
      />
      <Tab.Screen name="UnipointCategory" component={UnipointCategory} />
      {/*  */}
      <Tab.Screen name="CouponCategory" component={CouponCategory} />
      <Tab.Screen name="CouponIndex" component={CouponIndex} />
      <Tab.Screen name="CouponSearch" component={CouponSearch} />
      <Tab.Screen name="PromotionIndex" component={PromotionIndex} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ProductNavigator;
