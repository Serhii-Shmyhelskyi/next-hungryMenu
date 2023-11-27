"use client";
import React, { FC } from "react";

import styles from "./menu.module.scss";
import Link from "next/link";

const Team: FC = () => {
  return (
    <div
      className={styles.menu}
      style={{
        backgroundImage: "url(/images/private-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className={styles.menu__container}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          explicabo tempore sint obcaecati nobis possimus non nisi? Distinctio
          sunt id ipsam quidem esse eaque voluptates obcaecati vero! Ratione,
          veritatis voluptatibus?
        </p>
        <div className={styles.menuImgBox}>
          <Link href="/menu/drinkMenu">
            <img
              className={styles.menu__images}
              src="images/daylyMenu.jpg"
              alt="MenuImg"
            />
          </Link>
          <Link href="/menu/dailyMenu">
            <img
              className={styles.menu__images}
              src="images/drinkMenu.jpg"
              alt="MenuImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
