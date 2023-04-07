import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <main className="overflow-x-hidden text-snow flex flex-col 2xl:justify-center absolute inset-0 h-screen">
      <div className="background top-0 fixed w-screen h-screen bg-no-repeat bg-gradient-to-l from-rich-black from-50% to-onyx to-50% z-0" />
      <div className="wrapper relative z-10 w-screen pt-20 pb-12 flex flex-col items-center">
        <div className="title flex items-baseline gap-2 lg:gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-saira font-semibold">
            Contact Me
          </h1>
          <p className="border-t border-snow w-[30vw] max-w-[300px]" />
        </div>
        <p className="pl-1 font-montserrat text-center mb-4 md:text-lg leading-6 w-[80%] max-w-[500px]">
          I'd love to hear from you! Whether you have an opportunity, a project in mind,
          a question to ask, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
        </p>
        <form
          action="https://formspree.io/f/xknylodz"
          method="POST"
          className="font-montserrat flex flex-col items-center gap-4 w-[80%] max-w-[500px]"
        >
          <input
            id="name"
            name="Name"
            type="text"
            placeholder="Name"
            maxlength="30"
            className="bg-snow px-4 py-2 focus:ring-aqua/80 focus:outline-none focus:ring-2 text-rich-black w-full"
            required
          />
          <input
            id="email"
            name="Email"
            type="email"
            placeholder="Email address"
            className="bg-snow px-4 py-2 focus:ring-aqua/80 focus:outline-none focus:ring-2 text-rich-black w-full"
            required
          />
          <textarea
            id="message"
            name="Message"
            placeholder="Enter text here"
            maxlength="5000"
            className="bg-snow px-4 py-2 h-28 focus:ring-aqua/80 focus:outline-none focus:ring-2 text-rich-black w-full"
            required
          />
          <button
            type="submit flex gap-2"
            className="font-saira font-semibold text-snow py-2 px-5 border-2 border-snow
              bg-gradient-to-r from-rich-black from-50% to-onyx to-50% text-lg md:text-xl
              hover:from-snow hover:to-snow hover:text-rich-black transition-all duration-200"
          >
            Get in touch
          </button>
        </form>
        <p className="mt-2 font-saira font-bold text-xl">OR</p>
        <div className="links flex items-baseline gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/peter-nady-beshara"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-4 md:w-5 hover:text-aqua/80 transition-all duration-200"
            />
          </a>
          <a
            href="mailto:peter.nady.1408@gmail.com"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-4 md:w-5 hover:text-aqua/80 transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
