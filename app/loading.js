'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Loading() {
  const imageRef = useRef(null);
  const animate = () => {
    gsap.to(imageRef.current, {
      duration: 0.8,
      ease: 'power1.inOut',
      rotateZ: '+=60',
    });
  };

  useEffect(() => {
    animate();
    const intervalId = setInterval(() => {
      animate();
    }, 1300);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <main className="fixed inset-0 bg-gradient-to-br from-rich-black from-40% to-onyx z-40">
      <div className="flex flex-col items-center gap-10 logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
        <Image
          ref={imageRef}
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
        <div className="font-montserrat font-semibold text-snow text-4xl">Loading...</div>
      </div>
    </main>
  );
};
