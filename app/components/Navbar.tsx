"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Link href="/"><img
            src="/logo.png"
            alt="Team Obsidian Logo"
            width={150}
            height={150}
          /></Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/mods">Mods</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
