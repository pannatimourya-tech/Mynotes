import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-gray-100 min-h-screen flex flex-col' : 'bg-gray-50 text-gray-900 min-h-screen flex flex-col'}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Page Content */}
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
