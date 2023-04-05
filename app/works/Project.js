export const Project = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-4 max-w-[1100px] px-4 lg:px-0">
      <div className="relative flex-2 mb-4">
        <div className="top-box absolute -top-2 -left-2 h-[80%] w-[70%] bg-aqua z-0" />
        <div className="bottom-box absolute -bottom-2 -right-2 h-[80%] w-[70%] bg-ras z-0" />
        <img
          src={project.image}
          alt={project.title}
          className="relative max-w-[550px] w-full z-10"
        />
      </div>
      <div className="flex-1 max-w-[450px] z-20">
        <h3 className="text-2xl lg:text-4xl lg:ml-6 text-aqua font-saira font-semibold mb-2">
          {project.title}
        </h3>
        <div className="description-background font-montserrat lg:-ml-14 px-4 py-2 mb-3 bg-gradient-to-br from-onyx/90 to-rich-black/80 to-70%">
          <p className="text-sm lg:text-base">{project.description}</p>
        </div>
        <div className="flex flex-wrap lg:ml-2">
          {project.tags.map((tag, i) => (
            <>
              <span
                key={tag}
                className="text-aqua text-[10px] leading-5 font-cutive py-1 px-2 rounded"
              >
                {tag}
              </span>
              {(i !== project.tags.length - 1) && <span>|</span>}
            </>
          ))}
        </div>
        <div className="flex mt-2 lg:ml-2">
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rich-black text-snow text-xs font-semibold py-1 px-4 rounded mr-4"
          >
            Source
          </a>
          <a
            href={project.visit}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rich-black text-snow text-xs font-semibold py-1 px-4 rounded"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};
