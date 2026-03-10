import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding unique ID and Date before saving
    onSubmit({ 
      ...formData, 
      id: Date.now(), 
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto p-8 md:p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Title Input */}
        <div className="group">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-purple-500 transition-colors">
            Story Title
          </label>
          <input 
            type="text" name="title" required
            placeholder="Enter a catchy title..."
            onChange={handleChange}
            className="w-full bg-transparent text-3xl md:text-4xl font-black text-white outline-none border-b border-white/10 focus:border-purple-500 pb-4 transition-all placeholder:text-gray-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category Input */}
          <div className="group">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Category</label>
            <input 
              type="text" name="category" placeholder="e.g. Technology, Lifestyle"
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Image URL Input */}
          <div className="group">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Cover Image URL</label>
            <input 
              type="text" name="image" placeholder="https://unsplash.com/..."
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Short Description */}
        <div className="group">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Short Excerpt</label>
          <textarea 
            name="description" maxLength="150"
            placeholder="A brief summary to attract readers..."
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-24 text-gray-300 outline-none focus:border-purple-500 transition-all resize-none"
          />
        </div>

        {/* Main Content Area */}
        <div className="group">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">The Story</label>
          <textarea 
            name="content" required
            placeholder="Once upon a time in code..."
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 h-80 text-lg text-gray-300 outline-none focus:border-purple-500 transition-all"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 40px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-black text-xl tracking-tight shadow-xl transition-all"
        >
          PUBLISH ARTICLE
        </motion.button>

      </form>
    </motion.div>
  );
};

export default BlogForm;