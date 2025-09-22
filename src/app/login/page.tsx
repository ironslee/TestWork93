"use client";

import { FormEvent, useEffect, useState } from "react";
import { loginRequest } from "@/features/auth/api";
import { useAuth } from "@/shared/store/auth.store";
import { required3 } from "@/shared/utils/form";
import { useRouter } from "next/navigation";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const login = useAuth((state) => state.login);
  const user = useAuth((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = {
      username: required3(username) ?? undefined,
      password: required3(password) ?? undefined,
    };
    setErrors(nextErrors);
    if (nextErrors.username || nextErrors.password) return;

    setLoading(true);
    setApiError(null);
    try {
      const data = await loginRequest({ username, password });
      login(data);
      router.replace("/");
    } catch {
      setApiError("Invalid login or password");
    } finally {
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={`sectionTitle ${styles.title}`}>Login</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            autoComplete="username"
            className={styles.input}
            disabled={loading}
          />
          {errors.username && (
            <div className={styles.error}>{errors.username}</div>
          )}
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            className={styles.input}
            disabled={loading}
          />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
        </div>
        {apiError && <div className={styles.error}>{apiError}</div>}
        <button type="submit" disabled={loading} className={styles.btn}>
          {loading ? "Logging in…" : "Login"}
        </button>
        <small>
          Demo (DummyJSON): username: <b>emilys</b>, password: <b>emilyspass</b>
        </small>
      </form>
    </section>
  );
}
