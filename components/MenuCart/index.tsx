"use content";
import React, { FC, useState } from "react";

import { CSSTransition } from "react-transition-group";

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
        <p className={styles.menu__boxText}>
          {about.substring(0, 40)} {!isFavorite && "..."}
        </p>

        <CSSTransition
          in={isFavorite}
          timeout={300}
          classNames="my-node"
          unmountOnExit>
          <p className={styles.menu__boxText}>
            {about.substring(40, about.length)}
          </p>
        </CSSTransition>

        {/* {isFavorite ? (
          <p className={styles.menu__boxText}>
            {about.substring(0, about.length)}
          </p>
        ) : (
          <p className={styles.menu__boxText}>
            {about.substring(0, 40) + "..."}
          </p>
        )} */}
        <p className={styles.pMax} onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? "Load min" : "Load more"}
        </p>
      </div>
    </div>
  );
};

export default MenuCart;
