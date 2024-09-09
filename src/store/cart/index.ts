import { CartItem, CartState } from '@/model/cart';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CartState = {
  items: {},
  services: {},
  courses: {},
  member: null,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCartMember: (
      state,
      { payload: { id } }: PayloadAction<{ id: string }>,
    ) => {
      state.member = id;
      state.items = {};
    },
    addCart: (
      state,
      { payload: { id, item, method } }: PayloadAction<PlayLoadAddCart>,
    ) => {
      switch (method) {
        case 'course':
          state.courses = {
            ...state.courses,
            [id]: item,
          };

          state.courses = Object.keys(state.courses)
            .sort(
              (a, b) =>
                Number(state.courses[a].no) - Number(state.courses[b].no),
            )
            .reduce((obj: { [key: string]: CartItem }, key) => {
              obj[key] = state.courses[key];
              return obj;
            }, {});
          break;
        case 'product':
          state.items = {
            ...state.items,
            [id]: item,
          };

          state.items = Object.keys(state.items)
            .sort(
              (a, b) => Number(state.items[a].no) - Number(state.items[b].no),
            )
            .reduce((obj: { [key: string]: CartItem }, key) => {
              obj[key] = state.items[key];
              return obj;
            }, {});
          break;
        case 'service&solution':
          state.services = {
            ...state.services,
            [id]: item,
          };

          state.services = Object.keys(state.services)
            .sort(
              (a, b) =>
                Number(state.services[a].no) - Number(state.services[b].no),
            )
            .reduce((obj: { [key: string]: CartItem }, key) => {
              obj[key] = state.services[key];
              return obj;
            }, {});
          break;
        default:
          break;
      }
    },
    updateCart: (
      state,
      { payload: { id, item, method } }: PayloadAction<PlayLoadUpdateCart>,
    ) => {
      switch (method) {
        case 'course':
          state.courses = {
            ...state.courses,
            [id]: { ...state.courses[id], ...item },
          };
          break;
        case 'product':
          state.items = {
            ...state.items,
            [id]: { ...state.items[id], ...item },
          };
          break;
        case 'service&solution':
          state.services = {
            ...state.services,
            [id]: { ...state.services[id], ...item },
          };
          break;
        default:
          break;
      }
    },
    updateCheckAll: (
      state,
      {
        payload: { checked, method },
      }: PayloadAction<PlayLoadUpdateCheckAllCart>,
    ) => {
      switch (method) {
        case 'course':
          Object.keys(state.courses).map(
            key => (state.courses[key].isChecked = checked),
          );
          break;
        case 'product':
          Object.keys(state.items).map(
            key => (state.items[key].isChecked = checked),
          );
          break;
        case 'service&solution':
          Object.keys(state.services).map(
            key => (state.services[key].isChecked = checked),
          );
          break;
        default:
          break;
      }
    },
    removeCart: (
      state,
      { payload: { id, method } }: PayloadAction<PlayLoadRemoveCart>,
    ) => {
      switch (method) {
        case 'course':
          if (state.courses?.[id] != null) {
            delete state.courses[id];
          }
          break;
        case 'product':
          if (state.items?.[id] != null) {
            delete state.items[id];
          }
          break;
        case 'service&solution':
          if (state.services?.[id] != null) {
            delete state.services[id];
          }
          break;
        default:
          break;
      }
    },
    resetCart: state => {
      state.items = {};
      state.courses = {};
      state.services = {};
      state.member = null;
    },
  },
});

type BasePlayLoad = {
  id: string;
  method: 'service&solution' | 'product' | 'course';
};

type PlayLoadRemoveCart = BasePlayLoad & {};

type PlayLoadUpdateCart = BasePlayLoad & {
  item: { isChecked?: boolean; quantity?: number };
};

type PlayLoadUpdateCheckAllCart = BasePlayLoad & {
  checked: boolean;
};

type PlayLoadAddCart = BasePlayLoad & {
  item: CartItem;
};

export const { changeCartMember, addCart, updateCart, removeCart, resetCart } =
  slice.actions;

export default slice.reducer;
