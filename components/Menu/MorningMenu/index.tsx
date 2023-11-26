"use client";
import React, { FC, useState } from "react";

import styles from "./MorningMenu.module.scss";

let morningMenuarr = [
  {
    text: "AMERICAN BREAKFAST",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "5 USD",
    href: "/images/morningMenu1.jpg",
  },
  {
    text: "IRISH BREAKFAST",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "5 USD",
    href: "/images/morningMenu2.jpg",
  },
  {
    text: "CHINESE BREAKFAST",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "5 USD",
    href: "/images/morningMenu3.jpg",
  },
  {
    text: "SYRNIKI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "6 USD",
    href: "/images/morningMenu4.jpg",
  },
  {
    text: "DRY SQUID",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "3 USD",
    href: "/images/morningMenu5.jpg",
  },
  {
    text: "TOAST WITH EGG",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "4 USD",
    href: "/images/morningMenu6.jpg",
  },
  {
    text: " MORNING CHEESE",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "6 USD",
    href: "/images/morningMenu7.jpg",
  },
  {
    text: "TOAST WITH MEAT",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "3 USD",
    href: "/images/morningMenu8.jpg",
  },
  {
    text: "MORNING SOUP",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "3 USD",
    href: "/images/morningMenu9.jpg",
  },
  {
    text: "CROISSANT WITH MEAT",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "5 USD",
    href: "/images/morningMenu10.jpg",
  },
  {
    text: "ROYAL CROISSANT",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "5 USD",
    href: "/images/morningMenu11.jpg",
  },
  {
    text: "CROISSANT WITH CHEESE",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "5 USD",
    href: "/images/morningMenu12.jpg",
  },
];

const MorningMenuComponent: FC = () => {
  const [search, setSearch] = useState("");
  let sortMorningMenu = morningMenuarr.filter((post) =>
    post.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__inner}>
          <div className={styles.search}>
            <svg
              className={styles.search_icon}
              enableBackground="new 0 0 32 32"
              id="EditableLine"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="14"
                cy="14"
                fill="none"
                id="XMLID_42_"
                r="9"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                fill="none"
                id="XMLID_44_"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                x1="27"
                x2="20.366"
                y1="27"
                y2="20.366"
              />
            </svg>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search && (
              <svg
                onClick={() => setSearch("")}
                className={styles.clearIcon}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            )}
          </div>
          <div className={styles.menu__box}>
            <h3 className={styles.boxTitle}>MorningMenu</h3>
            <h4 className={styles.boxTitle2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </h4>
          </div>

          <div className={styles.menu__content}>
            {sortMorningMenu.map((obj, i) => {
              return (
                <div className={styles.menu__contentBox}>
                  <h4 className={styles.menu__boxTitleContent}>{obj.text}</h4>
                  <img src={obj.href} alt="menu_img" />
                  <h4>{obj.price}</h4>
                  <p className={styles.menu__boxText}>{obj.about}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningMenuComponent;
