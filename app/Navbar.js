'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

const NavLink = ({ href, slug, children }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <Link href={href}
      className={`cursor-pointer hover:underline hover:text-aqua ${isActive && 'text-aqua font-bold'}`}
    >
      {children}
    </Link>
  )
};

export const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [logo, overlay, menu] = [useRef(), useRef(), useRef()];

  const handleMenu = () => {
    open ?
      gsap.to(overlay.current, {
        display: 'block',
        duration: 0,
        onComplete: () => gsap.to(overlay.current, { opacity: 1, duration: 0.5 }),
      }) :
      gsap.to(overlay.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => gsap.to(overlay.current, { display: 'none' }),
      });
    open ?
      gsap.to(menu.current, {
        display: 'block',
        duration: 0,
        onComplete: () => {
          gsap.to(menu.current, { translateX: 0, ease: 'power1.inOut', duration: 0.5 });
          gsap.to(document.body, { overflow: 'hidden' });
        },
      }) :
      gsap.to(menu.current, {
        translateX: '100%',
        ease: 'power1.inOut',
        duration: 0.5,
        onComplete: () => {
          gsap.to(menu.current, { display: 'none' });
          gsap.to(document.body, { overflow: 'auto' });
        },
      });
    setOpen(!open);
  };

  const animateLogo = () => {
    gsap.to(logo.current, {
      duration: 1,
      ease: 'power1.inOut',
      rotateZ: '+=60',
    });
  };

  useEffect(() => {
    animateLogo();
    const intervalId = setInterval(() => {
      animateLogo();
    }, 30000);

    return () => {
      [logo.current, overlay.current, menu.current] = [null, null, null];
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="fixed px-4 inset-x-0 top-0 backdrop-blur-sm bg-rich-black/80 text-snow shadow-md shadow-snow/10 h-16 z-30 flex items-center justify-center xl:px-0">
      <div className="container max-w-[1100px] flex justify-between items-center">
        <Link href="/" className="relative w-10 h-10">
          <Image ref={logo} src="/logo.svg" width={45} height={45} alt="logo" className="absolute" />
          <Image src="/initials.svg" width={45} height={45} alt="logo" className="absolute" />
        </Link>
        <ul className="hidden md:flex gap-4 text-lg font-cutive mt-2 underline-offset-4">
          <li>
            <NavLink slug="projects" href="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink slug="about" href="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink slug="contact" href="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <div className="mobile-menu md:hidden">
          <Image
            src="/menu.png"
            width={18}
            height={18}
            alt="menu"
            className="mr-2 cursor-pointer"
            onClick={() => handleMenu()}
          />
          <div ref={overlay} className="hidden opacity-0 bg-rich-black/50 fixed h-screen inset-0 backdrop-blur-[5px]" />
          <div ref={menu} className="hidden transform translate-x-[100%] bg-rich-black py-24 fixed h-screen inset-y-0 right-0 text-center w-[85%]">
            <FontAwesomeIcon
              icon={faXmark}
              size="xl"
              className="absolute right-6 top-6 cursor-pointer hover:text-aqua/80 transition-all duration-200"
              onClick={() => handleMenu()}
            />
            <ul className="flex flex-col gap-4 text-lg font-cutive mt-2 underline-offset-4">
              <li onClick={() => handleMenu()}>
                <NavLink slug="projects" href="/projects">PROJECTS</NavLink>
              </li>
              <li onClick={() => handleMenu()}>
                <NavLink slug="about" href="/about">ABOUT</NavLink>
              </li>
              <li onClick={() => handleMenu()}>
                <NavLink slug="contact" href="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
