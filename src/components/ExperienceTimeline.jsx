import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CursorHoverImage from '/src/components/CursorHoverImage';
import {
  FaJava,
  FaLaptopCode,
  FaRobot,
  FaAccusoft,
  FaBriefcase,
  FaCode,
  FaLaravel,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiPostman,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiEspressif,
} from 'react-icons/si';
import { MdOutlineDevices } from 'react-icons/md';

// Mapping teknologi ke icon
const techIcons = {
  Laravel: <FaLaravel className="inline mr-1 text-red-500" />,
  Flutter: <SiFlutter className="inline mr-1 text-blue-400" />,
  Git: <FaGitAlt className="inline mr-1 text-orange-500" />,
  Postman: <SiPostman className="inline mr-1 text-orange-400" />,
  Mysql: <SiMysql className="inline mr-1 text-yellow-500" />,
  MySQL: <SiMysql className="inline mr-1 text-yellow-500" />,
  Firebase: <SiFirebase className="inline mr-1 text-yellow-400" />,
  MongoDB: <SiMongodb className="inline mr-1 text-green-600" />,
  ESP32: <SiEspressif className="inline mr-1 text-red-600" />,
  Servo: <MdOutlineDevices className="inline mr-1 text-gray-400" />,
  Bootstrap: <FaBootstrap className="inline mr-1 text-purple-500" />,
  JavaScript: <FaJs className="inline mr-1 text-yellow-400" />,
  HTML: <FaHtml5 className="inline mr-1 text-orange-600" />,
  CSS: <FaCss3Alt className="inline mr-1 text-blue-600" />,
};

const technologies = (techs) => (
  <div className="flex flex-wrap gap-2 mt-2 text-sm">
    {techs.map((tech, idx) => (
      <span
        key={idx}
        className="bg-gray-700 px-2 py-1 rounded hover:bg-teal-500 transition cursor-pointer flex items-center"
        title={`Built using ${tech}`}
      >
        {techIcons[tech] || <FaDatabase className="inline mr-1" />}
        {tech}
      </span>
    ))}
  </div>
);

function ExperienceTimeline() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6">
      <VerticalTimeline lineColor="#14b8a6">
        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2025"
          iconStyle={{ background: '#2563eb', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <CursorHoverImage imageSrc="/src/assets/medi1.jpg">
          <h3 className="font-bold text-lg">Fullstack Developer</h3>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/medi2.jpg">
          <h4 className="italic text-teal-400">Meidyhidrate - Water & Medicine Reminder App</h4>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/medi3.jpg">
          <p>
            Developed reminder app with login/register, hydration goals, medication schedules,
            and notifications using Laravel & Flutter.
          </p>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/medi4.jpg">
          {technologies(['Laravel', 'Flutter', 'Git', 'Postman', 'Mysql', 'Firebase'])}
          </CursorHoverImage>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2025"
          iconStyle={{ background: '#9333ea', color: '#fff' }} // Purple
          icon={<FaLaptopCode />}
        >
          <CursorHoverImage imageSrc="/src/assets/Lib/Lib1.jpg">
          <h3 className="font-bold text-lg">Fullstack Developer</h3>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/Lib/Lib2.jpg">
          <h4 className="italic text-teal-400">Sistem Perpustakaan |  Library System</h4>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/Lib/Lib3.jpg">
          <p>
            Built CRUD features for books & members, and implemented loan/return reports.
          </p>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/Lib/Lib4.jpg">
          {technologies(['Laravel', 'Flutter', 'Git', 'Postman', 'Oracle Database'])}
          </CursorHoverImage>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2025"
          iconStyle={{ background: '#0d9488', color: '#fff' }} // Teal
          icon={<FaLaravel />}
        >
          <CursorHoverImage imageSrc="/src/assets/Time/Time1.jpg">
          <h3 className="font-bold text-lg">Backend Developer</h3>
          <h4 className="italic text-teal-400">Penyeimbang Jadwal</h4>
          <p>
            Scheduling and reminder logic system using Laravel + MongoDB.
          </p>
          {technologies(['Laravel', 'Git', 'MongoDB'])}
          </CursorHoverImage>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2024"
          iconStyle={{ background: '#16a34a', color: '#fff' }} // Green
          icon={<FaJava />}
        >
          <CursorHoverImage imageSrc="/src/assets/Sam/Sam1.jpg">
          <h3 className="font-bold text-lg">Backend Developer</h3>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/Sam/Sam2.jpg">

          <h4 className="italic text-teal-400">TrashGo | Sistem Management Bank Sampah</h4>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/Sam/Sam3.jpg">
          <p>
            Managed household waste data and user authentication using Spring Boot.
          </p>
          </CursorHoverImage>
          <CursorHoverImage imageSrc="/src/assets/Sam/Sam4.jpg">
          {technologies(['Spring Boot', 'MySQL', 'Git'])}
          </CursorHoverImage>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2024"
          iconStyle={{ background: '#ea580c', color: '#fff' }} // Orange
          icon={<FaRobot />}
        >
          <CursorHoverImage imageSrc="/src/assets/I1.jpg">
          <h3 className="font-bold text-lg">Backend Developer</h3>
          <h4 className="italic">IoT iFeed (Smart Fish Feeder)</h4>
          <p>
            Built backend for IoT fish feeding system with PHP Native & ESP32.
          </p>
          {technologies(['PHP Native', 'ESP32', 'Servo', 'MySQL'])}
          </CursorHoverImage>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2024 – Present"
          iconStyle={{ background: '#dc2626', color: '#fff' }} // Red
          icon={<FaBriefcase />}
        >
          <h3 className="font-bold text-lg">Fullstack Developer</h3>
          <h4 className="italic">Mini E-Commerce</h4>
          <p>
            Built e-commerce site with checkout, login/register, and payment.
          </p>
          {technologies(['PHP Native', 'Bootstrap', 'JavaScript', 'MySQL'])}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2024"
          iconStyle={{ background: '#4f46e5', color: '#fff' }} // Indigo
          icon={<FaCode />}
        >
          <h4 className="italic">Web Undangan Pernikahan</h4>
          <p>Responsive wedding invitation website with elegant layout.</p>
          {technologies(['HTML', 'CSS', 'JavaScript'])}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          date="2023"
          iconStyle={{ background: '#0ea5e9', color: '#fff' }} // Sky Blue
          icon={<FaCode />}
        >
          <h4 className="italic">Personal Portfolio Website</h4>
          <p>Responsive site showcasing projects, tech stacks, and contact info.</p>
          {technologies(['HTML', 'CSS', 'JavaScript'])}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default ExperienceTimeline;
