export interface LoginJWTResponeInterface {
  jwtRefreshToken: string;
}
export interface RefreshTokenInterface {
  jwtToken: string;
}

export interface LoginInterface {
  username: string;
  password: string;
}
export interface ResetPasswordData {
  password: string;
}
