import {USER_ROLES} from './vendors/user.types';

export type LoginPayload = {
  username: string;
  password: string;
};

export interface RegisterPayload extends LoginPayload {
  email: string;
}

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  email: string;
  roles: USER_ROLES[];
  username: string;
};

export type RegisterResponse = string;

export type RefreshTokenResponse = {
  accessToken: string;
  tokenType: string;
};
