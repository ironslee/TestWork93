"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.scss";

export default function NavMenu() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Home" },
    { href: "/hot-deals", label: "Hot Deals" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "All Products" },
    { href: "/category/laptops", label: "Laptops" },
    { href: "/category/smartphones", label: "Smartphones" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li
                key={item.href}
                className={active ? styles.active : undefined}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
