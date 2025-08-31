// frontend/src/pages/Community.jsx
import React, { useState } from "react";

function Community() {
  const [messages, setMessages] = useState([
    { user: "Admin", text: "Welcome to the community 🎉" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { user: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">💬 Community Chat</h2>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow h-64 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <p key={i} className="mb-2">
            <span className="font-bold">{msg.user}:</span> {msg.text}
          </p>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l"
        />
        <button
          type="submit"
          className="px-4 bg-green-600 text-white rounded-r hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Community;
