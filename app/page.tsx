// app/page.tsx

"use client";

import Head from 'next/head';
import CardShuffler from '../components/CardShuffler';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Card Shuffler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardShuffler />
      </main>
    </div>
  );
}
