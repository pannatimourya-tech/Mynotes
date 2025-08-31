// backend/routes/community.js
import express from "express";
import CommunityPost from "../models/CommunityPost.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔹 Create Post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new CommunityPost({
      user: req.user.id,
      title,
      content,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await CommunityPost.find().populate("user", "name email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Delete Post
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await post.deleteOne();
    res.json({ message: "✅ Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
