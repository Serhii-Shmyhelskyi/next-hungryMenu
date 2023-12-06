"use client";
import Link from "next/link";
import classnames from "classnames";
import styles from "./header.module.scss";
import React, { useState, FC } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import { pageUp } from "../../function/function";
import { dataMenu1, dataMenu2 } from "../data/data";

const Header: FC = () => {
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
      <header
        className={classnames({
          [styles.headerMenu__toggleRight]: !toggleMenu,
        })}>
        <div className={styles.header__innerMenu}>
          <div className={styles.headerMenu__content}>
            <nav className={styles.headerMenu__listWraper}>
              <ul className={styles.headerMenu__list}>
                {dataMenu1.map((obj, i) => {
                  return (
                    <Link
                      href={obj.href}
                      key={i}
                      onClick={() => AllActive(toggleMenu)}>
                      <li
                        className={classnames({
                          [styles.active]: isActiveMenu(obj.href),
                          [styles.headerMenu__listActive]: isActiveMenu(
                            obj.href
                          ),
                        })}>
                        <h3
                          className={classnames({
                            [styles.headerMenu__listActive]: isActiveMenu(
                              obj.href
                            ),
                          })}>
                          {obj.text}
                        </h3>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </nav>

            <nav className={styles.headerMenu__listWraper}>
              <ul className={styles.headerMenu__list}>
                {dataMenu2.map((obj, i) => {
                  return (
                    <Link
                      href={obj.href}
                      key={i}
                      onClick={() => AllActive(toggleMenu)}>
                      <li
                        className={classnames({
                          [styles.active]: isActiveMenu(obj.href),
                          [styles.headerMenu__listActive]: isActiveMenu(
                            obj.href
                          ),
                        })}>
                        <h3
                          className={classnames({
                            [styles.headerMenu__listActive]: isActiveMenu(
                              obj.href
                            ),
                          })}>
                          {obj.text}
                        </h3>
                      </li>
                    </Link>
                  );
                })}
                {session?.data && (
                  <Link href="/profile">
                    <li>
                      <h3>PROFILE</h3>
                    </li>
                  </Link>
                )}
                {session?.data ? (
                  <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                    <li>
                      <h3>SIGN OUT</h3>
                    </li>
                  </Link>
                ) : (
                  <Link onClick={() => AllActive(toggleMenu)} href="/signin">
                    <li>
                      <h3>SIGN IN</h3>
                    </li>
                  </Link>
                )}

                {session.data ? (
                  <Link href="/profile">
                    <img
                      className={styles.menuAuthImg}
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
                      className={styles.menuAuthImg}
                      src="./images/logIn.png"
                      alt="menuAuthImg"
                    />
                  </Link>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>

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

export { Header };
