"use client";

import React, { FC, useState } from "react";

import FsLightbox from "fslightbox-react";
import styles from "./gallery.module.scss";
import { photoArr } from "../data/data";
import Link from "next/link";

const Gallery: FC = () => {
  const [toggler, setToggler] = useState(false);
  const [indexPhoto, setIndexPhoto] = useState(0);

  const openLightbox = (index: number) => {
    setIndexPhoto(index); // Встановлюємо індекс зображення
    setToggler((toggler) => !toggler);
  };
  return (
    <section
      className={styles.private}
      style={{
        backgroundImage: "url(/images/private-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className="container">
        <h1 className={styles.private__title}>GALLERY</h1>
        <div className={styles.private__top}>
          <div className={styles.private__gallery}>
            {photoArr.map((item, i) => (
              <img
                key={i}
                onClick={() => openLightbox(i + 1)}
                className={styles.private__galleryBox}
                src={item}
                alt={"GalleryPhoto"}
              />
            ))}
          </div>
          <FsLightbox toggler={toggler} sources={photoArr} slide={indexPhoto} />
          <p className={styles.private__textTop}>PRIVATE EVENTS</p>
          <div className={styles.private__textBottom}>
            <p className={styles.private__bottom}>
              For private events please call:
              <a href="tel:+40729131637">
                <span>+40 729 131 637</span>
              </a>
              /
              <a href="tel:+40726458782">
                <span>+40 726 458 782 </span>
              </a>
              or use the <Link href="/contact"> contact form.</Link>
            </p>
          </div>
          <div className={styles.private__inner}>
            <img
              className={styles.private__imagesImg}
              src="/images/private-1.png"
              alt="Private"
            />
            <img
              className={styles.private__imagesImg}
              src="/images/private-2.png"
              alt="Private"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
