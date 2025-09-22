"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { useAuth } from "@/shared/store/auth.store";
import NavMenu from "@/components/shared/NavMenu/NavMenu";

export default function Header() {
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.container}>
          <div className={styles.topRight}>
            {!user ? (
              <Link href="/login" className={styles.loginLink}>
                Login
              </Link>
            ) : (
              <>
                <span className={styles.user}>
                  {user.firstName} {user.lastName}
                </span>
                <button className={styles.logout} onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.brandRow}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Abelohost Shop<span>.</span>
          </Link>
        </div>
      </div>

      <div className={styles.redline} />

      <NavMenu />
    </header>
  );
}
