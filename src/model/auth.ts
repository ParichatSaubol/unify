import { RoleType } from './options';

export interface AuthState {
  memberId?: string | null;
  role?: RoleType;
  memberCoin?: string | 0.0;
}
