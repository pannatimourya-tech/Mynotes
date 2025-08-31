// backend/models/CommunityPost.js
import mongoose from "mongoose";

const communityPostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const CommunityPost = mongoose.model("CommunityPost", communityPostSchema);

export default CommunityPost;
