"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Team Obsidian Logo"
              width={175}
              height={175}
            />
          </Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/team"
              className={pathname === "/team" ? styles.active : ""}
            >
              Team
            </Link>
          </li>
          
          <li>
            <Link
              href="/gallery"
              className={pathname === "/gallery" ? styles.active : ""}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
