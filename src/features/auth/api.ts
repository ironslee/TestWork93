import { api } from "@/shared/api/axios";
import type { LoginPayload, LoginResponse } from "./types";

export async function loginRequest(payload: LoginPayload) {
  const { data } = await api.post<LoginResponse>("/auth/login", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
}
