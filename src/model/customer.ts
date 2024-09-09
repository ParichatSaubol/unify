import { RoleType } from '@/model/options';

type Address = {
  address: string; //
  building: string; //อาคาร
  village: string; //หมู่บ้าน
  road: string; //ถนน
  postalCode: string; //รหัสไปรษณีย์
  province: string; //จังหวัด
  // country: string; //ประเทศ
  district: string; //อำเภอ/เขต
  subdistrict: string; //ตำบล/แขวง
};

type TRegisterCustomer = {
  type?: RoleType;
  prefix: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type TRegisterOldInvoice = {
  isHeadOffice?: boolean;
  branch?: string;
  prefix: string;
  name: string;
  taxID: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type TRegisterOldAddress = {
  isNews: boolean;
  address: Address[];
};

type TRegisterAddress = Address & {
  type?: RoleType;
  long?: number;
  lat?: number;
  isDefault?: boolean;
  isInvoice?: boolean;
  isNews?: boolean;
};

type TRegisterInvoice = Address & {
  type: RoleType;
  name: string;
  isHeadOffice: boolean;
  branch?: string;
  taxID: string;
  isAccept: boolean;
};

export type {
  TRegisterCustomer,
  TRegisterAddress,
  TRegisterInvoice,
  TRegisterOldAddress,
  TRegisterOldInvoice,
};
