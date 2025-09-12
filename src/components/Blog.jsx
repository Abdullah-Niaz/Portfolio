import React from 'react'

export default function Blog(){
  return (
    <section id="blog" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-300 mb-8">Blog / Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <div key={i} className="glass p-4 rounded-xl">
              <div className="h-36 bg-white/5 rounded mb-4 flex items-center justify-center">Image</div>
              <h4 className="font-semibold">Post Title {i}</h4>
              <p className="text-gray-300 mt-2 text-sm">Short excerpt about the post — why sessions matter, or lessons from DSA practice.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
