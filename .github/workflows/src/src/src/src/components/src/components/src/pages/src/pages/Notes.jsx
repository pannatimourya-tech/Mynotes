import { useState } from 'react'
import { Upload, FileText } from 'lucide-react'

function Notes() {
  const [notes] = useState([
    { id: 1, title: "Maths - Calculus Basics", subject: "Mathematics", author: "Rahul" },
    { id: 2, title: "CTSD - Compiler Notes", subject: "CS", author: "Anjali" },
    { id: 3, title: "EEE - Circuits Guide", subject: "Electrical", author: "Vikram" },
  ])

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          📑 Study Notes
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Browse notes uploaded by students or share your own.
        </p>
      </div>

      {/* Upload Section */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
          <Upload className="w-5 h-5" />
          Upload Notes
        </button>
      </div>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map(note => (
          <div key={note.id} className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <FileText className="w-8 h-8 text-indigo-500 mb-3" />
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Subject: {note.subject}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">By: {note.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes
