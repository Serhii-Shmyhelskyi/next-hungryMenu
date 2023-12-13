"use client";
import React, { FC, useState } from "react";
import styles from "./contact.module.scss";
import { urlMap } from "../data/data";
import { CircularProgress, Link } from "@mui/material";
import { regEmail, regName, regPhone } from "../data/data";
import classnames from "classnames";

const Contact: FC = () => {
  let [loading, setLoading] = useState(false);
  {
    setTimeout(() => {
      setLoading(!false);
    }, 1000);
  }
  const [visible, setVisible] = useState(true);
  const [inputValid, setInputValid] = useState("");
  const [allDateSt, setAllDateSt] = useState<any>({});

  let handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const allData: any = {
      // if local
      // id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      messege: formData.get("messege"),
      redirect: false,
    };

    setAllDateSt(allData);
    // valid input
    if (!regName.test(allData.name)) {
      setInputValid("Name");
    } else if (!regEmail.test(allData.email)) {
      setInputValid("Email");
    } else if (!regPhone.test(allData.phone)) {
      setInputValid("Phone");
    } else if (!regName.test(allData.messege)) {
      setInputValid("Messege");
    } else {
      setVisible(false);
      try {
        await fetch(`https://655c87bc25b76d9884fd79b6.mockapi.io/data`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allData),
        });
      } catch (error) {
        console.log(error);
      }
    }

    // оновлення сайту чере 0,5 с, після добавлянная поста
    // setTimeout(function () {
    //   location.reload();
    // }, 500);
    // очистка  useState
  };

  return (
    <>
      {visible ? (
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
            <form
              onSubmit={handleSubmit}
              className={styles.contact__inputInner}>
              <input
                className={classnames({
                  [styles.contact__input]: true,
                  [styles.contact__inputNoValide]: inputValid === "Name",
                })}
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className={classnames({
                  [styles.contact__input]: true,
                  [styles.contact__inputNoValide]: inputValid === "Email",
                })}
                type="text"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className={classnames({
                  [styles.contact__input]: true,
                  [styles.contact__inputNoValide]: inputValid === "Phone",
                })}
                type="text"
                name="phone"
                placeholder="Phone +380-00-0000-000"
                required
              />
              <input
                className={classnames({
                  [styles.contact__inputMessege]: true,
                  [styles.contact__inputNoValide]: inputValid === "Messege",
                })}
                type="text"
                placeholder="Messege"
                name="messege"
                required
              />
              <button className={styles.contact__button} type="submit">
                SEND MESSAGE
              </button>
              {inputValid && (
                <p style={{ padding: "5px" }}>
                  {inputValid}'s field is not filled in correctly
                </p>
              )}
            </form>

            <div className={styles.contact__content}>
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
      ) : (
        <div
          className={styles.thanks}
          style={{
            backgroundImage: "url(/images/private-bg.jpg)",
            backgroundSize: "cover",
          }}>
          <h2>Thank's {allDateSt.name} for your messege</h2>
          <div>
            <img src="/images/gallery-8.jpg" alt="messege" />
          </div>

          <Link href="/">
            <button className={styles.contact__button}>HOME</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
