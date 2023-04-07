'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

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

export const Navbar = () => (
  <header className="fixed px-4 inset-x-0 top-0 backdrop-blur-sm bg-rich-black/80 text-snow shadow-md shadow-snow/10 h-16 z-30 flex items-center justify-center xl:px-0">
    <div className="container max-w-[1100px] flex justify-between items-center">
      <Image src="/logo-2.svg" width={45} height={45} alt="logo" />
      <ul className="flex gap-4 text-lg font-cutive mt-2 underline-offset-4">
        <li>
          <NavLink slug={null} href="/">HOME</NavLink>
        </li>
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
    </div>
  </header>
);
