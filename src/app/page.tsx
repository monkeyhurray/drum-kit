'use client';
import dynamic from 'next/dynamic';

export default function Home() {
  const MyDrumKit = dynamic(() => import('@/components/Drum'), { ssr: false });
  return (
    <>
      <MyDrumKit />
    </>
  );
}
