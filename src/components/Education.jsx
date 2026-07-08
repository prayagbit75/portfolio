import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institute: "Indian Institute of Information Technology Vadodara",
      duration: "2024 - Present",
      score: "CGPA : 7.9 / 10", // Update if needed
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management System",
        "Web Development",
      ],
    },
    {
      icon: <FaSchool />,
      degree: "Higher Secondary (Class XII)",
      institute: "M.P. Board",
      duration: "2023",
      score: "90.7%",
    },
    {
      icon: <FaSchool />,
      degree: "Secondary (Class X)",
      institute: "M.P. Board",
      duration: "2021",
      score: "84%",
    },
  ];

  return (
    <section
      id="education"
      className="py-28 bg-[#0F0F0F]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-amber-400 uppercase tracking-[6px] text-sm">
            Qualification
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Cards */}

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="group bg-[#171717] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-8">

                {/* Left */}

                <div className="flex gap-5">

                  <div className="text-3xl text-amber-400 mt-1">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-white">
                      {item.degree}
                    </h3>

                    <p className="text-zinc-400 mt-2">
                      {item.institute}
                    </p>

                    <p className="text-zinc-500 mt-1">
                      {item.duration}
                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="md:text-right">

                  <p className="inline-block px-5 py-2 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                    {item.score}
                  </p>

                </div>

              </div>

              {/* Coursework */}

              {item.coursework && (

                <div className="mt-8">

                  <h4 className="text-white font-semibold mb-4">
                    Relevant Coursework
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {item.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-[#0F0F0F] border border-zinc-700 text-zinc-300 text-sm hover:border-amber-400 transition"
                      >
                        {course}
                      </span>
                    ))}

                  </div>

                </div>

              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}