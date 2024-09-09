import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  AddressCreated,
  AddressMap,
  BrandIndex,
  Category,
  CommunityDetail,
  CommunityIndex,
  CommunityResult,
  LearnCategory,
  Notifications,
  ProductIndex,
  SearchBrand,
  SearchIndex,
  Startup,
  CourseCategory,
  LearnAllCategory,
  ServiceBooking,
  SearchCourse,
  ServiceBookingInformation,
  ServiceSearch,
  ServiceSearchResult,
  ServiceSuccess,
  ServiceFailed,
  Service,
  Solution,
  ServiceBrand,
  BookingIndex,
  BookingDetail,
  ProfileSetting,
  ProfileUser,
  OrderCancelPayment,
  OrderResult,
  KnowledgeTest,
  KnowledgeCertificate,
} from '@/screens';
import { useTheme } from '@/hooks';
import AuthenticationNavigator from './Authentication';
import { useFlipper } from '@react-navigation/devtools';
import { type ApplicationStackParamList } from 'types/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import ProductNavigator from './Product';
import ProfilePolicy from '@/screens/Profile/ProfilePolicy';

const Stack = createStackNavigator<ApplicationStackParamList>();

//router application(หน้าแรก)
// @refresh reset
const ApplicationNavigator: () => React.JSX.Element = () => {
  const { NavigationTheme } = useTheme();

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      {/* <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#fff'}
        translucent
      /> */}
      <GestureHandlerRootView style={styles.topBar}>
        <BottomSheetModalProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={Startup} />
            <Stack.Screen name="Main" component={AuthenticationNavigator} />
            <Stack.Screen name="Product" component={ProductNavigator} />
            <Stack.Screen name="ProductIndex" component={ProductIndex} />
            {/* <Stack.Screen name="ProductDetail" component={ProductDetail} /> */}
            <Stack.Screen name="BrandIndex" component={BrandIndex} />
            <Stack.Screen name="SearchIndex" component={SearchIndex} />
            <Stack.Screen name="SearchBrand" component={SearchBrand} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="CommunityIndex" component={CommunityIndex} />
            <Stack.Screen name="CommunityResult" component={CommunityResult} />
            <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
            <Stack.Screen name="AddressCreated" component={AddressCreated} />
            <Stack.Screen name="AddressMap" component={AddressMap} />
            {/* <Stack.Screen name="LearnDetail" component={LearnDetail} /> */}
            <Stack.Screen name="LearnCategory" component={LearnCategory} />
            <Stack.Screen name="CourseCategory" component={CourseCategory} />
            <Stack.Screen
              name="LearnAllCategory"
              component={LearnAllCategory}
            />
            {/* <Stack.Screen name="ServiceDetail" component={ServiceDetail} /> */}
            <Stack.Screen name="ServiceBooking" component={ServiceBooking} />
            <Stack.Screen name="SearchCourse" component={SearchCourse} />
            <Stack.Screen
              name="ServiceBookingInformation"
              component={ServiceBookingInformation}
            />
            <Stack.Screen name="ServiceSearch" component={ServiceSearch} />
            <Stack.Screen
              name="ServiceSearchResult"
              component={ServiceSearchResult}
            />
            <Stack.Screen name="ServiceSuccess" component={ServiceSuccess} />
            <Stack.Screen name="ServiceFailed" component={ServiceFailed} />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="Solution" component={Solution} />
            <Stack.Screen name="ServiceBrand" component={ServiceBrand} />
            <Stack.Screen name="BookingIndex" component={BookingIndex} />
            <Stack.Screen name="BookingDetail" component={BookingDetail} />
            <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
            <Stack.Screen name="ProfileUser" component={ProfileUser} />
            <Stack.Screen name="ProfilePolicy" component={ProfilePolicy} />
            <Stack.Screen
              name="OrderCancelPayment"
              component={OrderCancelPayment}
            />
            <Stack.Screen name="OrderResult" component={OrderResult} />
            <Stack.Screen name="KnowledgeTest" component={KnowledgeTest} />
            <Stack.Screen
              name="KnowledgeCertificate"
              component={KnowledgeCertificate}
            />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 24,
  },
});

export default ApplicationNavigator;
