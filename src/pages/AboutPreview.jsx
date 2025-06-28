/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import salis1 from '../assets/salispensfes.jpg';
import salis2 from '../assets/salis1.jpg';
import salis3 from '../assets/penanggungan1.jpg';
import salis4 from '../assets/penanggungan2.jpg';
import salis5 from '../assets/penanggungan3.jpg';
import salis6 from '../assets/penanggungan4.jpg';
import salis7 from '../assets/penanggungan5.jpg';
import salis8 from '../assets/Lorokan1.jpg';

function AboutPreview() {
  const images = [salis1, salis2, salis3, salis4, salis5, salis6, salis7, salis8];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-20 px-6 font-roboto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-32 items-center">
        {/* Konten Teks */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            About <span className="bg-teal-400 px-2 rounded">Me</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A brief introduction about me and my interests.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-teal-400 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition font-medium shadow-md"
          >
            Learn More
          </Link>
        </div>

        {/* Slideshow Image + Controls */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative flex flex-col items-center"
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Tombol kiri */}
            <button
              onClick={handlePrev}
              className="absolute left-0 z-20 p-2 text-white hover:text-teal-400 transition"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Gambar */}
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-96 h-96 object-cover rounded-2xl shadow-lg transition duration-500"
              key={currentImageIndex}
            />

            {/* Tombol kanan */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-20 p-2 text-white hover:text-teal-400 transition"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Titik indikator */}
          <div className="mt-11 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex
                    ? 'bg-teal-400 scale-125'
                    : 'bg-gray-500'
                } transition-transform duration-300`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
