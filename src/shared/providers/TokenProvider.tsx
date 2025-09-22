"use client";

import { useEffect } from "react";
import { setTokenGetter } from "@/shared/api/axios";
import { useAuth } from "@/shared/store/auth.store";

export default function TokenProvider() {
  useEffect(() => {
    setTokenGetter(() => useAuth.getState().getToken());
  }, []);

  return null;
}
