"use client";
import classnames from "classnames";
import Link from "next/link";
import styles from "./menuMenuComponent.module.scss";
import { usePathname } from "next/navigation";

export default function MenuinMenuComponent() {
  const pathname = usePathname();
  let isActiveMenu = (obj: string) => pathname === obj;
  return (
    <>
      <div className={styles.menu}>
        <h1 className={styles.menu__title}>Menu:</h1>
        <ul className={styles.menuLi}>
          <Link href="/menu/morningMenu">
            <li
              className={classnames({
                [styles.active]: isActiveMenu("/menu/morningMenu"),
              })}>
              Morning menu
            </li>
          </Link>
          <Link href="/menu/dailyMenu">
            <li
              className={classnames({
                [styles.active]: isActiveMenu("/menu/dailyMenu"),
              })}>
              Daily menu
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
