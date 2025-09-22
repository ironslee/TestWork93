import axios, { AxiosHeaders } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  timeout: 10000,
});

let tokenGetter: (() => string | null) | null = null;
export const setTokenGetter = (getter: () => string | null) =>
  (tokenGetter = getter);

api.interceptors.request.use((config) => {
  const token = tokenGetter?.();
  if (token) {
    const headers = (config.headers ??= new AxiosHeaders());
    (headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }
  return config;
});
