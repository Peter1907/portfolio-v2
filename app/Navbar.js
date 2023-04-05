'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const NavLink = ({ href, slug, children }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
  <Link href={href}
    className={`cursor-pointer hover:underline hover:text-aqua ${isActive ? 'text-aqua font-bold' : ''}`}
  >
    {children}
  </Link>
  )
};

export const Navbar = () => (
  <header className="fixed px-4 inset-x-0 top-0 bg-rich-black text-snow shadow-md shadow-snow/10 h-20 z-40 flex items-center justify-center xl:px-0">
    <div className="container max-w-[1100px] flex justify-between items-center">
      <Image src="/logo-2.svg" width={48} height={48} alt="logo" />
      <ul className="flex gap-4 text-lg font-cutive mt-2 underline-offset-4">
        <li>
          <NavLink slug={null} href="/">HOME</NavLink>
        </li>
        <li>
          <NavLink slug="works" href="/works">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink slug="about" href="#">ABOUT</NavLink>
        </li>
        <li>
          <NavLink slug="contact" href="#">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </header>
);
