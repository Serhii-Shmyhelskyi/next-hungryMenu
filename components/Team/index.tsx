"use client";
import Link from "next/link";
import React from "react";
import styles from "./team.module.scss";

type postType = {
  id: number;
  name: string;
  text: string;
  imageUrl: string;
  proffesion: string;
};

export default async function Team() {
  async function getData() {
    try {
      const response = await fetch(
        `https://655c87bc25b76d9884fd79b6.mockapi.io/Team/`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
  const posts = await getData();
  return (
    <div
      className={styles.team}
      style={{
        backgroundImage: "url(/images/our-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className={styles.team__container}>
        <h1>OUR TEAM</h1>
        <div className={styles.team__wraper}>
          {posts.map((post: postType) => (
            <Link
              className={styles.teamLink}
              key={post.id}
              href={`team/${post.id}`}>
              <div className={styles.team__wraperOne}>
                <h3>{post.name}</h3>
                <img
                  style={{ width: "160px", borderRadius: "50%" }}
                  src={`${post.imageUrl}.jpg`}
                  alt="photoTeam"
                />
                <p>{post.proffesion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
