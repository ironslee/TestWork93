export type LoginPayload = {
  username: string;
  password: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginResponse = User & { token: string };
