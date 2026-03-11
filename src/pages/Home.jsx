// import React, { useEffect, useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import BlogCard from '../components/BlogCard';
// import Loader from '../components/Loader';
// import gsap from 'gsap';
// import { motion } from 'framer-motion';

// const Home = () => {
//   const [blogs] = useLocalStorage("blogs", []);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fake loading delay for showing the cool loader
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       // GSAP Stagger Animation for Blog Cards
//       gsap.fromTo(".blog-card-wrapper", 
//         { opacity: 0, y: 50 },
//         { 
//           opacity: 1, 
//           y: 0, 
//           stagger: 0.15, 
//           duration: 0.8, 
//           ease: "power4.out",
//           delay: 0.2 
//         }
//       );
//     }
//   }, [loading, blogs]);

//   if (loading) return <Loader />;

//   return (
//     <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 md:px-16 overflow-hidden">
//       {/* Background Decorative Circles */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Hero Section */}
//         <header className="mb-20 text-center md:text-left">
//           <motion.span 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
//           >
//             Welcome to the future of writing
//           </motion.span>
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6"
//           >
//             Insights <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Innovations.</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="max-w-2xl text-gray-500 text-lg md:text-xl leading-relaxed"
//           >
//             Explore the latest trends in technology, design, and software development through the eyes of experts.
//           </motion.p>
//         </header>

//         {/* Blog Grid */}
//         {blogs.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {blogs.map((blog) => (
//               <div key={blog.id} className="blog-card-wrapper">
//                 <BlogCard post={blog} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex flex-col items-center justify-center py-40 border border-dashed border-white/10 rounded-[3rem]"
//           >
//             <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-600">
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
//               </svg>
//             </div>
//             <h3 className="text-white text-xl font-bold mb-2">No stories yet</h3>
//             <p className="text-gray-500 mb-8 text-center">Be the first one to share your knowledge with the world.</p>
//             <button className="px-8 py-3 bg-white text-black font-black rounded-full hover:scale-110 transition-transform">
//               Start Writing
//             </button>
//           </motion.div>
//         )}

//       </div>
//     </main>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import BlogCard from '../components/BlogCard';
// import Loader from '../components/Loader';
// import gsap from 'gsap';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Home = () => {
//   const [blogs, setBlogs] = useLocalStorage("blogs", []);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       gsap.fromTo(".blog-card-wrapper", 
//         { opacity: 0, y: 50 },
//         { 
//           opacity: 1, 
//           y: 0, 
//           stagger: 0.15, 
//           duration: 0.8, 
//           ease: "power4.out",
//           delay: 0.2 
//         }
//       );
//     }
//   }, [loading, blogs]);

//   // --- Functions ---
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this story?")) {
//       const updatedBlogs = blogs.filter(blog => blog.id !== id);
//       setBlogs(updatedBlogs);
//       toast.error("Story removed! 🗑️");
//     }
//   };

//   const handleEdit = (id) => {
//     toast.info("Loading editor...");
//     navigate(`/create?edit=${id}`);
//   };

//   if (loading) return <Loader />;

//   return (
//     <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 md:px-16 overflow-hidden relative">
//       {/* Background Decorative Circles */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Hero Section */}
//         <header className="mb-20 text-center md:text-left">
//           <motion.span 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
//           >
//             Welcome to the future of writing
//           </motion.span>
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6"
//           >
//             Insights <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Innovations.</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="max-w-2xl text-gray-500 text-lg md:text-xl leading-relaxed"
//           >
//             Explore the latest trends in technology, design, and software development through the eyes of experts.
//           </motion.p>
//         </header>

//         {/* Blog Grid */}
//         <AnimatePresence mode="popLayout">
//           {blogs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {blogs.map((blog) => (
//                 <motion.div 
//                   layout
//                   key={blog.id} 
//                   className="blog-card-wrapper relative group"
//                 >
//                   {/* Action Buttons */}
//                   <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     {/* <button 
//                       onClick={() => handleEdit(blog.id)}
//                       className="p-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white hover:text-black transition-all shadow-xl"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//                       </svg>
//                     </button> */}
//                     <button 
//                       onClick={() => handleDelete(blog.id)}
//                       className="p-2.5 bg-red-500/10 backdrop-blur-xl border border-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-xl"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                       </svg>
//                     </button>
//                   </div>

//                   <BlogCard post={blog} />
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             /* Empty State */
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="flex flex-col items-center justify-center py-40 border border-dashed border-white/10 rounded-[3rem]"
//             >
//               <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-600">
//                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
//                 </svg>
//               </div>
//               <h3 className="text-white text-xl font-bold mb-2">No stories yet</h3>
//               <p className="text-gray-500 mb-8 text-center">Be the first one to share your knowledge with the world.</p>
//               <button 
//                 onClick={() => navigate('/create')}
//                 className="px-8 py-3 bg-white text-black font-black rounded-full hover:scale-110 transition-transform"
//               >
//                 Start Writing
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </main>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(".blog-card-wrapper", 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 0.8, 
          ease: "power4.out",
          delay: 0.2 
        }
      );
    }
  }, [loading, blogs]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      toast.error("Story removed! 🗑️");
    }
  };

  if (loading) return <Loader />;

  return (
    /* FIXED: Changed pt-32 to relative and added a background layer that fills the top */
    <main className="min-h-screen bg-[#050505] relative overflow-hidden">
      
      {/* BACKGROUND LAYER: Ensures gradients start from the very top (0px) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* CONTENT LAYER: Keep your padding here for the text, but the background is now outside */}
      <div className="max-w-7xl mx-auto relative z-10 pt-32 pb-20 px-6 md:px-16">
        
        {/* Hero Section */}
        <header className="mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Welcome to the future of writing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6"
          >
            Insights <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Innovations.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-gray-500 text-lg md:text-xl leading-relaxed"
          >
            Explore the latest trends in technology, design, and software development through the eyes of experts.
          </motion.p>
        </header>

        {/* Blog Grid */}
        <AnimatePresence mode="popLayout">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <motion.div 
                  layout
                  key={blog.id} 
                  className="blog-card-wrapper relative group"
                >
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="p-2.5 bg-red-500/10 backdrop-blur-xl border border-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-xl"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <BlogCard post={blog} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-40 border border-dashed border-white/10 rounded-[3rem]"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-600">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">No stories yet</h3>
              <p className="text-gray-500 mb-8 text-center">Be the first one to share your knowledge with the world.</p>
              <button 
                onClick={() => navigate('/create')}
                className="px-8 py-3 bg-white text-black font-black rounded-full hover:scale-110 transition-transform"
              >
                Start Writing
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Home;