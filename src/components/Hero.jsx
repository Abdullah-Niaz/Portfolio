import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBg from './HeroParticles'

export default function Hero(){
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center px-6">
      <ParticlesBg />

      <div className="absolute inset-0 gradient-animate opacity-20 -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8}} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">
          Hi, I&rsquo;m Abdullah Niaz <span className="inline-block">👋</span>
        </motion.h1>

        <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="mt-6 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
          Building impactful software solutions, solving complex problems, and preparing for advanced research in Computer Science.
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="/Portfolio/resume/Abdullah_Niaz_Resume.pdf" download  className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg btn-neon">Download Resume</a>
          <a href="#projects" className="px-6 py-3 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg hover:scale-105 transition">View My Work</a>
          <a href="#contact" className="px-6 py-3 rounded-xl glass text-white border border-white/6">Contact Me</a>
        </motion.div>

        <div className="mt-12 text-sm text-gray-400">Based in Pakistan • Open to Masters programs in the USA & job opportunities</div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">Scroll ↓</div>
    </section>
  )
}