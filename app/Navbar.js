import Image from 'next/image';

export const Navbar = () => (
  <header className="sticky px-4 inset-x-0 top-0 bg-rich-black text-snow shadow-md shadow-snow/10 h-20 z-40 flex items-center justify-center xl:px-0">
    <div className="container max-w-[1100px] flex justify-between items-center">
      <Image src="/logo-2.svg" width={48} height={48} alt="logo" />
      <ul className="flex gap-4 font-cutive mt-2 text-sm">
        <li className="cursor-pointer hover:underline hover:text-aqua">HOME</li>
        <li className="cursor-pointer hover:underline hover:text-aqua">WORKS</li>
        <li className="cursor-pointer hover:underline hover:text-aqua">ABOUT</li>
        <li className="cursor-pointer hover:underline hover:text-aqua">CONTACT</li>
      </ul>
    </div>
  </header>
);
