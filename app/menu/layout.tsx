"use client";
import Link from "next/link";

import classnames from "classnames";
import { usePathname } from "next/navigation";

import "../../app/menu/globalsMenu.scss";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let isActiveMenu = (obj: string) => pathname === obj;

  return (
    <div className="menu">
      <h1 className="menu__title">Menu:</h1>
      <ul className="menuLi">
        <Link href="/menu/morningMenu">
          <li
            className={classnames({
              ["active"]: isActiveMenu("/menu/morningMenu"),
            })}>
            Morning menu
          </li>
        </Link>
        <Link href="/menu/dailyMenu">
          <li
            className={classnames({
              ["active"]: isActiveMenu("/menu/dailyMenu"),
            })}>
            Daily menu
          </li>
        </Link>
      </ul>
      {children}
    </div>
  );
}
