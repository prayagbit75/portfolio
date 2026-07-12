import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import TaskFlow from '../assets/image/TaskFlow.png'
import portfolio from '../assets/image/portfolio.png'

export default function Projects() {
  const projects = [

    {
      imageurl:TaskFlow,
      title: "TaskFlow",
      description:
        "Task management application with authentication, CRUD operations, profile management, image upload, and responsive dashboard.",
      tech: [
        "React",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
      github: "https://github.com/prayagbit75/TaskFlow.git",
      live: "https://task-flow-dun.vercel.app",
    },
    {
      imageurl:"",
      title: "UPI Banking System",
      description:
        "A full-stack Banking system platform with secure authentication, role-based access and analytics dashboard.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/Som949/Upi-Banking-System.git",
      live: "",
    },

    {
      imageurl:portfolio,
      title: "Portfolio website",
      description:
        "Modern responsive portfolio built using React and Tailwind CSS featuring smooth navigation, animations, and clean UI.",
      tech: [
        "React",
        "Tailwind",
      ],
      github: "https://github.com/prayagbit75/portfolio.git",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-amber-400 text-sm">
            My Work
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-[#171717] rounded-2xl border border-zinc-800 overflow-hidden hover:border-amber-400 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}

              <div className="h-52 w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                {project.imageurl === "" ? (
                  <span className="text-zinc-500 text-lg">
                    Project Screenshot
                  </span>
                ) : (
                  <img
                    src={project.imageurl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-white">

                  {project.title}

                </h3>

                <p className="text-zinc-400 leading-7 mt-4">

                  {project.description}

                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-[#0F0F0F] border border-zinc-700 text-zinc-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">
                    {project.github !== "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F0F0F] border border-zinc-700 hover:border-amber-400 transition"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.live !== "" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
                      >
                        <FaExternalLinkAlt />
                        Live
                      </a>
                    )}
                  </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}