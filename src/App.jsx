// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App


// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// // import { AnimatePresence } from 'framer-motion';

// // // Components
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import Loader from './components/Loader';

// // // Pages
// // import Home from './pages/Home';
// // import CreatePost from './pages/CreatePost';
// // import BlogDetails from './pages/BlogDetails';
// // // import Trending from './pages/Trending';
// // // import Articles from './pages/Articles';

// // // Wrapper to handle Page Transitions
// // const AnimatedRoutes = () => {
// //   const location = useLocation();

// //   return (
// //     <AnimatePresence mode="wait">
// //       <Routes location={location} key={location.pathname}>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/create" element={<CreatePost />} />
// //         <Route path="/blog/:id" element={<BlogDetails />} />
// //         {/* <Route path="/trending" element={<Trending />} />
// //         <Route path="/articles" element={<Articles />} /> */}
// //         {/* 404 Fallback */}
// //         <Route path="*" element={<Home />} />
// //       </Routes>
// //     </AnimatePresence>
// //   );
// // };

// // function App() {
// //   const [initialLoading, setInitialLoading] = useState(true);

// //   useEffect(() => {
// //     // Initial App Load Effect
// //     const timer = setTimeout(() => {
// //       setInitialLoading(false);
// //     }, 2000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (initialLoading) {
// //     return <Loader />;
// //   }

// //   return (
// //     <div className="bg-[#050505] min-h-screen font-sans selection:bg-purple-500/30 selection:text-white">
// //       <Router>
// //         <Navbar />

// //         {/* Main Content Area */}
// //         <div className="pt-0">
// //           <AnimatedRoutes />
// //         </div>

// //         <Footer />
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

// // Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Loader from './components/Loader';

// // Pages
// import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
// import BlogDetails from './pages/BlogDetails';
// import Trending from './pages/Trending'; // નવું પેજ ઈમ્પોર્ટ કર્યું
// import Articles from './pages/Articles'; // નવું પેજ ઈમ્પોર્ટ કર્યું

// // Wrapper to handle Page Transitions (સ્મૂથ પેજ બદલવા માટે)
// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<CreatePost />} />
//         <Route path="/blog/:id" element={<BlogDetails />} />
//         <Route path="/trending" element={<Trending />} />
//         <Route path="/articles" element={<Articles />} />
        
//         {/* 404 Fallback - જો કોઈ ખોટો પાથ નાખે તો Home પર જશે */}
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// function App() {
//   const [initialLoading, setInitialLoading] = useState(true);

//   useEffect(() => {
//     // પેજ લોડ થાય ત્યારે 2 સેકન્ડ માટે લોડર બતાવશે
//     const timer = setTimeout(() => {
//       setInitialLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (initialLoading) {
//     return <Loader />;
//   }

//   return (
//     <div className="bg-[#050505] min-h-screen font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
//       <Router>
//         {/* Navbar હંમેશા ઉપર રહેશે */}
//         <Navbar />
        
//         {/* Main Content Area: 
//            Navbar ફિક્સ હોવાથી કન્ટેન્ટ પાછળ ન દબાઈ જાય એટલે 
//            અહીં 'pt-24' (Padding Top) આપેલું છે.
//         */}
//         <div className="pt-24 md:pt-32"> 
//           <AnimatedRoutes />
//         </div>

//         {/* Footer નીચે આવશે */}
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';

// // Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Loader from './components/Loader';

// // Pages
// import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
// import BlogDetails from './pages/BlogDetails';
// import Trending from './pages/Trending';
// import Articles from './pages/Articles';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Wrapper for Routes
// const AnimatedRoutes = () => {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<CreatePost />} />
//         <Route path="/blog/:id" element={<BlogDetails />} />
//         <Route path="/trending" element={<Trending />} />
//         <Route path="/articles" element={<Articles />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// function App() {
//   const [initialLoading, setInitialLoading] = useState(true);

//   useEffect(() => {
//     // 2 સેકન્ડ પછી લોડર હટાવી દેવો
//     const timer = setTimeout(() => {
//       setInitialLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="bg-[#050505] min-h-screen font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      
//       {/* 1. Loader Overlay - આ હંમેશા ટોપ પર રહેશે જ્યાં સુધી લોડિંગ છે */}
//       <AnimatePresence>
//         {initialLoading && (
//           <motion.div 
//             key="loader-layer"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 z-[999] bg-[#050505]"
//           >
//             <Loader />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 2. Main App Structure - આ એક જ વાર લોડ થશે, એટલે ગ્લિચ નહીં થાય */}
//       <Router>
//         <div className={`transition-opacity duration-1000 ${initialLoading ? "opacity-0" : "opacity-1"}`}>
//           <Navbar />
//           <ToastContainer 
//         position="top-center" 
//         autoClose={3000} 
//         theme="dark" 
//       />
//           <main className="pt-24 md:pt-32"> 
//             <AnimatedRoutes />
//           </main>

//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import BlogDetails from './pages/BlogDetails';
import Trending from './pages/Trending';
import Articles from './pages/Articles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  // 1. લોડર ટાઈમર
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. પેજ રીફ્રેશ ડિટેક્ટ કરવાનું લોજિક
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
      window.location.replace('/'); // આ સીધું જ હોમ પેજ પર રીડાયરેક્ટ કરશે
    }
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      
      <AnimatePresence>
        {initialLoading && (
          <motion.div 
            key="loader-layer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-[#050505]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <Router>
        <div className={`transition-opacity duration-1000 ${initialLoading ? "opacity-0" : "opacity-1"}`}>
          <Navbar />
          <ToastContainer 
            position="top-center" 
            autoClose={3000} 
            theme="dark" 
          />
          <main className="pt-24 md:pt-32"> 
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;