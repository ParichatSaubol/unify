import { AuthState } from '@/model/auth';
import { RoleType } from '@/model/options';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
  memberId: null,
  role: undefined,
  memberCoin: 0.0,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<{ role: RoleType }>) => {
      state.role = action.payload.role;
    },
    resetMeber: state => {
      state.memberId = null;
      state.role = undefined;
    },
    setMemberCoin: (state, action: PayloadAction<{ memberCoin: string }>) => {
      state.memberCoin = action.payload.memberCoin;
    },
  },
});

export const { setRole, resetMeber, setMemberCoin } = slice.actions;

export default slice.reducer;
