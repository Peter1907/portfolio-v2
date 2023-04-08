'use client';
import Image from 'next/image';
import Background from './3d-background';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {
  const [left, right, door, ring, initials] =
    [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  let spin = 0;
  const animate = () => {
    gsap.to(ring.current, {
      duration: 1,
      delay: 0.3,
      ease: 'power1.inOut',
      rotateZ: '+=60',
      onComplete: () => {
        spin++;
        if (spin < 3) animate();
      },
    });
  };

  useEffect(() => {
    animate();
    gsap.to(ring.current, {
      delay: 4,
      opacity: 0,
      duration: 0.7,
      ease: 'power1.out',
      onComplete: () => {
        gsap.to(ring.current, { display: 'none' });
      },
    });
    gsap.to(initials.current, {
      delay: 4,
      opacity: 0,
      duration: 0.7,
      ease: 'power1.out',
      onComplete: () => {
        gsap.to(initials.current, { display: 'none' });
      },
    });
    gsap.to(left.current, {
      delay: 4,
      translateX: '-100%',
      ease: 'power1.in',
      duration: 0.7,
      onComplete: () => {
        gsap.to(door.current, { display: 'none' });
      },
    });
    gsap.to(right.current, {
      delay: 4,
      translateX: '100%',
      ease: 'power1.in',
      duration: 0.7,
    });
  }, []);

  return (
    <main>
      <div className="door flex fixed z-50 inset-0" ref={door}>
        <div ref={left} className="left h-[100%] w-1/2 bg-onyx" />
        <div ref={right} className="right h-[100%] w-1/2 bg-rich-black" />
        <div className="mt-10">
          <Image
            ref={ring}
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3"
          />
          <Image
            ref={initials}
            src="/initials.svg"
            width={100}
            height={100}
            alt="logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3"
          />
        </div>
      </div>
      <Background />
    </main>
  );
}
