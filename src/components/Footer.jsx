// import React from 'react';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
//       {/* Background Glow Effect */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
//           {/* Brand Section */}
//           <div className="md:col-span-1">
//             <h2 className="text-2xl font-black text-white mb-4 tracking-tighter">
//               SHASHANK<span className="text-purple-500">.</span>BLOG
//             </h2>
//             <p className="text-gray-500 text-sm leading-relaxed">
//               A premium space for modern developers to share insights, stories, and the future of web technology.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-bold mb-6">Explore</h4>
//             <ul className="space-y-4 text-sm text-gray-500">
//               {['Home', 'Trending', 'Articles'].map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-purple-400 transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="text-white font-bold mb-6">Resources</h4>
//             <ul className="space-y-4 text-sm text-gray-500">
//               {['Documentation', 'Style Guide', 'UI Kit', 'Open Source'].map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-pink-400 transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter / Social */}
//           <div>
//             <h4 className="text-white font-bold mb-6">Stay Connected</h4>
//             <div className="flex gap-4">
//               {['GitHub', 'Twitter', 'LinkedIn'].map((platform) => (
//                 <motion.a
//                   key={platform}
//                   whileHover={{ y: -5 }}
//                   href="#"
//                   className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-300 hover:bg-white hover:text-black transition-all"
//                 >
//                   {platform}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-[12px] font-medium tracking-widest uppercase">
//           <p>© {currentYear} ALL RIGHTS RESERVED BY DEV.BLOG</p>
//           <div className="flex gap-8 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Navigation માટે જરૂરી

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/">
              <h2 className="text-2xl font-black text-white mb-4 tracking-tighter hover:text-purple-500 transition-colors cursor-pointer">
                SHASHANK<span className="text-purple-500">.</span>BLOG
              </h2>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              A premium space for modern developers to share insights, stories, and the future of web technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/trending" className="hover:text-purple-400 transition-colors">Trending</Link></li>
              <li><Link to="/articles" className="hover:text-purple-400 transition-colors">Articles</Link></li>
              <li><Link to="/create" className="hover:text-purple-400 transition-colors">Create Post</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Documentation', 'Style Guide', 'UI Kit', 'Open Source'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-pink-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Connected</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'Twitter', url: 'https://twitter.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' }
              ].map((platform) => (
                <motion.a
                  key={platform.name}
                  whileHover={{ y: -5 }}
                  href={platform.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-300 hover:bg-white hover:text-black transition-all"
                >
                  {platform.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-[12px] font-medium tracking-widest uppercase">
          <p>© {currentYear} ALL RIGHTS RESERVED BY SHASHANK.BLOG</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;