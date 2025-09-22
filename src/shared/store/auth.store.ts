"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/features/auth/types";

type AuthState = {
  user: (User & { token: string }) | null;
  login: (u: User & { token: string }) => void;
  logout: () => void;
  getToken: () => string | null;
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      getToken: () => get().user?.token ?? null,
    }),
    { name: "auth" }
  )
);
