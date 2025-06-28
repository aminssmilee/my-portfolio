import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Meidyhidrate - Water & Medicine Reminder App',
    role: 'Fullstack Developer',
    year: '2025',
    description:
      'Developed reminder app with login/register, hydration goals, medication schedules, and notifications using Laravel & Flutter.',
    image: '/src/assets/Medi1.jpg',
    tech: ['Laravel', 'Flutter', 'Git', 'Postman', 'MySQL', 'Firebase'],
  },
  {
    title: 'Library System',
    role: 'Fullstack Developer',
    year: '2025',
    description:
      'Built CRUD features for books & members, and implemented loan/return reports.',
    image: '/src/assets/Lib/Lib1.jpg',
    tech: ['Laravel', 'Flutter', 'Git', 'Postman', 'Oracle Database'],
  },
  {
    title: 'Bank Sampah Management',
    role: 'Backend Developer',
    year: '2024',
    description:
      'Managed household waste data and user authentication using Spring Boot.',
    image: '/src/assets/Sam/Sam1.jpg',
    tech: ['Spring Boot', 'MySQL', 'Git'],
  },
  {
    title: 'iFeed - IoT Smart Fish Feeder',
    role: 'Backend Developer',
    year: '2024',
    description:
      'Built backend for IoT fish feeding system with PHP Native & ESP32.',
    image: '/src/assets/I1.jpg',
    tech: ['PHP Native', 'ESP32', 'Servo', 'MySQL'],
  },
  {
    title: 'Mini E-Commerce',
    role: 'Fullstack Developer',
    year: '2024 – Present',
    description:
      'Built e-commerce site with checkout, login/register, and payment integration.',
    image: '/src/assets/aminss.jpg',
    tech: ['PHP Native', 'Bootstrap', 'JavaScript', 'MySQL'],
  },
  {
    title: 'Web Undangan Pernikahan',
    role: 'Frontend Developer',
    year: '2024',
    description:
      'Responsive wedding invitation website with elegant layout.',
    image: '/src/assets/aminss.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

function ProjectPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white py-24 px-4 font-roboto min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight drop-shadow-lg"
          data-aos="fade-down"
        >
          All <span className="text-teal-400">Projects</span>
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? 'flip-left' : 'flip-right'}
              className="bg-[#1e293b]/90 rounded-2xl overflow-hidden shadow-2xl border border-[#334155] hover:shadow-teal-500/30 hover:-translate-y-2 hover:scale-105 transition-all duration-500 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover object-center group-hover:brightness-90 transition"
                />
                <div className="absolute top-3 right-3 bg-teal-400 text-[#1e293b] text-xs px-3 py-1 rounded-full font-bold shadow">
                  {project.year}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-teal-300 group-hover:text-teal-400 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 italic">{project.role}</p>
                <p className="text-gray-200 text-sm text-justify leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-2 py-1 rounded shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="zoom-in">
          <Link
            to="/"
            className="inline-block px-8 py-3 border-2 border-teal-400 text-teal-300 rounded-full font-semibold hover:bg-teal-400 hover:text-[#1e293b] shadow-lg transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
