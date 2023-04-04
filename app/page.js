import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="placeholder flex justify-center items-center absolute inset-0">
      <p
        className={`${montserrat.className} font-semibold text-5xl lg:text-[8rem]`}
      >
        My portfolio
        </p>
    </div>
  )
}
