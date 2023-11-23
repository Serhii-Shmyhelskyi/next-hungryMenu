import React, { FC } from "react";

import styles from "./MorningMenu.module.scss";

let morningMenuarr = [
  {
    text: " MORNING MENU y",
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
    text: " MORNING MENU  FLOW",
    about: " Integer ullamcorper neque eu purus euismod",
    price: "42 USD",
    href: "/images/gallery-4.jpg",
  },
];

const MorningMenuComponent: FC = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.menu__inner}>
        <div className={styles.menu__box}>
          <h3 className={styles.boxTitle}>MorningMenu</h3>
          <h4 className={styles.boxTitle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            velit maximus, molestie est a, tempor magna.
          </h4>
        </div>
        <div className={styles.menu__content}>
          {morningMenuarr.map((obj, i) => {
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
    </section>
  );
};

export default MorningMenuComponent;
