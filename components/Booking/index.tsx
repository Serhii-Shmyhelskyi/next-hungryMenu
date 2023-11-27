"use client";
import React, { FC, useState } from "react";

import styles from "./booking.module.scss";
import Link from "next/link";

const Booking: FC = () => {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  let addVisible = () => {
    setVisible(true);
  };

  let addNewGests = async (e: any) => {
    e.preventDefault();
    const allData = {
      // якщо локально
      // id: Date.now(),
      name,
      email,
      phone,
      people,
      date,
      time,
    };
    // оновлення сайту чере 0,5 с, після добавлянная поста
    // setTimeout(function () {
    //   location.reload();
    // }, 500);
    // очистка  useState
    setVisible(false);
    // setName("");
    // setEmail("");
    // setPhone("");
    // setPeople("");
    // setDate("");
    // setTime("");
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
              <h3 className={styles.book__boxTitle}>BOOK A TABLE</h3>
              <div className={styles.book__boxBottom}></div>
              <div className={styles.book__inputs}>
                <div className={styles.book__inputInner}>
                  <div className={styles.input__inner}>
                    <input
                      className={styles.book__input}
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles.book__select}>
                    <input
                      className={styles.book__input}
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles.book__select}>
                    <input
                      className={styles.book__input}
                      type="tel"
                      placeholder="Phone +380-00-0000-000"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className={styles.book__select}>
                    <input
                      className={styles.book__input}
                      type="number"
                      placeholder="Number of People"
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                    />
                  </div>
                  <div className={styles.book__select}>
                    <input
                      className={styles.book__input}
                      type="text"
                      placeholder="Date (mm/dd)"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className={styles.book__select}>
                    <input
                      className={styles.book__input}
                      type="text"
                      placeholder="Time (hh:mm)"
                      id="appt"
                      name="appt"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className={styles.book__button} onClick={addNewGests}>
                BOOK NOW
              </button>
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
          <h2>Thank's {name} for your reservation </h2>
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
