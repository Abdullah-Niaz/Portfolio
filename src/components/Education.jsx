import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  return (
    <section id="education" className="section bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} className="text-3xl font-bold text-cyan-300 mb-6">Education</motion.h2>
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-semibold">BSCS — University of Education Lahore</h3>
          <p className="text-gray-300 mt-2">7th Semester • Pakistan</p>
          <p className="text-gray-300 mt-2">Research interests: Machine Learning, Data Analysis, Web Development</p>
          <p className="text-gray-300 mt-2">Future Plan: Masters in USA (CS)</p>
        </div>
      </div>
    </section>
  )
}
