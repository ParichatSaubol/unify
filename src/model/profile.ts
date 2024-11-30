import { ImageSourcePropType } from 'react-native/types';

type TProfile = {
  id?: number;
  name?: string;
  company?: string;
  point?: number;
  cart?: number;
  cartSummary?: number;
  lastOrder?: {
    image?: ImageSourcePropType;
    status?: string;
  };
};

type TMenu = {
  name: string;
  title: string;
  icon?: JSX.Element;
  isOption: boolean;
};

export type { TProfile, TMenu };

export interface IAddressCart {
  ads_id: string;
  ads_member_id: string;
  ads_first_name: string;
  ads_last_name: string;
  ads_phone: string;
  ads_house_number: string;
  ads_building: string;
  ads_moo: string;
  ads_alley: string;
  ads_road: string;
  ads_zip_code: string;
  ads_province: null;
  ads_amphur: null;
  ads_district: null;
  ads_primary: string;
  ads_status: string;
  ads_create: string;
  ads_update: string;
  ads_building_number: string;
  ads_building_roomnumber: string;
  provinces_name: string;
  amphur_name: string;
  district_name: string;
  provinces_name_en: string;
  amphur_name_en: string;
  district_name_en: string;
  dtail: string;
}

export interface IProvince {
  Id: string;
  Code: string;
  NameInThai: string;
  NameInEnglish: string;
  geography_id: string;
}

export interface IAmphur {
  Id: string;
  Code: string;
  NameInThai: string;
  NameInEnglish: string;
  ProvinceId: string;
}

export interface IDistrict {
  Id: string;
  Code: string;
  NameInThai: string;
  NameInEnglish: string;
  Latitude: string;
  Longitude: string;
  DistrictId: string;
  ZipCode: string;
}
