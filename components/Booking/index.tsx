"use client";
import React, { FC, useState } from "react";

import styles from "./booking.module.scss";
import Link from "next/link";

const Booking: FC = () => {
  const [visible, setVisible] = useState(true);
  const [allDateSt, setAllDateSt] = useState<any>({});

  let addVisible = () => {
    setVisible(true);
  };

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const allData = {
      // якщо локально
      // id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      people: formData.get("people"),
      date: formData.get("date"),
      time: formData.get("time"),
      redirect: false,
    };

    setAllDateSt(allData);

    // оновлення сайту чере 0,5 с, після добавлянная поста
    // setTimeout(function () {
    //   location.reload();
    // }, 500);
    // очистка  useState
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
  };

  return (
    <>
      {visible ? (
        <section
          className={styles.book}
          style={{
            backgroundImage: "url(/images/private-bg.jpg)",
            backgroundSize: "cover",
          }}>
          <div className={styles.book__inner}>
            <div className={styles.book__box}>
              <h1 className={styles.book__boxTitle}>BOOK A TABLE</h1>
              <div className={styles.book__boxBottom}></div>
              <div className={styles.book__inputs}>
                <div className={styles.book__inputInner}>
                  <form onSubmit={handleSubmit}>
                    <input
                      className={styles.book__input}
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      className={styles.book__input}
                      type="text"
                      placeholder="Email"
                      required
                      name="email"
                    />
                    <input
                      className={styles.book__input}
                      type="number"
                      placeholder="Phone +380-00-0000-000"
                      required
                      name="phone"
                    />
                    <input
                      className={styles.book__input}
                      type="number"
                      placeholder="Number of People"
                      required
                      name="people"
                    />
                    <input
                      className={styles.book__input}
                      type="number"
                      placeholder="Date (mm.dd)"
                      required
                      name="date"
                    />
                    <input
                      className={styles.book__input}
                      type="number"
                      placeholder="Time (hh.mm)"
                      required
                      name="time"
                    />
                    <button className={styles.book__button} type="submit">
                      BOOK NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.book__images}>
              <img
                className={styles.book__imagesImg}
                src="images/book.png"
                alt="bookImg"
              />
            </div>
          </div>
        </section>
      ) : (
        <div
          className={styles.thamks}
          style={{
            backgroundImage: "url(/images/private-bg.jpg)",
            backgroundSize: "cover",
          }}>
          <h2>
            Thank's {allDateSt.name} for your reservation for {allDateSt.people}{" "}
            people
          </h2>
          <div>
            <img src="/images/gallery-6.jpg" alt="thank" />
          </div>

          <Link href="/">
            <button className={styles.book__button} onClick={addVisible}>
              HOME
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Booking;
