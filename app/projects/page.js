import Footer from '../footer';
import { projectData } from './data';
import { Project } from './Project';

export default function Works() {
  const projects = projectData;

  return (
    <>
      <main className="pt-32 pb-20 text-snow flex flex-col items-center">
        <div className="background top-0 fixed w-screen h-screen bg-no-repeat bg-gradient-to-br from-rich-black from-40% to-onyx z-0" />
        <div className="title flex items-baseline gap-2 lg:gap-4 mb-8 z-10">
          <h1 className="text-3xl lg:text-5xl font-saira font-semibold">
            Featured Projects
          </h1>
          <p className="border-t border-snow w-[30vw]" />
        </div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </main>
      <Footer />
    </>
  );
}
