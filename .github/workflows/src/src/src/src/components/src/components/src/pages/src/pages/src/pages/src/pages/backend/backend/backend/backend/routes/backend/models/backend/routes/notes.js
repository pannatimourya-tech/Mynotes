// backend/routes/notes.js
import express from "express";
import Note from "../models/Note.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔹 Create a Note
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Note({
      user: req.user.id,
      title,
      content,
    });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get User Notes
router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Delete Note
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    if (note.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await note.deleteOne();
    res.json({ message: "✅ Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
