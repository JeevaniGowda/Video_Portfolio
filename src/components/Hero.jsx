import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Hero talking video
import heroVideo from '../assets/hero video/herovideo.mp4';

// Standing image for paused state
import heroImage from '../assets/hero video/image.png';

const Hero = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Play / Pause video
  const togglePlay = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Video playback blocked:', error);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // When video finishes
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >

      {/* TALKING VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted={false}
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* STANDING IMAGE WHEN VIDEO IS PAUSED */}
      <img
        src={heroImage}
        alt="Jeevani Gowda BS"
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* CONTENT CONTAINER */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m a <br />

            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Full Stack Developer
            </span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            I build practical and user-focused web applications, combining
            full-stack development, databases, and modern technologies to create
            clean and scalable digital solutions.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >

            {/* Primary Button */}
            <a
              href="#projects"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* PLAY / PAUSE BUTTON */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-12 md:mt-2 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto"
          onClick={togglePlay}
        >

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">

            {isPlaying ? (
              // PAUSE ICON
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              // PLAY ICON
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5.14v13.72c0 .79.87 1.27 1.54.85l10.86-6.86a1 1 0 000-1.7L9.54 4.29A1 1 0 008 5.14z" />
              </svg>
            )}

          </div>

          <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity mt-1">
            {isPlaying ? 'Pause' : 'Resume'}
          </span>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

    </section>
  );
};

export default Hero;