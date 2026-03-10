import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BlogForm from '../components/BlogForm';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const CreatePost = () => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);
  const navigate = useNavigate();
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP Page Entrance Animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
    );
  }, []);

  const handleAddPost = (newPost) => {
    // Adding the new post at the top of the array
    setBlogs([newPost, ...blogs]);
    
    // Redirecting to home after small delay for premium feel
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div ref={titleRef}>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 w-20 bg-purple-500 mb-4 origin-left"
            />
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Create <span className="text-gray-500 italic">Magic.</span>
            </h1>
            <p className="text-gray-500 mt-4 font-medium">
              Share your thoughts, tutorials, or stories with the community.
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            Cancel
          </button>
        </header>

        {/* The Blog Form Component */}
        <div className="relative">
          {/* Decorative Glow behind form */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl rounded-[4rem] -z-10" />
          
          <BlogForm onSubmit={handleAddPost} />
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-gray-700 text-xs font-medium uppercase tracking-[0.2em]">
          Your stories are saved locally on your device.
        </p>

      </div>
    </div>
  );
};

export default CreatePost;


// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import gsap from 'gsap';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';

// const CreatePost = () => {
//   const [blogs, setBlogs] = useLocalStorage("blogs", []);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const titleRef = useRef(null);
//   const editId = searchParams.get("edit");

//   // Form State - તમારી જૂની ડિઝાઇન મુજબનો ડેટા
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "Tech",
//     content: "",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//   });

//   // --- GSAP Entrance Animation ---
//   useEffect(() => {
//     gsap.fromTo(titleRef.current, 
//       { opacity: 0, x: -50 }, 
//       { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
//     );
//   }, []);

//   // --- Edit Mode Logic ---
//   useEffect(() => {
//     if (editId) {
//       const blogToEdit = blogs.find(b => b.id.toString() === editId.toString());
//       if (blogToEdit) {
//         setFormData({
//           title: blogToEdit.title,
//           description: blogToEdit.description,
//           category: blogToEdit.category || "Tech",
//           content: blogToEdit.content || "",
//           image: blogToEdit.image
//         });
//       }
//     }
//   }, [editId, blogs]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editId) {
//       const updatedBlogs = blogs.map(b => 
//         b.id.toString() === editId.toString() ? { ...b, ...formData } : b
//       );
//       setBlogs(updatedBlogs);
//       toast.success("Article updated successfully! ✨");
//     } else {
//       const newPost = {
//         id: Date.now().toString(),
//         ...formData,
//         date: new Date().toLocaleDateString()
//       };
//       setBlogs([newPost, ...blogs]);
//       toast.success("Magic published! 🚀");
//     }

//     setTimeout(() => {
//       navigate('/articles');
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
//       <div className="max-w-4xl mx-auto">
        
//         {/* --- Header Section (Same as your design) --- */}
//         <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
//           <div ref={titleRef}>
//             <motion.div 
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="h-1 w-20 bg-purple-500 mb-4 origin-left"
//             />
//             <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
//               {editId ? "Edit" : "Create"} <span className="text-gray-500 italic">Magic.</span>
//             </h1>
//             <p className="text-gray-500 mt-4 font-medium">
//               {editId ? "Refine your thoughts and update your story." : "Share your thoughts, tutorials, or stories with the community."}
//             </p>
//           </div>
          
//           <button 
//             onClick={() => navigate('/articles')}
//             className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2 group mb-2"
//           >
//             <span className="group-hover:-translate-x-1 transition-transform">←</span> 
//             Cancel
//           </button>
//         </header>

//         {/* --- Form Section (Premium Glow + Clean Inputs) --- */}
//         <div className="relative">
//           <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl rounded-[4rem] -z-10" />
          
//           <motion.form 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             onSubmit={handleSubmit} 
//             className="space-y-6"
//           >
//             <input 
//               type="text" placeholder="Title" required
//               value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
//               className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-gray-700"
//             />
            
//             <textarea 
//               placeholder="Short Description" required rows="2"
//               value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
//               className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-gray-700 resize-none"
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <select 
//                 value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-purple-500/50 text-white cursor-pointer appearance-none"
//               >
//                 <option value="Tech" className="bg-black">Tech</option>
//                 <option value="Design" className="bg-black">Design</option>
//                 <option value="AI" className="bg-black">AI</option>
//                 <option value="Life" className="bg-black">Life</option>
//               </select>
              
//               <input 
//                 type="text" placeholder="Image URL"
//                 value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-purple-500/50 text-white placeholder:text-gray-700"
//               />
//             </div>

//             <textarea 
//               placeholder="Main Content" required rows="10"
//               value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})}
//               className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-gray-700"
//             />

//             <button 
//               type="submit" 
//               className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-purple-600 hover:text-white transition-all transform active:scale-95 uppercase tracking-widest text-sm"
//             >
//               {editId ? "Save Changes" : "Publish Now"}
//             </button>
//           </motion.form>
//         </div>

//         {/* Footer Note */}
//         <p className="mt-12 text-center text-gray-800 text-[10px] font-black uppercase tracking-[0.3em]">
//           Local Storage Secured • React + GSAP
//         </p>

//       </div>
//     </div>
//   );
// };

// export default CreatePost;