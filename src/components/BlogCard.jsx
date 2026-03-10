import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  // Handle click to go to details page
  const handleCardClick = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={handleCardClick}
      className="group relative bg-[#121212] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 hover:border-purple-500/50"
    >
      {/* 1. Image Section with Zoom Effect */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          src={post.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-5 left-5 px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
            {post.category || "Insight"}
          </span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4 text-gray-500 text-xs font-medium">
          <span>{post.date || "Today"}</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span>5 min read</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
          {post.description}
        </p>

        {/* 3. Footer of Card */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20" />
            <span className="text-sm font-semibold text-gray-300">Admin</span>
          </div>
          
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Glow on Hover */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// આ લાઈન ખાસ ચેક કરજો, આનાથી જ error સોલ્વ થશે 👇
export default BlogCard;