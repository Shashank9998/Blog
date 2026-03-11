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

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navRef = useRef(null);
//   const location = useLocation();

//   // Scroll logic - ફક્ત બેકગ્રાઉન્ડ બદલવા માટે, હાઈડ કરવા માટે નહીં
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // GSAP Entrance - આ પેજ લોડ થતા જ રન થશે
//   useEffect(() => {
//     if (navRef.current) {
//       gsap.fromTo(navRef.current, 
//         { y: -100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
//       );
//     }
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Trending', path: '/trending' },
//     { name: 'Articles', path: '/articles' },
//   ];

//   return (
//     <>
//       {/* અહીંથી AnimatePresence અને {visible && ...} કાઢી નાખ્યું છે */}
//       <nav
//         ref={navRef}
//         className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
//           isScrolled 
//             ? "py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
//             : "py-6 bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

//           {/* Logo */}
//           <Link to="/" className="group relative z-[110]">
//             <span className="text-2xl font-black tracking-tighter text-white">
//               SHASHANK<span className="text-purple-500 group-hover:text-pink-500 transition-colors">.</span>BLOG
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-10">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 to={link.path}
//                 className={`text-sm font-semibold transition-all relative group ${
//                   location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 {link.name}
//                 <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${
//                   location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
//                 }`} />
//               </Link>
//             ))}
//           </div>

//           {/* Action Button */}
//           <div className="flex items-center gap-6">
//             <Link to="/create">
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="hidden sm:block px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm"
//               >
//                 Write Post
//               </motion.button>
//             </Link>

//             {/* Mobile Toggle */}
//             <button 
//               className="md:hidden flex flex-col gap-1.5 z-[110]" 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
//               <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
//               <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: '-100%' }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: '-100%' }}
//             transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
//             className="fixed inset-0 bg-[#050505] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-4xl font-bold text-white"
//               >
//                 {link.name}
//               </Link>
//             ))}
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
import { Search, PenSquare, X, Menu } from 'lucide-react'; // Using lucide for icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  // Scroll logic for background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
      );
    }
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trending', path: '/trending' },
    { name: 'Articles', path: '/articles' },
  ];

  // Mobile menu stagger variants
  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="group relative z-[110]">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              Shashank<span className="text-purple-500 group-hover:text-pink-500 transition-colors">.</span>Blog
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] uppercase tracking-widest font-bold transition-all relative group ${location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4 md:gap-8">


            {/* CTA Button */}
            <Link to="/create" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-black text-[12px] uppercase tracking-tighter"
              >
                <PenSquare size={16} />
                Write Post
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            {/* <button 
              className="lg:hidden flex flex-col gap-1.5 z-[110] p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-4 h-0.5 bg-white ml-auto transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button> */}
            <button
              className="lg:hidden flex flex-col gap-1.5 z-[120] p-2 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Top Line */}
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`} />

              {/* Middle Line */}
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 -translate-x-2" : ""
                }`} />

              {/* Bottom Line */}
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#080808] z-[105] flex flex-col items-center justify-center gap-10 lg:hidden px-10"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-4xl font-black uppercase tracking-tighter ${
                    location.pathname === link.path ? "text-purple-500" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={linkVariants} className="mt-4">
               <Link to="/create" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="px-10 py-4 rounded-full bg-purple-600 text-white font-bold text-lg">
                    Write Post
                  </button>
               </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#050505] z-[105] flex flex-col items-center justify-center lg:hidden px-10"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <motion.div key={link.name}>
                  <Link
                    to={link.path}
                    // ક્લિક કરવા પર મેનૂ બંધ થઈ જશે
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.path ? "text-purple-500" : "text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link to="/create" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="px-10 py-4 rounded-full bg-purple-600 text-white font-bold text-lg shadow-lg active:scale-95 transition-all">
                  Write Post
                </button>
              </Link>
            </div>

            {/* Close button text hint (Optional) */}
            {/* <div className="absolute bottom-10 text-gray-600 text-[10px] tracking-[0.5em] uppercase font-bold">
        Click outside or icon to close
      </div> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 flex flex-col items-center gap-3"
            >
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-40"
              />
              <span className="text-gray-500 text-[9px] tracking-[0.6em] uppercase font-medium">
                Swipe up to close
              </span>
            </motion.div> */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute bottom-12 group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <X size={16} /> 
              </div>
              <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                Close Menu
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;