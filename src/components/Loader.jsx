import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Dots Animation
    tl.to(".loader-dot", {
      y: -20,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
      },
      ease: "power2.inOut",
      duration: 0.6
    });

    // Text Reveal Animation
    tl.fromTo(textRef.current, 
      { opacity: 0, letterSpacing: "10px" }, 
      { opacity: 1, letterSpacing: "2px", duration: 1, ease: "power3.out" },
      0 // Start at the same time as dots
    );

    // Initial Background Fade-in
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center gap-8"
    >
      {/* Animated Dots */}
      <div className="flex gap-4">
        {[1, 2, 3].map((dot) => (
          <div 
            key={dot}
            className="loader-dot w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          />
        ))}
      </div>

      {/* Loading Text */}
      <div className="relative">
        <h2 
          ref={textRef}
          className="text-white font-black text-xl tracking-[5px] uppercase"
        >
          SHASHANK<span className="text-purple-500">.</span>Blog
        </h2>
        {/* Progress Line */}
        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>

      <p className="text-gray-600 text-[10px] font-medium tracking-widest uppercase mt-4 animate-pulse">
        Initializing Creative Space...
      </p>
    </div>
  );
};

export default Loader;