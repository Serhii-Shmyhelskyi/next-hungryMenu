"use client";
import Link from "next/link";
import classnames from "classnames";
import styles from "./HeaderButton.module.scss";
import React, { useState, FC } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import { pageUp } from "../../function/function";
import { dataMenu1, dataMenu2 } from "../data/data";

const HeaderButton: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const AllActive = (toggleMenu: boolean) => {
    setToggleMenu((actualTogleMenu) => !actualTogleMenu);
    window.matchMedia("(max-width: 950px)").matches && toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
    pageUp();
  };

  const pathname = usePathname();

  let isActiveMenu = (obj: string) => pathname === obj;

  const session = useSession();

  return (
    <>
      <div
        className={classnames({
          [styles.headerMenu__content]: true,
          [styles.headerMenu__contentOpen]: !toggleMenu,
        })}>
        <nav className={styles.headerMenu__listWraper}>
          <ul className={styles.headerMenu__list}>
            {dataMenu1.map((obj, i) => {
              return (
                <li
                  key={i}
                  className={classnames({
                    [styles.headerMenu__listActive]: isActiveMenu(obj.href),
                  })}>
                  <Link
                    className={classnames({
                      [styles.headerMenu__listLink]: true,
                      [styles.headerMenu__listActive]: isActiveMenu(obj.href),
                    })}
                    href={obj.href}
                    onClick={() => AllActive(toggleMenu)}>
                    {obj.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className={styles.headerMenu__listWraper}>
          <ul className={styles.headerMenu__list}>
            {dataMenu2.map((obj, i) => {
              return (
                <li
                  key={i}
                  className={classnames({
                    [styles.headerMenu__listActive]: isActiveMenu(obj.href),
                  })}>
                  <Link
                    className={classnames({
                      [styles.headerMenu__listLink]: true,
                      [styles.headerMenu__listActive]: isActiveMenu(obj.href),
                    })}
                    href={obj.href}
                    onClick={() => AllActive(toggleMenu)}>
                    {obj.text}
                  </Link>
                </li>
              );
            })}
            {session?.data && (
              <li
                className={classnames({
                  [styles.headerMenu__listActive]: isActiveMenu("/profile"),
                })}>
                <Link
                  className={classnames({
                    [styles.headerMenu__listLink]: true,
                    [styles.headerMenu__listActive]: isActiveMenu("/profile"),
                  })}
                  href="/profile">
                  PROFILE
                </Link>
              </li>
            )}
            {session?.data ? (
              <li>
                <Link
                  className={classnames({
                    [styles.headerMenu__listLink]: true,
                  })}
                  href="#"
                  onClick={() => signOut({ callbackUrl: "/" })}>
                  SIGN OUT
                </Link>
              </li>
            ) : (
              <li
                className={classnames({
                  [styles.headerMenu__listActive]: isActiveMenu("/signin"),
                })}>
                <Link
                  className={classnames({
                    [styles.headerMenu__listLink]: true,
                    [styles.headerMenu__listActive]: isActiveMenu("/signin"),
                  })}
                  onClick={() => AllActive(toggleMenu)}
                  href="/signin">
                  SIGN IN
                </Link>
              </li>
            )}

            {session.data ? (
              <Link href="/profile">
                <img
                  style={{ width: "40px", borderRadius: "50%" }}
                  src={
                    session.data?.user?.image
                      ? String(session.data?.user?.image)
                      : "./images/user.gif"
                  }
                  alt="menuAuthImg"
                />
              </Link>
            ) : (
              <Link href="/signin">
                <img
                  style={{ width: "40px", borderRadius: "50%" }}
                  src="./images/logIn.png"
                  alt="menuAuthImg"
                />
              </Link>
            )}
          </ul>
        </nav>
      </div>

      <div
        className={
          toggleMenu
            ? styles.headerMenu__wrapper
            : styles.headerMenu__wrapperDark
        }
        onClick={() => AllActive(toggleMenu)}>
        <div className={styles.headerMenu_btn}>
          {toggleMenu ? (
            <div className={styles.headerMenu_btnOpen}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className={styles.headerMenu_btnClose}></div>
          )}
        </div>
      </div>
    </>
  );
};

export { HeaderButton };
