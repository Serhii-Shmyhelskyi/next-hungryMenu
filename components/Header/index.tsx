"use client";

import Link from "next/link";
import { pageUp } from "../../function/function";
import classnames from "classnames";
import styles from "./header.module.scss";
import React, { useState, FC } from "react";
import { usePathname } from "next/navigation";

// type menuItem1 = {
//   style: string;
//   href: string;
//   text: string;
// };
// type menuItem2 = {
//   style: string;
//   href: string;
//   text: string;
// };

let dataMenu1 = [
  { href: "/", text: "HOME" },
  { href: "/about", text: "ABOUT" },
  { href: "/team", text: "TEAM" },
  { href: "/booking", text: "BOOKING" },
];

let dataMenu2 = [
  { href: "/menu", text: "MENU" },
  { href: "/galerie", text: "GALERIE" },
  { href: "/events", text: "EVENTS" },
  { href: "/contact", text: "CONTACT" },
];

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
