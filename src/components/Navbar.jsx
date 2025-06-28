import { useRef, useState, useEffect } from 'react';
import { CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Project', target: 'project' },
  { label: 'Contact', target: 'contact' },
];

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/aminssmilee', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aminssmile/', label: 'LinkedIn' },
  { icon: <FaInstagram />, url: 'https://instagram.com/aminssmile', label: 'Instagram' },
  { icon: <FaEnvelope />, url: 'mailto:salisahmad48@gmail.com', label: 'Email' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef(null);
  const navItemRefs = useRef([]);
  const socialRef = useRef(null);

  const addToNavRefs = (el) => {
    if (el && !navItemRefs.current.includes(el)) {
      navItemRefs.current.push(el);
    }
  };

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power2.out' }
      );

      gsap.fromTo(
        navItemRefs.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.2 }
      );

      gsap.fromTo(
        socialRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.6 }
      );
    }
  }, [isOpen]);

  const handleScrollTo = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white p-4 flex items-center gap-6 font-roboto">
      <div className="flex items-center gap-3">
        <CodeBracketIcon className="h-6 w-6 text-white" />
        <h1 className="text-xl font-bold">aminsswebs</h1>
      </div>

      {/* Toggle button */}
      <div className="ml-auto cursor-pointer" onClick={isOpen ? closeMenu : openMenu}>
        <div className="w-8 h-8">
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </div>
      </div>

      {/* Sidebar and overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-20" onClick={closeMenu}></div>

          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white text-gray-800 shadow-lg z-30 flex flex-col justify-between"
            style={{ transform: 'translateX(100%)' }}
          >
            {/* Sidebar header */}
            <div>
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-bold text-lg">Navigation</span>
                <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={closeMenu} />
              </div>

              {/* Nav links */}
              <div className="flex flex-col justify-center items-start h-[60vh] font-extrabold">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    ref={addToNavRefs}
                    className="px-6 py-4 hover:bg-gray-100 cursor-pointer w-full text-left"
                    onClick={() => handleScrollTo(item.target)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div
              ref={socialRef}
              className="flex justify-around items-center p-4 border-t text-2xl"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
