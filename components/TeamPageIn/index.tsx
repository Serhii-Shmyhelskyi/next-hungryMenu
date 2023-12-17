import { Metadata } from "next";
import Link from "next/link";
import styles from "./teamPageIn.module.scss";

type Props = {
  params: {
    id: string;
  };
};

type postType = {
  id: number;
  name: string;
  text: string;
  imageUrl: string;
};

async function getData(id: string) {
  try {
    const response = await fetch(`${process.env.API_HOST}/teams/${id}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post: postType = await getData(id);
  return {
    title: post.name,
  };
}

export default async function TeamComponentIn({ params: { id } }: Props) {
  const post: postType = await getData(id);
  return (
    <div
      className={styles.teamIn}
      style={{
        backgroundImage: "url(/images/our-bg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className={styles.teamIn__container}>
        <h1>{post.name}</h1>
        <img src={`${post.imageUrl}.jpg`} alt="imgName" />
        <p>{post.text}</p>
        <button className={styles.teamIn__button}>
          <Link href="/team">Back</Link>
        </button>
      </div>
    </div>
  );
}
