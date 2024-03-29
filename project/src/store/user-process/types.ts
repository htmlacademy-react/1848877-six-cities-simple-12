import { AuthorizationStatus } from '../../constants/enum';

export type UserData = {
  id: number;
  email: string;
  token: string;
  name: string;
  isPro: boolean;
  avatarUrl: string;
} | null;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};
