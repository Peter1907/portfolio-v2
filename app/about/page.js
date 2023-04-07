import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <main className="overflow-x-hidden flex flex-col lg:justify-center text-snow absolute inset-0 h-screen">
      <div className="background top-0 fixed w-screen h-screen bg-no-repeat bg-gradient-to-br from-rich-black from-40% to-onyx z-0" />
      <div className="image-container overflow-hidden fixed inset-0">
        <Image
          src="/circles02.png"
          width={700}
          height={700}
          alt="circles illustration"
          className="absolute bottom-[5%] lg:bottom-auto lg:top-[15%] left-[10%] opacity-60 z-0 filter blur-[2px]"
        />
      </div>
      <section id="info" className="w-[90%] md:w-[85%] lg:w-[60%] lg:self-end self-center mt-32 mb-20 relative flex flex-col gap-4">
        <p className="pl-1 font-cutive md:text-lg lg:text-xl leading-4">
          HEY THERE!<br />MY NAME IS
        </p>
        <div className="flex flex-col items-start gap-3 flex-wrap">
          <Image src="/peter.png" width={500} height={500} alt="first name" className="w-auto h-6 md:h-8 lg:h-10" />
          <Image src="/beshara.png" width={500} height={500} alt="last name" className="w-auto h-6 md:h-8 lg:h-10" />
        </div>
        <p className="font-cutive font-bold text-lg md:text-xl lg:text-2xl leading-4 text-aqua/90">
          FULL-STACK WEB DEVELOPER
        </p>
        <p className="font-thin max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-rich-black/50 p-2 lg:mr-8 leading-6 font-saira text-lg md:text-xl lg:text-2xl">
          I love all things creative. From coding to crafting, I thrive on bringing ideas
          to life and pushing the boundaries of what's possible for me. I've worked on a number of
          exciting projects both personal & professional, honing my skills across the Front-end & the Back-end.
          My approach is all about blending form and function, creating seamless user experiences
          that leave a lasting impression.
        </p>
        <p className="font-thin max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-rich-black/50 p-2 lg:mr-8 leading-6 font-saira text-lg md:text-xl lg:text-2xl">
          When I'm not coding up a strom,
          you can find me reading, working-out, playing Chess or video games.<br />
          I also love to meet new people. So, feel free to contact me through LinkedIn
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/peter-nady-beshara"
            className="inline-block"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-4 md:w-5 ml-1 -mb-0.5 hover:text-aqua/80 transition-all duration-200"
            />
          </a>, or email
          <a
            href="mailto:peter.nady.1408@gmail.com"
            className="inline-block"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-4 md:w-5 ml-1 -mb-0.5 hover:text-aqua/80 transition-all duration-200"
            />
          </a>,
          and let's have a conversation!<br />
        </p>
      </section>
    </main>
  )
}