import { Project } from "./Project";

export default function Works() {
  const project = {
    title: "PMDB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. sgestas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Aperiam, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "/s01.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    source: "http://github.com",
    visit: "http://google.com",
  };

  return (
    <main className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-rich-black from-40% to-onyx text-snow flex flex-col items-center">
      <h1 className="text-2xl lg:text-6xl font-montserrat font-semibold mb-8">
        Projects
      </h1>
      <Project project={project} />
    </main>
  );
}
