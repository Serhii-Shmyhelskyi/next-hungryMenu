"use client";

import React, { FC, useState } from "react";

import styles from "./dailyMenu.module.scss";

let dailyMenuarr = [
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI . . . . 55,68 USD",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
  {
    text: " PIZZA QUATRO STAGIONI",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "56 USD",
    href: "/images/gallery-2.jpg",
  },
];

const DailyMenuComponent: FC = () => {
  const [search, setSearch] = useState("");
  let sortDailyMenu = dailyMenuarr.filter((post) =>
    post.text.toLowerCase().includes(search)
  );
  return (
    <section className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__inner}>
          <div className={styles.menu__box}>
            <h3 className={styles.boxTitle}>DailyMenu</h3>
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
            {sortDailyMenu.map((obj, i) => {
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

export default DailyMenuComponent;
