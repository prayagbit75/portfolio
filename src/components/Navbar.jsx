import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-zinc-800" >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}

        <h1
          onClick={() => handleScroll("home")}
          className="text-3xl font-bold cursor-pointer"
        >
          <span className="text-white">Prayag</span>
          <span className="text-amber-400">.</span>
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer text-zinc-300 hover:text-amber-400 transition duration-300"
            >
              {item.name}
            </li>
          ))}

        </ul>

        {/* Mobile Menu Icon */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-[#171717] border-t border-zinc-800">

          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left px-6 py-4 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 transition"
            >
              {item.name}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
}