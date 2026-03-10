// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const navRef = useRef(null);
//   const location = useLocation();

//   // Scroll logic for hiding/showing navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsScrolled(currentScrollY > 50);

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setVisible(false); // Scrolling down
//         setIsMobileMenuOpen(false); // Close menu on scroll
//       } else {
//         setVisible(true); // Scrolling up
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Initial GSAP Animation
//   useEffect(() => {
//     gsap.from(navRef.current, {
//       y: -100,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power4.out",
//     });
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Trending', path: '/trending' },
//     { name: 'Articles', path: '/articles' },
//   ];

//   return (
//     <>
//       <AnimatePresence>
//         {visible && (
//           <motion.nav
//             ref={navRef}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             exit={{ y: -100 }}
//             className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
//               isScrolled 
//                 ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/10" 
//                 : "py-6 bg-transparent"
//             }`}
//           >
//             <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
              
//               {/* Logo */}
//               <Link to="/" className="group relative z-[110]">
//                 <span className="text-2xl font-black tracking-tighter text-white">
//                   SHASHANK<span className="text-purple-500 group-hover:text-pink-500 transition-colors">.</span>BLOG
//                 </span>
//               </Link>

//               {/* Desktop Menu */}
//               <div className="hidden md:flex items-center gap-10">
//                 {navLinks.map((link) => (
//                   <Link 
//                     key={link.name} 
//                     to={link.path}
//                     className={`text-sm font-semibold transition-all relative group ${
//                       location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
//                     }`}
//                   >
//                     {link.name}
//                     <motion.span 
//                       className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 ${
//                         location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
//                       } transition-all duration-300`}
//                     />
//                   </Link>
//                 ))}
//               </div>

//               {/* Actions */}
//               <div className="flex items-center gap-6">
//                 <Link to="/create">
//                   <motion.button
//                     whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
//                     whileTap={{ scale: 0.95 }}
//                     className="hidden sm:block px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm"
//                   >
//                     Write Post
//                   </motion.button>
//                 </Link>

//                 {/* Mobile Toggle */}
//                 <button 
//                   className="md:hidden flex flex-col gap-1.5 z-[110]" 
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 >
//                   <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
//                   <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
//                   <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//                 </button>
//               </div>
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '100%' }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed inset-0 bg-[#050505] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-4xl font-bold text-white hover:text-purple-500 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link to="/create" onClick={() => setIsMobileMenuOpen(false)}>
//               <button className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold text-lg">
//                 Write Post
//               </button>
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navRef = useRef(null);
  const location = useLocation();

  // Scroll logic - ફક્ત બેકગ્રાઉન્ડ બદલવા માટે, હાઈડ કરવા માટે નહીં
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Entrance - આ પેજ લોડ થતા જ રન થશે
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );
    }
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trending', path: '/trending' },
    { name: 'Articles', path: '/articles' },
  ];

  return (
    <>
      {/* અહીંથી AnimatePresence અને {visible && ...} કાઢી નાખ્યું છે */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="group relative z-[110]">
            <span className="text-2xl font-black tracking-tighter text-white">
              SHASHANK<span className="text-purple-500 group-hover:text-pink-500 transition-colors">.</span>BLOG
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold transition-all relative group ${
                  location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-6">
            <Link to="/create">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm"
              >
                Write Post
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden flex flex-col gap-1.5 z-[110]" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 bg-[#050505] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;