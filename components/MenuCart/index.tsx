"use content";
import React, { FC, useState } from "react";

import styles from "./menuCart.module.scss";

type CategoriesProps = {
  href: string;
  text: string;
  price: string;
  about: string;
};

const MenuCart: FC<CategoriesProps> = ({ href, text, price, about }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className={styles.menu__content}>
      <div className={styles.menu__contentBox}>
        <h4 className={styles.menu__boxTitleContent}>{text}</h4>
        <img src={href} alt="menu_img" />
        <h4>{price}</h4>
        {isFavorite ? (
          <p className={styles.menu__boxText}>
            {about.substring(0, about.length)}
          </p>
        ) : (
          <p className={styles.menu__boxText}>
            {about.substring(0, 40) + "..."}
          </p>
        )}
        {isFavorite ? (
          <p
            style={{ cursor: "pointer", color: "#b7a02d" }}
            onClick={() => setIsFavorite(!isFavorite)}>
            Load min
          </p>
        ) : (
          <p
            style={{ cursor: "pointer", color: "#ffdf" }}
            onClick={() => setIsFavorite(!isFavorite)}>
            Load more
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuCart;
