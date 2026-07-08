import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Prayag<span className="text-amber-400">.</span>
            </h2>

            <p className="mt-3 text-zinc-400 max-w-md leading-7">
              Thanks for visiting my portfolio.
              I'm always open to new opportunities,
              collaborations, and meaningful conversations.
            </p>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/prayagbit75"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#171717] border border-zinc-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/prayag-kirar-627571379"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#171717] border border-zinc-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center hover:bg-amber-400 transition"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-zinc-800"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">

          <p>
            © {new Date().getFullYear()} Prayag. All Rights Reserved.
          </p>

          <p>
            Made with <span className="text-red-500">❤</span> using React &
            Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}