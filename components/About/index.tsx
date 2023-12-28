import React, { FC } from "react";

import styles from "./about.module.scss";

import { useTranslations } from "next-intl";

const About: FC = () => {
  const t = useTranslations("About");

  return (
    <section
      className={styles.about}
      style={{
        backgroundImage: "url(/images/private-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className="container">
        <div className={styles.about__inner}>
          <div className={styles.about__box}>
            <h1 className={styles.boxTitle}>{t("title")}</h1>
            <h4 className={styles.boxTitle2}>{t("title2")}</h4>
            <p className={styles.about__boxText}>{t("text")}</p>
          </div>
          <div className={styles.about__images}>
            <img
              className={styles.about__imagesImg + "" + styles.contentImages}
              src="/images/about.png"
              alt="About"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
