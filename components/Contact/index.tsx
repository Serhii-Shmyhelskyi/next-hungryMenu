"use client";
import React, { FC, useState } from "react";
import styles from "./contact.module.scss";
import { urlMap } from "../data/data";
import { CircularProgress, LinearProgress, Typography } from "@mui/material";

const Contact: FC = () => {
  let [loading, setLoading] = useState(false);
  {
    setTimeout(() => {
      setLoading(!false);
    }, 1000);
  }
  return (
    <section
      className={styles.contact}
      style={{
        backgroundImage: "url(/images/private-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className={styles.contact__inner}>
        <div className={styles.contact__box}>
          <h1 className={styles.contact__boxTitle}>CONTACT</h1>
          <h4 className={styles.contact__boxTitle2}>
            Use the form below to contact us
          </h4>
        </div>

        <div className={styles.contact__inputInner}>
          <input
            className={styles.contact__input}
            type="text"
            placeholder="Name"
          />
          <input
            className={styles.contact__input}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.contact__input}
            type="text"
            placeholder="Phone"
          />
          <input
            className={styles.contact__input2}
            type="text"
            placeholder="Messege"
          />
        </div>

        <div className={styles.contact__content}>
          <a className={styles.contact__button} href="#">
            SEND MESSAGE
          </a>
          <a href="#">
            <p className={styles.contact__location}>
              143 Old Oak Common Ln, London, U.K.
            </p>
          </a>
          <a href="tel:+40729131637">
            <p className={styles.contact__phone}>+40 729 131 637</p>
          </a>
          <a href="mailto:office@mindblister.com">
            <p className={styles.contact__email}>office@mindblister.com</p>
          </a>
        </div>
        <div className={styles.iframeBlock}>
          {loading ? (
            <iframe
              src={urlMap}
              className={styles.iframeBlockIframe}
              loading="lazy"
            />
          ) : (
            <div className={styles.iframeBlockLoading}>
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
