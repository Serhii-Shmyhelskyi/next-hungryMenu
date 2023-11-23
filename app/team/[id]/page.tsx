import { Metadata } from "next";
import Link from "next/link";

async function getData(id: string) {
  const response = await fetch(
    `https://655c87bc25b76d9884fd79b6.mockapi.io/Team/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.name,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
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
