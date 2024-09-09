interface ICoupon {
  id?: string;
  code?: string;
  discount?: number;
}

export enum ICouponTabs {
  AllDiscountCodes,
  Brand,
  Minimum,
  BuyingWorthwhile,
}

export enum ICouponForMeTabs {
  AllDiscountCodesForMe,
  UsedCode,
  ExpiredCode,
}

export type { ICoupon };
