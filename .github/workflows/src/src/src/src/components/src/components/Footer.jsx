import { Link } from 'react-router-dom'
import { Github, Instagram, Youtube } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} StudyGram. All rights reserved.
        </p>

        {/* Quick Links */}
        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
          <Link to="/notes" className="hover:text-indigo-500 transition">Notes</Link>
          <Link to="/community" className="hover:text-indigo-500 transition">Community</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/bunny_goud_official" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@bunny_creations_22" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
