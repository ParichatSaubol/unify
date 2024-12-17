import { RoleType } from './options';

export interface AuthState {
  memberId?: string | null;
  role?: RoleType;
}
