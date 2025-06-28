/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUndo } from 'react-icons/fa';
import salis1 from '../assets/salispensfes.jpg';
import salis2 from '../assets/salis1.jpg';
import salis3 from '../assets/penanggungan1.jpg';
import salis4 from '../assets/penanggungan2.jpg';
import salis5 from '../assets/penanggungan3.jpg';
import salis6 from '../assets/penanggungan4.jpg';
import salis7 from '../assets/penanggungan5.jpg';
import salis8 from '../assets/Lorokan1.jpg';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiLaravel, SiSpringboot, SiWebpack, SiFigma, SiJest, SiPostman, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiFlutter, SiDart, SiLaragon } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const images = [salis1, salis2, salis3, salis4, salis5, salis6, salis7, salis8];

    const skills = [
        {
            category: 'Web Development',
            items: [
                { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
                { name: 'CSS3', icon: <SiCss3 className="text-blue-400" /> },
                { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
                { name: 'React', icon: <SiReact className="text-cyan-400" /> },
                { name: 'Tailwind', icon: <SiTailwindcss className="text-" /> },
            ]
        },
        {
        category: 'Backend Development',
        items: [
            { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
            { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
            { name: 'REST API', icon: <SiPostman className="text-orange-400" /> }
        ]
        },
        {
        category: 'Full-Stack Development',
        items: [
            { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
            { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
            { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
            { name: 'Laragon', icon: <SiLaragon className="text-yellow-500" /> },

        ]
        },
        {
        category: 'Mobile Development',
        items: [
            { name: 'Flutter', icon: <SiFlutter className="text-sky-400" /> },
            { name: 'Dart', icon: <SiDart className="text-blue-600" /> },
        ]
        },
        {
            category: 'Tools & Technologies',
            items: [
                { name: 'Git', icon: <SiGit className="text-red-500" /> },
                { name: 'Vs Code', icon: <SiWebpack className="text-gray-400" /> },
                { name: 'Ide', icon: <SiJest className="text-red-400" /> },
                { name: 'REST API', icon: <SiPostman className="text-orange-400" /> }
                
            ]
        }
    ];

    const experiences = [
        {
            role: 'Juara 2 Pensi PENSLA Festival 2025',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2025',
            desc: 'Guitarist Pensi 2 TI A pada acara PENSLA Festival 2025.',
        },
        {
            role: 'Panitia PENSLA Festival',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2025',
            desc: 'Penanggung jawab lomba mobile legend pada acara PENSLA Festival 2025.',
        },
        {
            role: 'PKM-KC',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2025',
            desc: 'Sistem Pemantauan Tanaman Pintar Berbasis IoT untuk Meningkatkan Efisiensi dan Hasil Panen | Ketua.',
        },
        {
            role: 'PMD (PENS Membangun Desa)',
            company: 'Politeknik Elektronika Negeri Surabaya',
            year: '2024',
            desc: 'IMPLEMENTASI KORESPONDENSI BERBASIS WEB UNTUK MENINGKATKAN EFISIENSI ADMINISTRASI DI DESA MADULEGI | Divisi Humas | Juara 2 Proposal Terbaik PMD 2024.',
        },
        {
            role: 'HIMAKALA (Himpunan Mahasiswa PENS PSDKU Lamongan',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2024 - Sekarang',
            desc: 'Divisi Lugri | Dagri.',
        },
        {
            role: 'LKMM TD',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2024',
        },
        {
            role: 'LMT (Life Management Training)',
            company: 'Mojokerto | Politeknik Elektronika Negeri Surabaya',
            year: '2024',
        },
        {
            role: 'LKMM PRA-TD',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2023',
        },
        {
            role: 'Ospek Jurusan',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2023',
        },
        {
            role: 'PKKMB PENS 2023',
            company: 'Politeknik Elektronika Negeri Surabaya PSDKU Lamongan',
            year: '2023',
        }
    ];

    return (
        <>
            <section id="about-preview" className="bg-[#0f0f0f] text-white py-20 px-6 font-roboto overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 mt-32 items-start">
                    <div
                        data-aos="fade-right"
                        className="text-left space-y-6 w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            About <span className="bg-teal-400">Me</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            A brief introduction about me and my interests.
                        </p>
                        <Link
                            to="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.history.back();
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 text-teal-400 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition font-medium shadow-md"
                        >
                            Undo
                            <FaUndo className="ml-2" />
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 overflow-hidden">
                        <div className="relative h-[400px]" data-aos="fade-left">
                            <div className="flex gap-6 absolute top-0 left-0 h-full">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Foto ${index + 1}`}
                                        className="h-full w-auto rounded-xl shadow-lg object-cover"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-[#0f0f0f] text-white min-h-screen py-16 px-4 md:px-8 font-roboto">
                <div className="max-w-5xl mx-auto flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="md:w-2/3 space-y-4 text-justify" data-aos="fade-up">
                            <p className="text-gray-300 text-lg">
                                <strong className="text-black bg-teal-400">Stalis Ahmad Sholeh</strong> — Hey there! I'm a tech enthusiast and aspiring web developer from Lamongan, East Java, Indonesia. Currently, I'm on an exciting academic journey at Politeknik Elektronika Negeri Surabaya, majoring in Informatics Engineering.
                            </p>
                            <p className="text-gray-300 text-lg">
                                My passion for technology and coding knows no bounds. Beyond the world of programming, I find myself deeply immersed in design, game development, and the fascinating universe of AI.
                            </p>
                            <p className="text-gray-300 text-lg">
                                I believe that in today's fast-paced digital world, being a lifelong learner is not just a choice but a necessity. Let’s connect and explore this ever-evolving world of tech together!
                            </p>
                        </div>
                        <div className="md:w-1/3 space-y-6" data-aos="fade-left">
                            <h2 className="text-2xl font-bold text-teal-400 border-b-2 border-gray-600 mb-2">Skills & Expertise</h2>
                                <p className="text-gray-300 text-sm text-justify">
                                Explore some of the key skills I’m proficient in to deliver high-quality, modern web solutions with clean and scalable code.
                            </p>
                            {skills.map((section, idx) => (              
                                <div key={section.category} data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <h3 className="text-teal-300 font-semibold text-sm mb-2">{section.category}</h3>
                                    <ul className="flex flex-wrap gap-2">
                                        {section.items.map(({ name, icon }) => (
                                            <li key={name} className="bg-teal-500 text-black flex items-center gap-2 font-medium px-3 py-1 rounded-full text-xs shadow hover:bg-teal-400 transition">
                                                <span className="text-white text-base">{icon}</span>
                                                {name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Experience & Education */}
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Experience */}
                        <div className="md:w-1/2" data-aos="fade-right">
                            <h2 className="text-2xl font-bold text-teal-400 border-b-2 border-gray-400 mb-4">Campus Activities Experience</h2>
                            <ul className="space-y-4">
                                {experiences.map((exp, idx) => (
                                    <li key={exp.role + exp.company} className="bg-transparent p-4 rounded-lg shadow" data-aos="fade-up" data-aos-delay={idx * 100}>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                            <span className="text-teal-300 text-sm">{exp.year}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            in <span className="text-white">{exp.company}</span>
                                        </p>
                                        <p className="text-gray-300 mt-2 text-sm">{exp.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Education */}
                        <div className="md:w-1/2 text-justify" data-aos="fade-left">
                            <h2 className="text-2xl font-bold text-teal-400 border-b-2 border-gray-400 mb-2">
                                Education
                            </h2>
                            <p className="text-gray-300 text-sm mb-4">
                                Get to know more about my educational background and academic journey.
                            </p>

                            {/* Campus Image */}
                            <img 
                                src={'/src/assets/pens1.jpg'} 
                                alt="Politeknik Elektronika Negeri Surabaya" 
                                className="rounded-lg shadow-md mb-4 w-full object-cover h-48 md:h-64 lg:h-80"
                                data-aos="zoom-in"
                            />

                            <ul className="text-gray-300 space-y-4">
                                <li className="bg-gray-500 p-4 rounded-lg shadow" data-aos="fade-up">
                                    <strong className="text-white">D3 Teknik Informatika | Informatics Engineering</strong><br />
                                    Politeknik Elektronika Negeri Surabaya (2023 - Present)
                                    <br />
                                    <span className="text-sm">
                                        I am currently pursuing a diploma degree in Informatics Engineering at Politeknik Elektronika Negeri Surabaya. 
                                        Fascinated by the world of technology, I am eager to continuously learn and explore new advancements in the field of informatics. <br />
                                        Actively involved in various campus organizations.
                                    </span>
                                </li>
                                <li className="bg-blue-500 p-4 rounded-lg shadow" data-aos="fade-up" data-aos-delay="100">
                                    <strong className="text-white">SMA Negeri 1 Sukodadi</strong> (2020 - 2023)
                                    <br />
                                    <span className="text-sm">Natural Science (MIPA) Major</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Quotes & Contact */}
                    <div className="flex flex-col items-center text-justify mt-80">
                        {/* Quotes */}
                        <div className="w-full md:w-2/3" data-aos="fade-up">
                            <h2 className="text-2xl text-center font-bold text-teal-400 border-b-2  border-gray-600 mb-4">
                                Quotes
                            </h2>
                            <blockquote className="italic text-gray-400 border-l-4 border-teal-500 pl-4  max-w">
                                "Learning to write programs stretches your mind, and helps you think better,
                                creates a way of thinking about things that I think is helpful in all domains."
                                <br />
                                <span className="text-teal-300 text-center ">– Bill Gates</span>
                            </blockquote>
                        </div>
                    </div>

                    {/* Contact */}
                        <div className="md:w-1/3 mx-auto mt-96" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-teal-400 border-b-2 border-gray-600 mb-4 text-center">
                                Get in Touch
                            </h2>
                            <p className="text-gray-400 text-sm mb-4 text-center">
                                Feel free to reach out if you'd like to connect, collaborate, or just have a chat!
                            </p>
                            <div className="bg-transparent p-6 rounded-lg shadow-md space-y-4 text-sm text-gray-300">
                                <div>
                                <span className="font-semibold text-white">Email:</span>{' '}
                                <a href="mailto:ahmad.rizky@email.com" className="text-teal-400 hover:underline">
                                    salisahmad48@email.com
                                </a>
                                </div>
                                <div>
                                <span className="font-semibold text-white">LinkedIn:</span>{' '}
                                <a
                                    href="https://linkedin.com/in/aminssmile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline"
                                >
                                    linkedin.com/in/aminssmile
                                </a>
                                </div>
                                <div>
                                <span className="font-semibold text-white">GitHub:</span>{' '}
                                <a
                                    href="https://github.com/aminssmilee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline"
                                >
                                    github.com/aminssmile
                                </a>
                                </div>
                            </div>
                            </div>

            </section>
        </>
    );
}

export default About;

