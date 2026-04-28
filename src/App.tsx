/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Monitor, Share2, Users, Layout } from 'lucide-react';

export default function App() {
  const videoId = "CFcD84YCZrs";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`;

  return (
    <div className="relative w-full h-screen bg-[#020617] flex flex-col items-center justify-center overflow-hidden font-sans select-none">
      
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[150px]"
        />
      </div>

      {/* Main Presentation Layout */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        
        {/* Left Side Panel - Tech Pulse */}
        <div className="hidden lg:flex w-1/5 h-full bg-white/5 backdrop-blur-2xl border-r border-white/10 flex-col items-center justify-between py-12 px-6 overflow-hidden relative">
          <div className="relative z-10 space-y-10 flex flex-col items-center w-full">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <Layout className="text-white w-8 h-8" />
            </motion.div>
            <div className="space-y-2 text-center">
              <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Counselling</h2>
              <p className="text-white font-bold text-lg leading-tight">Digital Core<br/><span className="text-blue-200/60 font-medium text-sm">Hub Presentation</span></p>
            </div>
          </div>

          <div className="w-full space-y-6 relative">
            {[...Array(4)].map((_, i) => (
              <div key={`pulse-${i}`} className="relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent">
                <motion.div 
                  animate={{ left: ["-10%", "110%"] }}
                  transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-blue-400 shadow-[0_0_10px_#60A5FA]"
                />
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center">
             <div className="px-5 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
               Enterprise Grade
             </div>
          </div>
        </div>

        {/* Center Presentation Area */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="h-24 px-12 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping absolute" />
                <div className="relative w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_#3B82F6]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight">Main Presentation Canvas</span>
                <span className="text-blue-400/60 text-xs font-semibold uppercase tracking-widest">Session ID: 882-991-002</span>
              </div>
            </div>
            
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 text-white">
                  <Users size={18} className="text-blue-500" />
                  <span className="text-sm font-bold">2.4k Engaged</span>
                </div>
                <span className="text-[10px] text-blue-400/50 uppercase font-bold tracking-tighter">Live Global Stream</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all border border-blue-400/20 group">
                <Share2 size={16} className="text-white group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Expand View</span>
              </button>
            </div>
          </div>

          {/* Animated Video Frame */}
          <div className="flex-1 p-8 md:p-12 lg:p-20 flex items-center justify-center relative">
            {/* Background frame shadows */}
            <div className="absolute inset-x-20 inset-y-32 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative w-full aspect-video bg-black rounded-[40px] shadow-[0_0_80px_-20px_rgba(37,99,235,0.4)] overflow-hidden border-[16px] border-white/10 group"
            >
              <iframe
                className="w-full h-full"
                src={youtubeUrl}
                title="Google Meet Interactive View"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Corner Tech Accents */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-blue-500/50 rounded-tl-xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl" />
            </motion.div>
          </div>

          {/* Footer Bar */}
          <div className="h-20 flex items-center justify-between px-16 bg-transparent">
             <div className="flex items-center gap-4 text-blue-400/30 text-[10px] font-black uppercase tracking-[1em]">
                System Analytics
             </div>
             <div className="flex gap-2">
               {[...Array(3)].map((_, i) => (
                 <div key={`dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
               ))}
             </div>
          </div>
        </div>

        {/* Right Side Panel - UI Visualizers */}
        <div className="hidden lg:flex w-1/5 h-full bg-white/5 backdrop-blur-2xl border-l border-white/10 flex-col items-center justify-between py-12 px-6 overflow-hidden">
          <div className="space-y-16 w-full">
            <div className="flex flex-col items-center text-center space-y-4">
               <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full border border-dashed border-blue-500/40"
                  />
                  <Monitor className="text-blue-500 w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               </div>
               <div className="space-y-1">
                 <p className="text-xs text-white font-bold uppercase tracking-widest">Global Sync</p>
                 <p className="text-[10px] text-blue-400 font-medium">Optimal Performance</p>
               </div>
            </div>
            
            <div className="space-y-10">
              {[...Array(3)].map((_, i) => (
                <div key={`stat-group-${i}`} className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-black text-blue-400/60 uppercase">
                    <span>{['Visual Latency', 'Packet Flow', 'Data Buffer'][i]}</span>
                    <span className="text-white">Active</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${70 + (i * 10)}%` }}
                      transition={{ duration: 2, delay: i * 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_#3B82F6]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center group cursor-default">
            <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.5em] group-hover:text-blue-500/50 transition-colors">Future Core</p>
          </div>
        </div>

      </div>

      {/* Presenter Feedback HUD */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-6">
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#10B981]" />
             <span className="text-white/60 text-xs font-bold uppercase tracking-tighter">HD Stream</span>
           </div>
           <div className="h-4 w-px bg-white/10" />
           <span className="text-blue-400 text-xs font-black uppercase tracking-widest">Ready for Share</span>
        </div>
      </motion.div>

    </div>
  );
}

