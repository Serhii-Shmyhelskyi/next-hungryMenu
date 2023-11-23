"use client";

import Link from "next/link";
import React from "react";
import styles from "./team.module.scss";

async function getData() {
  const response = await fetch(
    `https://655c87bc25b76d9884fd79b6.mockapi.io/Team/`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export default async function Team() {
  const posts = await getData();
  return (
    <div
      className={styles.team}
      style={{ backgroundImage: "url(/images/our-bg.jpg)" }}>
      <h1>Our Team</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`team/${post.id}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
