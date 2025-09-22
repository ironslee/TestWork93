"use client";
import styles from "./Footer.module.scss";
import { useAuth } from "@/shared/store/auth.store";

export default function Footer() {
  const user = useAuth((state) => state.user);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {year} {user ? <> | Logged as {user.email}</> : null}
      </div>
    </footer>
  );
}
