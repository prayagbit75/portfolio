import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDatabase,
  FaPython ,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode/>},
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-amber-400 uppercase tracking-[6px] text-sm">
            Technical Skills
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>

          <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

        </div>

        {/* Categories */}

        <div className="space-y-10">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-[#171717] border border-zinc-800 rounded-2xl p-8"
            >

              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="group flex flex-col items-center justify-center gap-3 bg-[#0F0F0F] border border-zinc-800 rounded-xl p-6 hover:border-amber-400 hover:-translate-y-2 transition-all duration-300"
                  >

                    <div className="text-4xl text-amber-400 group-hover:scale-110 transition">

                      {skill.icon}

                    </div>

                    <p className="text-zinc-300 text-center">

                      {skill.name}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}