"use client";

import React, { FC } from "react";

import styles from "./about.module.scss";

const About: FC = () => {
  return (
    <section
      className={styles.about}
      style={{ backgroundImage: "url(/images/private-bg.jpg)" }}>
      <div className={styles.about__inner}>
        <div className={styles.about__box}>
          <h3 className={styles.boxTitle}>ABOUT US</h3>
          <h4 className={styles.boxTitle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            velit maximus, molestie est a, tempor magna.
          </h4>
          <p className={styles.about__boxText}>
            Integer ullamcorper neque eu purus euismod, ac faucibus mauris
            posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper
            feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
            Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis
            semper laoreet.
          </p>
        </div>
        <div className={styles.about__images}>
          <img
            className={styles.about__imagesImg + "" + styles.contentImages}
            src="images/about.png"
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
