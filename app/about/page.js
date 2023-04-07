import Image from 'next/image';
import Circles from './circles';

export default function About() {
  return (
    <main className="overflow-x-hidden pt-24 flex flex-col lg:justify-center text-snow absolute inset-0 h-screen">
      <div className="background top-0 fixed w-screen h-screen bg-no-repeat bg-gradient-to-br from-rich-black from-40% to-onyx z-0" />
      <Circles />
      <section id="info" className="w-[90%] md:w-[85%] lg:w-[60%] lg:self-end self-center relative flex flex-col gap-4">
        <p className="pl-1 font-cutive md:text-lg lg:text-xl leading-4">
          HEY THERE!<br />MY NAME IS
        </p>
        <div className="flex flex-col items-start gap-3 flex-wrap">
          <Image src="/peter.png" width={500} height={500} alt="first name" className="w-auto h-6 md:h-8 lg:h-10" />
          <Image src="/beshara.png" width={500} height={500} alt="last name" className="w-auto h-6 md:h-8 lg:h-10" />
        </div>
        <p className="font-cutive font-bold text-lg md:text-xl leading-4 text-aqua/90">
          FULL-STACK WEB DEVELOPER
        </p>
        <p className="font-thin max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-rich-black/50 p-2 lg:mr-8 leading-6 font-saira text-lg md:text-xl">
          I love all things creative. From coding to crafting, I thrive on bringing ideas
          to life and pushing the boundaries of what's possible for me. I've worked on a number of
          exciting projects both personal & professional, honing my skills across the Front-end & the Back-end.
          My approach is all about blending form and function, creating seamless user experiences
          that leave a lasting impression.
        </p>
        <p className="font-thin max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-rich-black/50 p-2 lg:mr-8 leading-6 font-saira text-lg md:text-xl">
          When I'm not coding up a strom,
          you can find me reading, working-out, playing Chess or video games.<br />
          I also love to meet new people. So, feel free to contact me,
          and let's have a conversation!<br />
        </p>
      </section>
    </main>
  )
}