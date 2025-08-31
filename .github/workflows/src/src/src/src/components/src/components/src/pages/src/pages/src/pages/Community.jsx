import { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'

function Community() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Riya", content: "Anyone has DT notes? Please share 🙏" },
    { id: 2, author: "Amit", content: "UPSC prep group meeting at 8PM today!" },
    { id: 3, author: "Neha", content: "Maths doubt: Integration by parts example needed." },
  ])

  const [newPost, setNewPost] = useState("")

  const handlePost = () => {
    if (newPost.trim() === "") return
    const newEntry = {
      id: posts.length + 1,
      author: "You",
      content: newPost
    }
    setPosts([newEntry, ...posts])
    setNewPost("")
  }

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          👥 Student Community
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Connect, ask doubts, and share knowledge with peers.
        </p>
      </div>

      {/* Post Input */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share something with the community..."
          className="flex-1 px-4 py-3 border rounded-xl dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handlePost}
          className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          <Send className="w-5 h-5" />
          Post
        </button>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">{post.author}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community
