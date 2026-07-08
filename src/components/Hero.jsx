import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0F0F] mt-5 "
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(#ffffff 1px, transparent 1px),
          linear-gradient(90deg,#ffffff 1px,transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <div>

            <span className="inline-block px-5 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm tracking-widest uppercase">
              Open To Internship
            </span>

           <div className="mt-8 text-amber-400 uppercase text-sm tracking-[4px] font-semibold">
              <TypeAnimation
                sequence={[
                  "Full Stack MERN Developer",
                  2000,
                  "Competitive Programmer",
                  2000,
                  "DSA Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                  "Open Source Learner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <h1 className="mt-5 text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Hi, I'm
              <br />
              <span className="text-amber-400">
                Prayag
              </span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-xl">
              Passionate MERN Stack Developer and Competitive Programmer.
              I love building scalable web applications and solving complex
              algorithmic problems using clean and efficient code.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 transition duration-300 text-black font-semibold"  onClick={() => handleScroll("projects")}
         >
                View Projects
              </button>

             <a
  href={Resume}
  download="Prayag_Resume.pdf"
  className="px-8 py-3 rounded-xl border border-zinc-700 hover:border-amber-500 hover:text-amber-400 transition duration-300"
>
  Download Resume
</a>

            </div>

            {/* Social */}

            <div className="mt-12 flex gap-5">

              <a
                href="https://github.com/prayagbit75"
                className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/prayag-kirar-627571379"
                className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://leetcode.com/prayag98"
                className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center hover:bg-amber-500 hover:text-black transition"
              >
                <SiLeetcode size={22} />
              </a>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-center">

            <div className="relative w-full max-w-md">

              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-amber-500/10 blur-3xl"></div>

              {/* Developer Card */}

              <div className="relative bg-[#171717] border border-zinc-800 rounded-3xl p-8">

                <div className="flex items-center gap-3 mb-8">

                  <div className="w-3 h-3 rounded-full bg-red-500"></div>

                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                </div>

                <div className="space-y-5 font-mono text-sm">

                  <p className="text-blue-400">
                    const <span className="text-white">developer</span> = {"{"}
                  </p>

                  <p className="ml-6">
                    <span className="text-purple-400">name</span>:{" "}
                    <span className="text-green-400">"Prayag"</span>,
                  </p>

                  <p className="ml-6">
                    <span className="text-purple-400">role</span>:{" "}
                    <span className="text-green-400">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="ml-6">
                    <span className="text-purple-400">skills</span>: [
                    <span className="text-green-400">
                      "React", "MongoDB", "C++",....
                    </span>
                    ],
                  </p>

                  <p className="ml-6">
                    <span className="text-purple-400">status</span>:{" "}
                    <span className="text-green-400">
                      "Open for Internship"
                    </span>
                  </p>

                  <p className="text-blue-400">{"}"}</p>

                </div>

                {/* Bottom Badge */}

                <div className="mt-10 flex items-center gap-3 bg-[#0F0F0F] rounded-xl border border-zinc-800 p-4">

                  <FaCode className="text-amber-400" />

                  <div>

                    <p className="text-xs text-zinc-500 uppercase">
                      Tech Stack
                    </p>

                    <p className="text-white">
                     MongoDB • Express • React • Node
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-500">

  <span className="text-xs tracking-[6px] uppercase">
    Scroll
  </span>

  <div className="mt-2 w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">

    <div className="mt-2 w-1.5 h-3 rounded-full bg-amber-400 animate-bounce"></div>

  </div>

</div>

    </section>
  );
}