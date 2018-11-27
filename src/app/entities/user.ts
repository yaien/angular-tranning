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
