import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section bg-transparent">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{x:-30, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} className="flex justify-center">
          <div className="w-64 h-64 rounded-full p-1 gradient-animate">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-black/40 to-black/25 flex items-center justify-center glass">
              {/* replace with your image */}
              <span className="text-4xl font-bold">AN</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{x:30, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} className="text-gray-200">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">About Me</h2>
          <p className="leading-relaxed mb-4">I am a BSCS student currently in the 7th semester in Pakistan. I enjoy building software solutions and diving into algorithms — I maintained a 250+ day LeetCode streak and have hands-on experience with web development, data analysis, and machine learning.</p>
          <p className="leading-relaxed">My goal is to pursue a Masters in the USA to combine research and practical development, focusing on ML and data-driven systems.</p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">See Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-lg glass border border-white/6">Say Hello</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}