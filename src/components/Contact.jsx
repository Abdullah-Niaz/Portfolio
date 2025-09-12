import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-6">Let’s work together or connect! 🚀</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"></textarea>
          <button className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-cyan-300">
            Send Message
          </button>
        </form>
        <div className="mt-6 flex justify-center gap-6">
          <a href="mailto:abdullah@example.com" className="hover:text-cyan-400">Email</a>
          <a href="https://linkedin.com" className="hover:text-cyan-400">LinkedIn</a>
          <a href="https://github.com/Abdullah-Niaz" className="hover:text-cyan-400">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
