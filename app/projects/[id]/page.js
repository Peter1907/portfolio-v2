import { Project } from '../Project';
import { projectData } from '../data';

export default function projectDetails({ params }) {
  const { id } = params;
  const project = projectData[id - 1];

  return (
    <main className="text-snow h-screen flex flex-col justify-center items-center">
      <div className="background top-0 fixed w-screen h-screen bg-no-repeat bg-gradient-to-br from-rich-black from-40% to-onyx z-0" />
      <Project key={project.id} project={project} />
    </main>
  );
}
