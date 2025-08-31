import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          📚 StudyGram
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
          <Link to="/notes" className="hover:text-indigo-500 transition">Notes</Link>
          <Link to="/community" className="hover:text-indigo-500 transition">Community</Link>
          <Link to="/profile" className="hover:text-indigo-500 transition">Profile</Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
