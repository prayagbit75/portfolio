import { FaLaptopCode, FaCodeBranch, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack MERN Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      description:
        "Built full-stack web applications using React, Node.js, Express.js, and MongoDB. Implemented authentication, REST APIs, responsive UI, and database integration.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      icon: <FaCodeBranch />,
      title: "Competitive Programming",
      company: "LeetCode & Codeforces",
      duration: "2024 - Present",
      description:
        "Actively solving Data Structures & Algorithms problems to strengthen problem-solving and coding skills. Regularly participate in coding contests and practice efficient algorithms.",
      skills: ["C++", "DSA", "STL", "Algorithms"],
    },
    {
      icon: <FaBriefcase />,
      title: "Open to Internship",
      company: "Software Engineering Roles",
      duration: "Available",
      description:
        "Currently seeking Software Engineering internship opportunities to apply my technical skills, learn from industry experts, and contribute to impactful projects.",
      skills: ["MERN", "Backend", "Frontend", "Problem Solving"],
    },
  ];

  return (
    <section id="experience" className="py-28 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[6px] text-sm">
            Career
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group bg-[#171717] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-amber-400 mt-2">
                {item.company}
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                {item.duration}
              </p>

              {/* Description */}
              <p className="mt-5 text-zinc-400 leading-7">
                {item.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#0F0F0F] border border-zinc-700 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}