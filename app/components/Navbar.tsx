"use client";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#mods">Mods</a></li>
      </ul>
    </nav>
  );
}
