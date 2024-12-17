export interface OtpResponse {
  data: {
    data?: {
      otp_member_id: string;
      otp_number: string;
      otp_ref: string;
      otp_status: 0;
      otp_tel: string;
    };
    message: string;
    status: number;
  };
}

export interface CheckOtpResponse {
  data: {
    data?: {
      member_id: string;
      member_code: string;
      member_first_name: string;
      member_last_name: string;
      member_phone: string;
      member_email: string;
      member_password: string;
      member_coin: string;
      member_coin_expire: any;
      member_coin_last: any;
      member_coin_last_date: any;
      member_name_tax: any;
      member_tax_type: any;
      member_tax_branch_name: any;
      member_tax_number: any;
      member_tax_address: any;
      member_tax_building: any;
      member_tax_moo: any;
      member_tax_zipcode: any;
      member_tax_province: any;
      member_tax_amphur: any;
      member_tax_district: any;
      member_tax_file_p20: any;
      member_tax_file_p20_path: any;
      member_tax_file_certificate: any;
      member_tax_file_certificate_path: any;
      member_type: string;
      member_category: string;
      member_social_id: string;
      member_status: string;
      member_create: string;
      member_update: any;
      member_permission: string;
      member_discount: string;
      member_is_thai: string;
      member_tax_building_number: any;
      member_tax_building_roomnumber: any;
      ads_id: string;
      ads_member_id: string;
      ads_first_name: string;
      ads_last_name: string;
      ads_phone: string;
      ads_house_number: string;
      ads_building: any;
      ads_moo: any;
      ads_alley: string;
      ads_road: string;
      ads_zip_code: string;
      ads_province: string;
      ads_amphur: string;
      ads_district: string;
      ads_primary: string;
      ads_status: string;
      ads_create: string;
      ads_update: any;
      ads_building_number: any;
      ads_building_roomnumber: any;
    };
    message: string;
    status: number;
  };
}

export interface EmailLoginResponse {
  data: {
    res_code: '00' | '03' | '04';
    res_text: string;
    res_data?: {
      member_id: string;
      member_code: string;
      member_first_name: string;
      member_last_name: string;
      member_phone: string;
      member_email: string;
      member_password: string;
      member_coin: string;
      member_coin_expire: any;
      member_coin_last: any;
      member_coin_last_date: any;
      member_name_tax: any;
      member_tax_type: any;
      member_tax_branch_name: any;
      member_tax_number: any;
      member_tax_address: any;
      member_tax_building: any;
      member_tax_moo: any;
      member_tax_zipcode: any;
      member_tax_province: any;
      member_tax_amphur: any;
      member_tax_district: any;
      member_tax_file_p20: any;
      member_tax_file_p20_path: any;
      member_tax_file_certificate: any;
      member_tax_file_certificate_path: any;
      member_type: string;
      member_category: string;
      member_social_id: string;
      member_status: string;
      member_create: string;
      member_update: any;
      member_permission: string;
      member_discount: string;
      member_is_thai: string;
      member_tax_building_number: any;
      member_tax_building_roomnumber: any;
    };
  };
}
