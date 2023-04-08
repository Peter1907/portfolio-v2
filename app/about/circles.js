'use client'
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Circles() {
  const [i1, i2, i3, i4] = [useRef(), useRef(), useRef(), useRef()];

  const animate = () => {
    gsap.to(i1.current, {
      duration: 30,
      ease: 'none',
      rotateZ: '+=60',
    });
    gsap.to(i2.current, {
      duration: 30,
      ease: 'none',
      rotateZ: '-=50',
    });
    gsap.to(i3.current, {
      duration: 30,
      ease: 'none',
      rotateZ: '+=40',
    });
    gsap.to(i4.current, {
      duration: 30,
      ease: 'none',
      rotateZ: '-=30',
    });
  };

  useEffect(() => {
    animate();
    const intervalId = setInterval(() => {
      animate();
    }, 30000);

    return () => {
      clearInterval(intervalId);
      [i1.current, i2.current, i3.current, i4.current] = [null, null, null, null];
    };
  }, []);

  return (
    <div className="image-container overflow-hidden fixed inset-0">
      <Image
        ref={i1}
        src="/circle01.png"
        width={700}
        height={700}
        alt="circles illustration"
        className="absolute bottom-[5%] lg:bottom-auto lg:top-[15%] left-[10%] opacity-60 z-0 filter blur-[2px]"
      />
      <Image
        ref={i2}
        src="/circle02.png"
        width={700}
        height={700}
        alt="circles illustration"
        className="absolute bottom-[5%] lg:bottom-auto lg:top-[15%] left-[10%] opacity-60 z-0 filter blur-[2px]"
      />
      <Image
        ref={i3}
        src="/circle03.png"
        width={700}
        height={700}
        alt="circles illustration"
        className="absolute bottom-[5%] lg:bottom-auto lg:top-[15%] left-[10%] opacity-60 z-0 filter blur-[2px]"
      />
      <Image
        ref={i4}
        src="/circle04.png"
        width={700}
        height={700}
        alt="circles illustration"
        className="absolute bottom-[5%] lg:bottom-auto lg:top-[15%] left-[10%] opacity-60 z-0 filter blur-[2px]"
      />
    </div>
  );
}
