"use client";
import React, { FC, useState } from "react";

import styles from "./menu.module.scss";
import { dailyMenuarr } from "@/components/data/data";
import MenuCart from "../MenuCart";
import MenuComponentSearch from "../MenuSearch";

const MenuComponent: FC = () => {
  const [search, setSearch] = useState("");

  let sortDailyMenu = dailyMenuarr.filter((post) =>
    post.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className={styles.menu}
      style={{
        backgroundImage: "url(/images/private-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className="container">
        <div className={styles.menu__inner}>
          <h1 className={styles.menu__title}>MENU</h1>
          <MenuComponentSearch search={search} setSearch={setSearch} />

          <div className={styles.menu__box}>
            <h3 className={styles.boxTitle}>Taste and Enjoy</h3>
            <h4 className={styles.boxTitle2}>
              The menu features exquisite fish and seafood dishes
            </h4>
          </div>
          <div>
            {sortDailyMenu.map((obj, i) => (
              <MenuCart key={i} {...obj} />
            ))}
          </div>

          {Object.keys(sortDailyMenu).length == 0 && (
            <div style={{ height: "100vh" }}>
              <h3>Sorry we dont have this dished</h3>
              <h2>make the second choice</h2>
              <img src="/images/ops2.png" alt="Ops" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
