import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <section className="fixed hidden z-20 text-gray-400 md:block">
      <div className="links flex flex-col items-center gap-4 fixed bottom-0 left-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Peter1907"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/peter-nady-beshara"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-5 hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wellfound.com/u/peter-beshara"
        >
          <FontAwesomeIcon
            icon={faAngellist}
            className="w-5 hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@peter.beshara"
        >
          <FontAwesomeIcon
            icon={faMedium}
            className="w-5 hover:mb-1 hover:-mt-1 hover:text-aqua/80 transition-all duration-200"
          />
        </a>
        <p className="vertical-line h-[10vh] border-r border-gray-400" />
      </div>
      <div className="email flex flex-col items-center gap-4 fixed top-20 right-6">
        <p className="vertical-line h-[10vh] border-r border-gray-400" />
        <a
          href="mailto:peter.nady.1408@gmail.com"
          className="cursor-pointer w-5 -rotate-90 mt-[11.5rem] hover:mt-[11.8rem] hover:text-aqua/80 transition-all duration-200"
        >
          peter.nady.1408@gmail.com
        </a>
      </div>
    </section>
  );
};
