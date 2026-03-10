// import React from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Trending = () => {
//   const [blogs] = useLocalStorage("blogs", []);
  
//   // પહેલા 5 બ્લોગને ટ્રેન્ડિંગ માનીએ
//   const trendingPosts = blogs.slice(0, 5);

//   return (
//     <div className="min-h-screen bg-[#050505] text-white px-6 py-12">
//       <div className="max-w-4xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="flex items-center gap-4 mb-16"
//         >
//           <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25" />
//             </svg>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-black tracking-tighter">TRENDING <span className="text-gray-500">NOW</span></h1>
//         </motion.div>

//         <div className="space-y-12">
//           {trendingPosts.map((post, index) => (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               key={post.id}
//               className="group flex gap-8 items-start border-b border-white/5 pb-12 last:border-0"
//             >
//               <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-purple-500/20 transition-colors">
//                 0{index + 1}
//               </span>
//               <div className="flex-1">
//                 <span className="text-purple-500 text-xs font-bold uppercase tracking-widest">{post.category || "Technology"}</span>
//                 <Link to={`/blog/${post.id}`}>
//                   <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 group-hover:text-purple-400 transition-colors leading-tight">
//                     {post.title}
//                   </h2>
//                 </Link>
//                 <p className="text-gray-500 line-clamp-2 mb-4 max-w-xl">{post.description}</p>
//                 <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
//                   <span>{post.date || "March 2026"}</span>
//                   <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
//                   <span>5 MIN READ</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;

import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Trending = () => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);
  const navigate = useNavigate();
  
  // પહેલા 5 બ્લોગને ટ્રેન્ડિંગ માનીએ
  const trendingPosts = blogs.slice(0, 5);

  // --- Functions ---
  const handleDelete = (id) => {
    if (window.confirm("Delete this trending story?")) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      toast.error("Trending post removed! 🗑️");
    }
  };

  const handleEdit = (id) => {
    toast.info("Opening editor...");
    navigate(`/create?edit=${id}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Trending <span className="text-gray-500 italic font-light">Now</span>
          </h1>
        </motion.div>

        {/* Trending List */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {trendingPosts.length > 0 ? (
              trendingPosts.map((post, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  key={post.id}
                  className="group flex gap-6 md:gap-10 items-start border-b border-white/5 pb-16 last:border-0 relative"
                >
                  {/* Ranking Number */}
                  <span className="text-5xl md:text-8xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors leading-none">
                    0{index + 1}
                  </span>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-purple-500 text-xs font-bold uppercase tracking-[0.2em]">
                        {post.category || "Technology"}
                      </span>
                      
                      {/* Control Buttons */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* <button 
                          onClick={() => handleEdit(post.id)}
                          className="p-2 text-gray-500 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </button> */}
                        <button 
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-purple-400 transition-colors leading-tight tracking-tight">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-500 line-clamp-2 mb-6 max-w-2xl leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-600">
                      <span className="uppercase">{post.date || "March 2026"}</span>
                      <span className="w-1 h-1 bg-white/10 rounded-full"></span>
                      <span className="uppercase tracking-[0.3em]">5 MIN READ</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 border border-dashed border-white/5 rounded-3xl">
                <p className="text-gray-600 uppercase tracking-widest text-xs">No trending content found</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Trending;