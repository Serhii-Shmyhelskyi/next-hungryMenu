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
          <div className={styles.menu__preBoxText}>
            {about.substring(0, 30)}
            <button
              className={styles.menu__boxTextButton}
              onClick={() => setIsFavorite(!isFavorite)}>
              ...Reade more
            </button>
          </div>
        )}

        <div
          className={classnames({
            [styles.menu__boxText]: !isFavorite,
            [styles.menu__boxTextOpen]: isFavorite,
          })}>
          {about.substring(0, about.length)}{" "}
          <button
            className={styles.menu__boxTextButton}
            onClick={() => setIsFavorite(!isFavorite)}>
            Reade less
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCart;
