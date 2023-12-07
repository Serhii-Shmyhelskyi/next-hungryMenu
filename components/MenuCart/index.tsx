"use content";
import React, { FC, useState } from "react";

import styles from "./menuCart.module.scss";
import classnames from "classnames";

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
        {!isFavorite && (
          <p className={styles.menu__preBoxText}>
            {about.substring(0, 40) + "..."}
          </p>
        )}

        <p
          className={classnames({
            [styles.menu__boxText]: !isFavorite,
            [styles.menu__boxTextOpen]: isFavorite,
          })}>
          {about.substring(0, about.length)}
        </p>

        <p className={styles.pMax} onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? "Load min" : "Load more"}
        </p>
      </div>
    </div>
  );
};

export default MenuCart;
