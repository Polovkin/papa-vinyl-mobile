export enum USER_ROLES {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER',
  MODERATOR = 'ROLE_MODERATOR',
}

export type IUser = {
  username: string;
  email: string;
  phone: string;
  roles: USER_ROLES[];
};
