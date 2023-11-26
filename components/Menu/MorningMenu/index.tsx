"use client";
import React, { FC, useState } from "react";

import styles from "./MorningMenu.module.scss";

let morningMenuarr = [
  {
    text: "fix",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW . . . . 55,68 USD",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
  {
    text: "h",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
];

const MorningMenuComponent: FC = () => {
  const [search, setSearch] = useState("");
  let sortMorningMenu = morningMenuarr.filter((post) =>
    post.text.toLowerCase().includes(search)
  );

  return (
    <section className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__inner}>
          <div className={styles.menu__box}>
            <h3 className={styles.boxTitle}>MorningMenu</h3>
            <h4 className={styles.boxTitle2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </h4>
          </div>
          <form>
            <input
              type="search"
              placeholder="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button>push</button>
          </form>
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
