import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-amber-400 text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Get In Touch
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-8">
            I'm currently looking for Software Engineering Internship
            opportunities. If you have an opportunity or just want to say
            hello, feel free to reach out.
          </p>

          <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-6"></div>

        </div>

        {/* Contact Card */}

        <div className="bg-[#171717] border border-zinc-800 rounded-3xl p-10">

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left */}

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl">

                  <FaEnvelope />

                </div>

                <div>

                  <p className="text-zinc-500">
                    Email
                  </p>

                  <a
                    href="mailto:yourmail@gmail.com"
                    className="text-white hover:text-amber-400 transition"
                  >
                    prayagkirar7@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                {/* <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl">

                  <FaPhoneAlt />

                </div> */}

                {/* <div>

                  <p className="text-zinc-500">
                    Phone
                  </p>

                  <p className="text-white">
                    +91 XXXXXXXXXX
                  </p>

                </div> */}

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <p className="text-zinc-500">
                    Location
                  </p>

                  <p className="text-white">
                    Vidisha, Madhya Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-6">
                Find Me Online
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <a
                  href="https://github.com/prayagbit75"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[#0F0F0F] border border-zinc-700 rounded-xl p-4 hover:border-amber-400 transition"
                >
                  <FaGithub className="text-xl text-amber-400" />
                  <span className="text-white">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/prayag-kirar-627571379"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[#0F0F0F] border border-zinc-700 rounded-xl p-4 hover:border-amber-400 transition"
                >
                  <FaLinkedin className="text-xl text-amber-400" />
                  <span className="text-white">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/prayag98"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[#0F0F0F] border border-zinc-700 rounded-xl p-4 hover:border-amber-400 transition"
                >
                  <SiLeetcode className="text-xl text-amber-400" />
                  <span className="text-white">LeetCode</span>
                </a>

                <a
                  href="https://codeforces.com/profile/itsprayag"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[#0F0F0F] border border-zinc-700 rounded-xl p-4 hover:border-amber-400 transition"
                >
                  <SiCodeforces className="text-xl text-amber-400" />
                  <span className="text-white">Codeforces</span>
                </a>

              </div>

              <a
                href="mailto:yourmail@gmail.com"
                className="mt-8 inline-flex items-center justify-center w-full bg-amber-500 text-black font-semibold py-4 rounded-xl hover:bg-amber-400 transition"
              >
                Send Email
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}