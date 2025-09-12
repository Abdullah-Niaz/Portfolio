import React, {useState, useEffect} from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  {id:'home', label:'Home'},
  {id:'about', label:'About'},
  {id:'projects', label:'Projects'},
  {id:'skills', label:'Skills'},
  {id:'achievements', label:'Achievements'},
  {id:'education', label:'Education'},
  {id:'contact', label:'Contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll=()=> setScrolled(window.scrollY>20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full z-50 transition ${scrolled? 'backdrop-blur bg-black/30 border-b border-white/6' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-animate flex items-center justify-center text-black font-bold">AN</div>
          <div>
            <div className="text-white font-semibold">Abdullah Niaz</div>
            <div className="text-xs text-gray-300">Software Engineer</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l=> (
            <a key={l.id} href={`#${l.id}`} className="text-gray-300 hover:text-white transition underline-offset-4 hover:underline">{l.label}</a>
          ))}
          <a href="/resume.pdf" className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">Resume</a>
        </nav>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2 bg-white/5 rounded">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur border-t border-white/5">
          <div className="flex flex-col gap-3 p-4">
            {links.map(l=> (
              <a key={l.id} href={`#${l.id}`} onClick={()=>setOpen(false)} className="text-gray-300 py-2">{l.label}</a>
            ))}
            <a href="/resume.pdf" className="mt-2 px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold w-max">Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}