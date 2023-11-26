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
        <h1 className={styles.menu__title}>MENU</h1>
        <ul className={styles.menuLi}>
          <Link href="/menu/dailyMenu">
            <li
              className={classnames({
                [styles.active]: isActiveMenu("/menu/dailyMenu"),
              })}>
              to eat
            </li>
          </Link>
          <Link href="/menu/drinkMenu">
            <li
              className={classnames({
                [styles.active]: isActiveMenu("/menu/drinkMenu"),
              })}>
              to drink
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
