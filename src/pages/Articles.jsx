// import React, { useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import BlogCard from '../components/BlogCard';
// import { motion } from 'framer-motion';

// const Articles = () => {
//   const [blogs] = useLocalStorage("blogs", []);
//   const [search, setSearch] = useState("");

//   const filteredBlogs = blogs.filter(b => 
//     b.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#050505] px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with Search */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
//           <div>
//             <h1 className="text-5xl font-black text-white tracking-tighter">LATEST <span className="text-pink-500">ARTICLES</span></h1>
//             <p className="text-gray-500 mt-2">Browse through our entire collection of insights.</p>
//           </div>
          
//           <div className="relative group">
//             <input 
//               type="text" 
//               placeholder="Search topics..." 
//               onChange={(e) => setSearch(e.target.value)}
//               className="bg-white/5 border border-white/10 text-white pl-12 pr-6 py-4 rounded-2xl w-full md:w-96 outline-none focus:border-pink-500/50 transition-all"
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-pink-500 transition-colors">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//             </svg>
//           </div>
//         </div>

//         {/* Blog Grid */}
//         {filteredBlogs.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredBlogs.map((blog) => (
//               <BlogCard key={blog.id} post={blog} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-32">
//             <h3 className="text-gray-600 text-xl font-medium">No articles found matching your search.</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Articles;


// import React, { useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import BlogCard from '../components/BlogCard';
// import { motion, AnimatePresence } from 'framer-motion';

// const Articles = () => {
//   const [blogs] = useLocalStorage("blogs", []);
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = ["All", "Tech", "Design", "Development", "AI", "Life"];

//   // Search અને Category બંને મુજબ ફિલ્ટર થશે
//   const filteredBlogs = blogs.filter(b => {
//     const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory = activeCategory === "All" || b.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-[#050505] text-white px-6 py-12">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
//           >
//             THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">ARCHIVE</span>
//           </motion.h1>
//           <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
//             Explore our curated collection of technical deep-dives, design patterns, and developer stories.
//           </p>
//         </div>

//         {/* Search & Filter Bar */}
//         <div className="flex flex-col gap-8 mb-16">
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${
//                   activeCategory === cat 
//                   ? "bg-white text-black border-white" 
//                   : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="relative max-w-xl mx-auto w-full group">
//             <input 
//               type="text" 
//               placeholder="Search by title or keywords..." 
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-6 py-4 rounded-2xl outline-none focus:border-purple-500/50 transition-all text-sm"
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-purple-500 transition-colors">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//             </svg>
//           </div>
//         </div>

//         {/* Articles Count */}
//         <div className="mb-10 flex items-center gap-4">
//           <div className="h-[1px] flex-grow bg-white/10"></div>
//           <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">
//             Showing {filteredBlogs.length} results
//           </span>
//           <div className="h-[1px] flex-grow bg-white/10"></div>
//         </div>

//         {/* Blog Grid */}
//         <AnimatePresence mode="popLayout">
//           {filteredBlogs.length > 0 ? (
//             <motion.div 
//               layout
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
//             >
//               {filteredBlogs.map((blog) => (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   key={blog.id}
//                 >
//                   {/* અહીં તમારું BlogCard કમ્પોનન્ટ આવશે */}
//                   <BlogCard post={blog} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-32 border border-dashed border-white/10 rounded-3xl"
//             >
//               <h3 className="text-gray-600 text-xl font-medium tracking-tight">
//                 No matching articles found in <span className="text-white">"{activeCategory}"</span>
//               </h3>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Articles;


// import React, { useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import BlogCard from '../components/BlogCard';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Articles = () => {
//   const [blogs, setBlogs] = useLocalStorage("blogs", []);
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");
//   const navigate = useNavigate();

//   const categories = ["All", "Tech", "Design", "Development", "AI", "Life"];

//   // --- Functions ---

//   // Delete Function
//  const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       const updatedBlogs = blogs.filter(blog => blog.id !== id);
//       setBlogs(updatedBlogs);
      
//       // મસ્ત સક્સેસ મેસેજ
//       toast.success("Article deleted successfully! 🗑️");
//     }
//   };

//   const handleEdit = (id) => {
//     toast.info("Opening editor..."); // એડિટ વખતે ઇન્ફો મેસેજ
//     navigate(`/create?edit=${id}`);
//   };

//   const filteredBlogs = blogs.filter(b => {
//     const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory = activeCategory === "All" || b.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-[#050505] text-white px-6 py-12">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
//           >
//             THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">ARCHIVE</span>
//           </motion.h1>
//           <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
//             Manage your curated collection of technical deep-dives and stories.
//           </p>
//         </div>

//         {/* Search & Filter Bar */}
//         <div className="flex flex-col gap-8 mb-16">
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${
//                   activeCategory === cat 
//                   ? "bg-white text-black border-white" 
//                   : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="relative max-w-xl mx-auto w-full group">
//             <input 
//               type="text" 
//               placeholder="Search by title or keywords..." 
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-6 py-4 rounded-2xl outline-none focus:border-purple-500/50 transition-all text-sm"
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-purple-500 transition-colors">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//             </svg>
//           </div>
//         </div>

//         {/* Articles Count */}
//         <div className="mb-10 flex items-center gap-4">
//           <div className="h-[1px] flex-grow bg-white/10"></div>
//           <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">
//             Showing {filteredBlogs.length} results
//           </span>
//           <div className="h-[1px] flex-grow bg-white/10"></div>
//         </div>

//         {/* Blog Grid */}
//         <AnimatePresence mode="popLayout">
//           {filteredBlogs.length > 0 ? (
//             <motion.div 
//               layout
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
//             >
//               {filteredBlogs.map((blog) => (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   key={blog.id}
//                   className="relative group"
//                 >
//                   {/* Action Buttons Overlay */}
//                   <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <button 
//                       onClick={() => handleEdit(blog.id)}
//                       className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//                       </svg>
//                     </button>
//                     <button 
//                       onClick={() => handleDelete(blog.id)}
//                       className="p-2 bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                       </svg>
//                     </button>
//                   </div>

//                   <BlogCard post={blog} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-32 border border-dashed border-white/10 rounded-3xl"
//             >
//               <h3 className="text-gray-600 text-xl font-medium tracking-tight">
//                 No matching articles found in <span className="text-white">"{activeCategory}"</span>
//               </h3>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Articles;



import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BlogCard from '../components/BlogCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Articles = () => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Tech", "Design", "Development", "AI", "Life"];

  // --- Functions ---

  // Delete Function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      
      // મસ્ત સક્સેસ મેસેજ
      toast.success("Article deleted successfully! 🗑️");
    }
  };

  // Edit Function
  const handleEdit = (id) => {
    toast.info("Opening editor..."); 
    navigate(`/create?edit=${id}`);
  };

  // Search અને Category બંને મુજબ ફિલ્ટર લોજિક
  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">ARCHIVE</span>
          </motion.h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Manage your curated collection of technical deep-dives and stories.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${
                  activeCategory === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xl mx-auto w-full group">
            <input 
              type="text" 
              placeholder="Search by title or keywords..." 
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-6 py-4 rounded-2xl outline-none focus:border-purple-500/50 transition-all text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-purple-500 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* Articles Count Divider */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-[1px] flex-grow bg-white/10"></div>
          <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">
            Showing {filteredBlogs.length} results
          </span>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        {/* Blog Grid */}
        <AnimatePresence mode="popLayout">
          {filteredBlogs.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              {filteredBlogs.map((blog) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={blog.id}
                  className="relative group"
                >
                  {/* Action Buttons Overlay (Hover Effects) */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {/* <button 
                      onClick={() => handleEdit(blog.id)}
                      className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
                      title="Edit Post"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </button> */}
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="p-2.5 bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-lg"
                      title="Delete Post"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>

                  <BlogCard post={blog} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 border border-dashed border-white/10 rounded-3xl"
            >
              <h3 className="text-gray-600 text-xl font-medium tracking-tight">
                No matching articles found in <span className="text-white">"{activeCategory}"</span>
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Articles;