import { CartItem } from '@/model/cart';
import { type NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderTabs, PaymentStatus, RoleType } from '../src/model/options';
import { TRegisterAddress, TRegisterCustomer } from '@/model/customer';

export type AuthenticationParamsList = {
  SignInWithEmail: undefined;
  SignInWithPhone: undefined;
  SignInWithOldCustomer: undefined;
  ConfirmOTP: {
    isLogin: boolean;
    otpRef: string;
    otpTel: string;
  };
  ForgotPassword: undefined;
  ResetPassword: undefined;
  ResetSuccess: undefined;
  PDPAConfirm: undefined;
  PDPA: undefined;
  Product: undefined;
  RegisterType: undefined;
  RegisterCustomer: { type: RoleType };
  RegisterAddress: { type: RoleType; customer: TRegisterCustomer };
  RegisterInvoice: {
    type: RoleType;
    customerAddress: TRegisterAddress;
    customer: TRegisterCustomer;
  };
  RegisterOldProfile: undefined;
  RegisterOldAddress: undefined;
};

export type ProductParamsList = {
  Home: undefined;
  ServiceIndex: undefined;
  LearnIndex: undefined;
  CartIndex: undefined;
  Profile: undefined;
  Example: undefined;
  ProductDetail: { id?: string; name?: string; isFlash?: boolean };
  ServiceDetail: { id?: string; name?: string };
  LearnDetail: { id?: string; name?: string };
  CheckoutIndex: {
    items?: {
      [key: string]: CartItem;
    };
    services?: {
      [key: string]: CartItem;
    };
    courses?: {
      [key: string]: CartItem;
    };
  };
  PaymentIndex: { orderId?: string };
  PaymentQrPromtpay: { orderId?: string; amount: number };
  PaymentCreditCard: { orderId?: string; amount: number };
  PaymentResult: {
    orderId?: string;
    refId?: string;
    status?: PaymentStatus;
  };
  OrderIndex: {
    tabs?: OrderTabs;
    member?: RoleType;
  };
  OrderDeliveryStatus: { orderId?: string };
  OrderCancel: { orderId?: string };
  ProductFlashStore: { name?: string } | undefined;
  AddressIndex: undefined;
  QuotationInformation: { orderId?: string };
  InvoiceInformation: { orderId?: string };
  UnipointIndex: undefined;
  UnipointHistoryDetail: { id?: string };
  UnipointHistory: undefined;
  UnipointForyou: undefined;
  UnipointDetail: { id?: string };
  UnipointCategory: undefined;
  PromotionIndex: undefined;
  CouponSearch: undefined;
  CouponIndex: undefined;
  CouponCategory: undefined;
};

export type ApplicationStackParamList = {
  ConfirmOTP: {
    isLogin: boolean;
    otpRef: string;
    otpTel: string;
  };
  Startup: undefined;
  Main: NavigatorScreenParams<AuthenticationParamsList>;
  Product: NavigatorScreenParams<ProductParamsList>;
  ProductIndex: undefined;
  BrandIndex: undefined;
  // ProductDetail: { id?: string; name?: string };
  SearchIndex: undefined;
  SearchBrand: undefined;
  Notifications: undefined;
  Category: undefined;
  CommunityIndex: undefined;
  CommunityResult: undefined;
  CommunityDetail: undefined;
  AddressCreated: { type?: RoleType };
  AddressMap: undefined;
  // LearnDetail: undefined;
  LearnCategory: undefined;
  CourseCategory: undefined;
  LearnAllCategory: undefined;
  // ServiceDetail: undefined;
  ServiceBooking: undefined;
  SearchCourse: undefined;
  ServiceBookingInformation: undefined;
  ServiceSearch: undefined;
  ServiceSearchResult: undefined;
  ServiceSuccess: undefined;
  ServiceFailed: undefined;
  Service: undefined;
  Solution: undefined;
  BookingIndex: undefined;
  BookingDetail: undefined;
  ServiceBrand: undefined;
  ProfileSetting: undefined;
  ProfileUser: undefined;
  ProfilePolicy: undefined;
  OrderCancelPayment: { orderId?: string };
  OrderResult: undefined;
  KnowledgeTest: undefined;
  KnowledgeCertificate: undefined;
};

export type MainScreenProps<RouteName extends keyof AuthenticationParamsList> =
  StackScreenProps<AuthenticationParamsList, RouteName>;

export type ApplicationScreenProps<
  RouteName extends keyof ApplicationStackParamList,
> = StackScreenProps<ApplicationStackParamList, RouteName>;

export type ProductScreenProps<RouteName extends keyof ProductParamsList> =
  StackScreenProps<ProductParamsList, RouteName>;
