import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

type postType = {
  id: number;
  name: string;
  text: string;
};

async function getData(id: string) {
  const response = await fetch(
    `https://655c87bc25b76d9884fd79b6.mockapi.io/Team/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) throw new Error("Unable to fetch posts!");
  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post: postType = await getData(id);
  return {
    title: post.name,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post: postType = await getData(id);
  return (
    <>
      <h1>{post.name}</h1>
      <p>{post.text}</p>
      <li>
        <Link href="/team">Back</Link>
      </li>
    </>
  );
}
