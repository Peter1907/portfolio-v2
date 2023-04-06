import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const isOdd = (num) => (num % 2 === 0 ? false : true);

const Tumbnail = ({ image, title }) => (
  <div className="relative flex-2 mb-4 w-full lg:max-w-[60%]">
    <div className="top-box absolute -top-2 -left-2 h-[80%] w-[70%] bg-aqua z-0" />
    <div className="bottom-box absolute -bottom-2 -right-2 h-[80%] w-[70%] bg-ras z-0" />
    <img
      src={image}
      alt={title}
      className="filter saturate-[0.35] hover:saturate-100 relative cursor-pointer hover:scale-105 transition-all duration-200 z-10"
    />
  </div>
);

const Info = ({ id, title, description, tags, source, live_demo }) => (
  <div className="flex-1 flex flex-col items-start max-w-[450px] lg:max-w-[45%] z-20">
    <h3
      className={
        `text-2xl lg:text-3xl mx-4 lg:mx-6 text-aqua font-saira font-semibold mb-2
        ${!isOdd(id) && 'self-end'}`
      }
    >
      {title}
    </h3>
    <div
      className={
        `flex flex-col font-montserrat px-4 py-2 mb-2 bg-gradient-to-br
        from-onyx/90 to-rich-black/80 to-70% ${isOdd(id) ? 'lg:-ml-14' : 'lg:-mr-14'}`
      }
    >
      <p className="leading-6 text-sm lg:text-md">{description}</p>
      <a
        href="#"
        className={`font-saira text-aqua hover:underline ${isOdd(id) ? 'self-end' : 'self-start'}`}>
        more about this
      </a>
    </div>
    <div className={`flex flex-wrap lg:mx-2 ${!isOdd(id) && 'self-end text-right'}`}>
      {tags.map((tag, i) => (
        <div key={tag}>
          <span className="text-aqua text-sm font-cutive py-1 px-2 rounded">
            {tag}
          </span>
          {(i !== tags.length - 1) && <span>|</span>}
        </div>
      ))}
    </div>
    <div className={`mx-4 lg:mx-6 flex mt-3 gap-4 ${!isOdd(id) && 'self-end'}`}>
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="cursor-pointer hover:text-aqua hover:mb-0.5 hover:-mt-0.5 transition-all duration-200 w-5"
          icon={faGithub}
        />
      </a>
      <a
        href={live_demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="cursor-pointer hover:text-aqua hover:mb-0.5 hover:-mt-0.5 transition-all duration-200 w-5"
          icon={faArrowUpRightFromSquare}
          fade
        />
      </a>
    </div>
  </div>
);

export const Project = ({ project }) => {
  const thumbnailProps = {
    image: project.image,
    title: project.title,
  };
  const infoProps = {
    id: project.id,
    title: project.title,
    description: project.description,
    tags: project.tags,
    source: project.source,
    live_demo: project.live_demo,
  };

  return (
    <>
      <div className="hidden lg:flex my-16 flex-row items-center gap-4 max-w-[900px] xl:max-w-[1100px] px-0 transition-all duration-300">
        {isOdd(project.id) ? <Tumbnail {...thumbnailProps} /> : <Info {...infoProps} />}
        {isOdd(project.id) ? <Info {...infoProps} /> : <Tumbnail {...thumbnailProps} />}
      </div>
      <div className="flex lg:hidden my-8 flex-col items-center max-w-[550px] px-4 transition-all duration-300">
        <Tumbnail {...thumbnailProps} />
        <Info {...infoProps} />
      </div>
    </>
  );
};
