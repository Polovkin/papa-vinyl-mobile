import { USER_ROLES } from './user.types'

export type LoginPayload = {
  username: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  refreshToken: string
  email: string
  phone: string
  roles: USER_ROLES[]
  username: string
}

export type RefreshTokenResponse = {
  accessToken: string
  refreshToken: string
  tokenType: string
}
