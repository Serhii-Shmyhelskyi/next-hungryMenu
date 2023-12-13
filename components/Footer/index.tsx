"use client";
import { pageUp } from "@/function/function";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} onClick={() => pageUp()}>
      <a href="https://serhii-shmyhelskyi.github.io/portfolio/" target="_blank">
        © 2023 Shm Inc. Designed by <br /> Serhii Shmyhelskyi
      </a>
    </footer>
  );
};
export { Footer };
