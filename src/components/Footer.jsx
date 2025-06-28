import React from 'react';
import {
  FaReact,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiFramer, SiGreensock } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 ">

        {/* Left: Copyright */}
        <div className="text-center md:text-left text-base">
          <p>
            &copy; 2025 <span className="text-teal-400 font-semibold">Salis Ahmad</span>. All rights reserved.
          </p>
        </div>

        {/* Middle: Built With */}
        <div className="text-center text-base">
          <p className="mb-2 font-medium text-white">Built With:</p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-2xl">
            <FaReact className="text-blue-400" title="React" />
            <SiVite className="text-purple-400" title="Vite" />
            <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />
            <SiFramer className="text-pink-400" title="Framer Motion" />
            <SiGreensock className="text-green-500" title="GSAP" />
          </div>
        </div>

        {/* Right: Optional - Tambahan Link GitHub atau Lokasi */}
        <div className="text-center md:text-right">
          <a
            href="https://github.com/aminssmilee/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:underline text-base"
          >
            <FaGithub /> View Source
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
