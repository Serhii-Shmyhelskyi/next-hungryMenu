"use client";
import Link from "next/link";
import classnames from "classnames";
import styles from "./HeaderButton.module.scss";
import React, { useState, FC } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

interface HeaderButtonProps {
  combinedArray1: { href: string; text: string }[];
  combinedArray2: { href: string; text: string }[];
  signInText: string;
  profile: string;
  signOutText: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  combinedArray1,
  combinedArray2,
  signInText,
  profile,
  signOutText,
}) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const AllActive = (toggleMenu: boolean) => {
    setToggleMenu((actualTogleMenu) => !actualTogleMenu);
    window.matchMedia("(max-width: 950px)").matches && toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
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
            {combinedArray1.map((obj, i) => {
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
            {combinedArray2.map((obj, i) => {
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
                  {profile}
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
                  {signOutText}
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
                  {signInText}
                </Link>
              </li>
            )}

            {session.data ? (
              <Link href="/profile">
                <img
                  className={styles.menuAuthImg}
                  style={{ width: "40px", borderRadius: "50%" }}
                  src={
                    session.data?.user?.image
                      ? String(session.data?.user?.image)
                      : "/images/user.gif"
                  }
                  alt="menuAuthImg"
                />
              </Link>
            ) : (
              <Link href="/signin">
                <img
                  className={styles.menuAuthImg}
                  style={{ width: "40px", borderRadius: "50%" }}
                  src="/images/logIn.png"
                  alt="menuAuthImg"
                />
              </Link>
            )}
          </ul>
        </nav>
        <div>
          <button className={styles.home__button}>
            <Link
              className={styles.home__buttonLink}
              href={`/en/${pathname.slice(4, pathname.length)}`}
              locale="en">
              en
            </Link>
          </button>
          <button className={styles.home__button}>
            <Link
              className={styles.home__buttonLink}
              href={`/de/${pathname.slice(4, pathname.length)}`}
              locale="de">
              de
            </Link>
          </button>
        </div>
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
