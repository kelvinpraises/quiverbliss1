import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Communities() {
  return (
    <>
      <Head>
        <title>Communities</title>
        <meta name="description" content="QuiverBliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />

        <h2 className={inter.className}>QuiverBliss</h2>
      </main>
    </>
  );
}
