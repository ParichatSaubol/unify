import React from 'react';

import {
  ConfirmOTP,
  ForgotPassword,
  PDPA,
  PDPAConfirm,
  RegisterCustomer,
  RegisterAddress,
  RegisterType,
  ResetPassword,
  ResetSuccess,
  SignInWithEmail,
  SignInWithOldCustomer,
  SignInWithPhone,
  RegisterInvoice,
  RegisterOldProfile,
  RegisterOldAddress,
} from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticationParamsList } from 'types/navigation';

const Stack = createStackNavigator<AuthenticationParamsList>();

//router main
// @refresh reset
const AuthenticationNavigator: () => React.JSX.Element = () => {
  return (
    <Stack.Navigator
      initialRouteName="PDPA"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PDPA" component={PDPA} />
      <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
      <Stack.Screen name="SignInWithPhone" component={SignInWithPhone} />
      <Stack.Screen
        name="SignInWithOldCustomer"
        component={SignInWithOldCustomer}
      />
      <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
      <Stack.Screen name="PDPAConfirm" component={PDPAConfirm} />

      <Stack.Screen name="RegisterType" component={RegisterType} />
      <Stack.Screen name="RegisterCustomer" component={RegisterCustomer} />
      <Stack.Screen name="RegisterAddress" component={RegisterAddress} />
      <Stack.Screen name="RegisterInvoice" component={RegisterInvoice} />
      <Stack.Screen name="RegisterOldProfile" component={RegisterOldProfile} />
      <Stack.Screen name="RegisterOldAddress" component={RegisterOldAddress} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
