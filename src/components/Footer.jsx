import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-12 bg-gradient-to-r from-black/70 to-black/90 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-animate flex items-center justify-center text-black font-bold">AN</div>
          <div className="text-gray-300">© {new Date().getFullYear()} Abdullah Niaz</div>
        </div>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/Abdullah-Niaz" className="social-hover"><FaGithub size={20} /></a>
          <a href="https://linkedin.com" className="social-hover"><FaLinkedin size={20} /></a>
          <a href="mailto:abdullah423@gmail.com" className="social-hover"><FaEnvelope size={20} /></a>
        </div>
      </div>
    </footer>
  )
}
