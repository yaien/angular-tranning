export interface User {
  name: string;
  email: string;
  password: string;
  id?: number;
}

export interface RegisterPayload extends User {
  confirmation: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface BasicProfile {
  name: string;
  email: string;
}

export interface PasswordProfile {
  newPassword: string;
  password: string;
  confirmation: string;
}
