import type {User} from 'papa-vinyl-types';

export enum USER_ROLES {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER',
  MODERATOR = 'ROLE_MODERATOR',
}

export type IUser = User.Interface;
