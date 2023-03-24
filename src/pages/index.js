import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import CardDate from '@/components/card-date'
import CardCounter from '@/components/card-counter'
import Journal from '@/components/Journal'
import CardUrl from '@/components/card-url';

export default function Home() {
  const [url, getUrl] = useState('');
  const [timestamp, getTimestamp] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const url = window.location.href;

      const toTimestamp = () => {
        const arr = url.split('/');
        const timestamp = arr[arr.length-1];
        return timestamp;
      }

      getUrl(url);
      getTimestamp(toTimestamp());
      }, 2000);
  });

  return (
    <>
      <Head>
        <title>Nuevo proyecto de prueba para la vacante</title>
        <meta name="description" content="Nuevo proyecto de prueba para la vacante" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardUrl url={url}/>
        <CardDate timestamp={timestamp}/>
        <CardCounter timestamp={timestamp} />
        <Journal />
      </main>
    </>
  )
}
