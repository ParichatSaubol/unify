export interface CartItem {
  isChecked: boolean;
  quantity: number;
  no: number;
}

export interface CartState {
  member?: string | null;
  items: {
    [key: string]: CartItem;
  };
  services: {
    [key: string]: CartItem;
  };
  courses: {
    [key: string]: CartItem;
  };
}
