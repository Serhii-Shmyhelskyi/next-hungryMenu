"use client";
import React, { FC, useState } from "react";

import styles from "./booking.module.scss";
import Link from "next/link";
import {
  regDate,
  regEmail,
  regName,
  regNumber,
  regPhone,
  regTime,
} from "../data/data";
import classnames from "classnames";

const Booking: FC = () => {
  const [visible, setVisible] = useState(true);
  const [inputValid, setInputValid] = useState("");
  const [allDateSt, setAllDateSt] = useState({
    booking: "",
    name: "",
    email: "",
    phone: "",
    people: "",
    date: "",
    time: "",
  });

  let handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const allData: any = {
      // if local
      // id: Date.now(),
      booking: "booking",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      people: formData.get("people"),
      date: formData.get("date"),
      time: formData.get("time"),
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
    } else if (!regNumber.test(allData.people)) {
      setInputValid("People");
    } else if (!regDate.test(allData.date)) {
      setInputValid("Date");
    } else if (!regTime.test(allData.time)) {
      setInputValid("Time");
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
          className={styles.book}
          style={{
            backgroundImage: "url(/images/private-bg.jpg)",
            backgroundSize: "cover",
          }}>
          <div className="container">
            <div className={styles.book__inner}>
              <div className={styles.book__box}>
                <h1 className={styles.book__boxTitle}>BOOKING</h1>
                <div className={styles.book__boxBottom}></div>
                <div className={styles.book__inputs}>
                  <div className={styles.book__inputInner}>
                    <form onSubmit={handleSubmit}>
                      <input
                        className={classnames({
                          [styles.book__input]: true,
                          [styles.book__inputNoValide]: inputValid === "Name",
                        })}
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                      <input
                        className={classnames({
                          [styles.book__input]: true,
                          [styles.book__inputNoValide]: inputValid === "Email",
                        })}
                        type="text"
                        placeholder="Email"
                        required
                        name="email"
                      />
                      <input
                        className={classnames({
                          [styles.book__input]: true,
                          [styles.book__inputNoValide]: inputValid === "Phone",
                        })}
                        type="text"
                        placeholder="Phone +380-00-0000-000"
                        required
                        name="phone"
                      />
                      <input
                        className={classnames({
                          [styles.book__input]: true,
                          [styles.book__inputNoValide]: inputValid === "People",
                        })}
                        type="text"
                        placeholder="Number of People"
                        required
                        name="people"
                      />
                      <input
                        className={classnames({
                          [styles.book__input]: true,
                          [styles.book__inputNoValide]: inputValid === "Date",
                        })}
                        type="text"
                        placeholder="Date (mm/dd)"
                        required
                        name="date"
                      />
                      <input
                        className={classnames({
                          [styles.book__input]: true,
                          [styles.book__inputNoValide]: inputValid === "Time",
                        })}
                        type="text"
                        placeholder="Time (hh:mm)"
                        required
                        name="time"
                      />
                      <button className={styles.book__button} type="submit">
                        BOOK NOW
                      </button>
                      {inputValid && (
                        <p style={{ padding: "5px" }}>
                          {inputValid}'s field is not filled in correctly
                        </p>
                      )}
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
          </div>
        </section>
      ) : (
        <div
          className={styles.thanks}
          style={{
            backgroundImage: "url(/images/private-bg.jpg)",
            backgroundSize: "cover",
          }}>
          <h2>
            Thank's {allDateSt.name} for your reservation for {allDateSt.people}{" "}
            people
          </h2>
          <div>
            <img src="/images/gallery-6-big.jpg" alt="thank" />
          </div>

          <Link href="/">
            <button className={styles.book__button}>HOME</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Booking;
