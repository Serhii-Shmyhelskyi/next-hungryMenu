import React, { FC } from "react";
import { HeaderButton } from "../HeaderButton";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <>
      <header>
        <div className={styles.header__innerMenu}>
          <HeaderButton />
        </div>
      </header>
    </>
  );
};

export { Header };
