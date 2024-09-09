type Address = {
  id?: number;
  name?: string;
  phoneNumber?: string;
  address?: string;
  isDefault?: boolean;
};

type AddressCart = {
  id?: number;
  name?: string;
  address?: string;
  phoneNumber?: string;
};

export type { Address, AddressCart };
