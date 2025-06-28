import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Footer from './components/Footer';
import Project from './pages/Project';
import AboutPreview from './pages/AboutPreview';
import ProjectPreview from './pages/ProjectPreview';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animasi berjalan 1 detik
      once: false,     // hanya animasi sekali (saat pertama masuk)
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={
              <>
                <Home />
                <AboutPreview />
                <ProjectPreview />
                <Contact />
              </>
            } />
            {/* Halaman Detail */}
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
