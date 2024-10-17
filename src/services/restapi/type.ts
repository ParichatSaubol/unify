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
