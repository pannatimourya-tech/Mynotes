import { Link } from 'react-router-dom'
import { BookOpen, Users, Zap } from 'lucide-react'

function Home() {
  return (
    <div className="text-center space-y-16">
      
      {/* Hero Section */}
      <section className="py-20">
        <h1 className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Welcome to StudyGram 📚
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          A community-driven platform where students can share notes, study together, 
          and achieve success 🚀
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/notes" className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            Browse Notes
          </Link>
          <Link to="/community" className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
            Join Community
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
          <BookOpen className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Notes Sharing</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Upload and access study notes for different subjects, anytime, anywhere.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
          <Users className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Student Community</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with thousands of learners, share ideas, and study together.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
          <Zap className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Optimized for speed, built with modern tools like React & Tailwind.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
