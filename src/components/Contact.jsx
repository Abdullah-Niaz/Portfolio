import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="section bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Contact</h2>
        <div className="glass p-6 rounded-xl">
          <form onSubmit={(e)=>{e.preventDefault(); alert('Form submission simulated — integrate with backend or EmailJS')}} className="grid grid-cols-1 gap-4">
            <input required placeholder="Your name" className="px-4 py-3 rounded bg-transparent border border-white/6" />
            <input required type="email" placeholder="Your email" className="px-4 py-3 rounded bg-transparent border border-white/6" />
            <textarea required placeholder="Message" rows={5} className="px-4 py-3 rounded bg-transparent border border-white/6" />
            <motion.button whileTap={{scale:0.98}} className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold w-max">Send Message</motion.button>
          </form>

          <div className="mt-6 text-gray-300">
            <div>Email: <a href="mailto:abdullahniaz423@gmail.com" className="text-cyan-300">abdullahniaz423@gmail.com</a></div>
            <div className="mt-2">Location: Chak No 362/WB, Dunyapur, Lodhran, Punjab, Pakistan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
