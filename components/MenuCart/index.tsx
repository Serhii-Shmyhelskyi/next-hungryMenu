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

        <div
          className={classnames({
            [styles.menu__boxText]: true,
            [styles.menu__boxTextOpen]: isFavorite,
          })}>
          {about.substring(0, about.length)}
        </div>

        <button
          className={styles.menu__boxTextButton}
          onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? "Reade less" : "...Reade more"}
        </button>
      </div>
    </div>
  );
};

export default MenuCart;

// "use content";
// import React, { FC, useState } from "react";

// import styles from "./menuCart.module.scss";

// import classnames from "classnames";

// type CategoriesProps = {
//   href: string;
//   text: string;
//   price: string;
//   about: string;
// };

// const MenuCart: FC<CategoriesProps> = ({ href, text, price, about }) => {
//   const [isFavorite, setIsFavorite] = useState(false);
//   return (
//     <div className={styles.menu__content}>
//       <div className={styles.menu__contentBox}>
//         <h4 className={styles.menu__boxTitleContent}>{text}</h4>
//         <img src={href} alt="menu_img" />
//         <h4>{price}</h4>

//         <div
//           className={classnames({
//             [styles.menu__boxText]: true,
//             [styles.menu__boxTextOpen]: isFavorite,
//           })}>
//           {isFavorite
//             ? about.substring(0, about.length)
//             : about.substring(0, 55)}
//           <button
//             className={styles.menu__boxTextButton}
//             onClick={() => setIsFavorite(!isFavorite)}>
//             {isFavorite ? "Reade less" : "...Reade more"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuCart;
