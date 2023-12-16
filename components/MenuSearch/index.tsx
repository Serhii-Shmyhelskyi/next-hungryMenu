"use client";
import React, { FC, useEffect, useRef, useState } from "react";

import styles from "./menuSearch.module.scss";
import classnames from "classnames";
import { dailyMenuarr } from "../data/data";

type itemMenu = {
  text: string;
  about: string;
  price: string;
  href: string;
};

type CategoriesProps = {
  dalymenuSearch: (item: itemMenu[]) => void;
};

const MenuComponentSearch: FC<CategoriesProps> = ({ dalymenuSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");

  let sortDailyMenu = dailyMenuarr.filter((post) =>
    post.text.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    dalymenuSearch(sortDailyMenu);
  }, [search]);

  const onInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.searchPosition}>
      <div className={styles.search}>
        <svg
          onClick={() => onInput()}
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
          ref={inputRef}
          className={classnames({
            [styles.searchInput]: search,
            [styles.searchInputDont]: !search,
          })}
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
  );
};

export default MenuComponentSearch;
