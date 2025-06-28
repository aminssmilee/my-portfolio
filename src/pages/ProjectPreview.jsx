import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceTimeline from '../components/ExperienceTimeline';

function ProjectPreview() {
  return (
    <section
      id="project"
      className="min-h-screen bg-[#0f0f0f] text-white py-24 px-6 font-roboto"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-16">
        
        {/* Judul & Deskripsi */}
        <div
        className="text-center space-y-6 mt-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        >
        <h1 className="text-4xl md:text-5xl font-extrabold">
            Projects <span className="text-teal-400">Experience</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto text-justify">
            Here are some of the projects I’ve worked on, showcasing my skills in
            fullstack development using React, Laravel, and REST APIs. Each project
            reflects my passion for building efficient and scalable applications.
        </p>
        </div>

        {/* Timeline */}
        <div className="w-full">
          <ExperienceTimeline />
        </div>

        {/* Tombol */}
        <div className="text-center">
          <Link
            to="/project"
            className="inline-block px-6 py-3 text-teal-400 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition font-medium shadow-md"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectPreview;
