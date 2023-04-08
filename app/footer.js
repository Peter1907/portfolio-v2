import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex justify-center items-center h-10 z-20 justify-self-end self-end">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Peter1907/portfolio-v2"
        className="text-snow font-cutive text-sm"
      >
        DESIGNED & BUILT BY PETER BESHARA
      </Link>
    </footer>
  );
}
