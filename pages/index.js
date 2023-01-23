import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>GlowAI</title>
        <meta
          name="description"
          content="Looking for personalized skincare recommendations? Look no further! Our AI-powered skincare platform generates custom skincare routines based on your skin type and concerns. From the latest skincare products to expert tips, we have everything you need to achieve your best skin yet."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <h1 className="font-extrabold  text-6xl bg-clip-text ">
            Custom skincare routine&#160;
          </h1>
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            powered by AI.
          </h1>
          {/* <h1 className="text-8xl ml-5">🧖🏻‍♀️</h1> */}
        </div>
        <div className="flex flex-col items-center">
          <h2 className="flex flex-col items-center justify-center mt-10 text-2xl">
            Want a new skincare routine? Enter your skin type and budget and our
            AI will handle the rest.
          </h2>
          <Link href="/routine">
            <button className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 mt-10 rounded justify-center items-center">
              Get started now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
