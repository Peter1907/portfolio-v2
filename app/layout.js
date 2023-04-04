import { Montserrat, Cutive } from 'next/font/google';
import { Navbar } from './Navbar';
import './globals.css';

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const cutive = Cutive({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cutive',
});

export const metadata = {
  title: 'Peter Beshara',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cutive.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
