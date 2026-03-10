import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs] = useLocalStorage("blogs", []);
  const [blog, setBlog] = useState(null);

  // Framer Motion Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const foundBlog = blogs.find(b => b.id === parseInt(id));
    setBlog(foundBlog);

    // GSAP Content Animation
    if (foundBlog) {
      gsap.from(".content-section", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });
    }
  }, [id, blogs]);

  if (!blog) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
      <h2 className="text-2xl font-bold">Post Not Found</h2>
      <button onClick={() => navigate('/')} className="ml-4 text-purple-500 underline">Go Home</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-purple-500/30">
      {/* 1. Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 z-[101] origin-left"
        style={{ scaleX }}
      />

      {/* 2. Hero Header with Image */}
      <header className="relative w-full h-[70vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={blog.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-20 px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-purple-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6"
          >
            {blog.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-white max-w-5xl leading-tight tracking-tighter"
          >
            {blog.title}
          </motion.h1>
          <div className="mt-8 flex items-center gap-4 text-gray-400 font-medium">
            <span>By Admin</span>
            <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
            <span>{blog.date}</span>
          </div>
        </div>
      </header>

      {/* 3. Main Content Section */}
      <article className="max-w-3xl mx-auto px-6 py-20 content-section">
        <div className="flex flex-col gap-8">
          {/* Summary/Excerpt */}
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed italic border-l-4 border-purple-500 pl-8 mb-8">
            {blog.description}
          </p>

          {/* Body Content */}
          <div className="text-lg md:text-xl text-gray-400 leading-[1.8] space-y-8 whitespace-pre-wrap">
            {blog.content}
          </div>

          {/* Footer of the Blog */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold"
            >
              ← Back to Stories
            </button>
            <div className="flex gap-4">
              <span className="text-sm text-gray-600">Share this:</span>
              <button className="text-purple-400 hover:text-white transition-colors">Twitter</button>
              <button className="text-purple-400 hover:text-white transition-colors">LinkedIn</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;