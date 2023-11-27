"use client";
import React, { FC, useState } from "react";

import styles from "./dailyMenu.module.scss";
import { dailyMenuarr } from "@/components/data/data";

const DailyMenuComponent: FC = () => {
  const [search, setSearch] = useState("");
  let sortDailyMenu = dailyMenuarr.filter((post) =>
    post.text.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__inner}>
          <div className={styles.searchPosition}>
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
          </div>

          <div className={styles.menu__box}>
            <h3 className={styles.boxTitle}>to eat</h3>
            <h4 className={styles.boxTitle2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </h4>
          </div>

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
