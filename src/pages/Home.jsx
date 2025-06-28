import { Typewriter } from 'react-simple-typewriter';
import LocationBadge from '../components/LocationBadge';
import aminssImg from '../assets/salis1.jpg';


function Home() {
    return (
        <section id="home" className="relative p-8 bg-[#0f0f0f] min-h-screen flex justify-center items-center text-white font-roboto">
            <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl">
                {/* Foto Profil */}
                <div className="relative flex-shrink-0 mb-8 md:mb-0" data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <div className="absolute inset-0 w-52 h-52 md:w-72 md:h-72 bg-teal-500 rounded-full -z-10 blur-sm shadow-lg"></div>
                    <img
                        src={aminssImg}
                        alt="Salis Ahmad"
                        className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover z-10"
                    />
                </div>
                {/* Konten */}
                <div data-aos="fade-left" data-aos-offset="200"  className="flex flex-col items-center md:items-start gap-6 w-full max-w-xl ">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        <span className="bg-teal-400 px-2 py-1 ">Hello,</span>
                        <br />
                        <span className="mt-2 inline-block">I'm Stalis Ahmad Sholeh</span>
                    </h2>
                    <h3 className="text-xl md:text-3xl text-gray-300 font-medium">
                        And I'm a{' '}
                        <span className="text-teal-400 font-bold">
                            <Typewriter
                                words={['Web Developer', 'Mobile Developer', 'Backend Developer', 'Frontend Developer', 'Fullstack Developer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed text-justify">
                    I’m a junior fullstack developer with a focus on building intuitive, user-friendly, and functional websites and applications.  
                    I’m passionate about both frontend and backend development, as well as mobile development.  
                    I love learning new technologies and am always open to new opportunities.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <a
                            href="/src/assets/CV_StalisAhmad.pdf"
                            download
                            className="inline-block px-6 py-3 text-teal-400 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition font-medium shadow-md"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            {/* LocationBadge fixed di pojok kanan bawah */}
            <div className="fixed bottom-6 right-6 z-20 bg-gray">
                <LocationBadge />
            </div>
        </section>
    );
}

export default Home;
