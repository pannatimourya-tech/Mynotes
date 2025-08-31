import { BookOpen, FileText, User } from 'lucide-react'

function Profile() {
  const user = {
    name: "Rahul Sharma",
    email: "rahulsharma@example.com",
    bio: "B.Tech Student • UPSC Aspirant • Loves Night Study 🌙",
    notes: [
      { id: 1, title: "GCF - Operating System Notes" },
      { id: 2, title: "EEE - Digital Circuits" }
    ],
    posts: [
      { id: 1, content: "Does anyone have the DT syllabus PDF?" },
      { id: 2, content: "Sharing my CTSD handwritten notes soon!" }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-10">

      {/* Profile Header */}
      <div className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
        <User className="w-16 h-16 text-indigo-500" />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{user.bio}</p>
        </div>
      </div>

      {/* Notes Section */}
      <div>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-indigo-500" />
          My Notes
        </h3>
        <div className="space-y-2">
          {user.notes.map(note => (
            <div key={note.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {note.title}
            </div>
          ))}
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          My Posts
        </h3>
        <div className="space-y-2">
          {user.posts.map(post => (
            <div key={post.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {post.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
