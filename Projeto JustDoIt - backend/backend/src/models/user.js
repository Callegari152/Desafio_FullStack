import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // hash bcrypt
    avatarUrl: String,
    provider: { type: String, enum: ["local", "google"], default: "local" },
    providerId: String, // id do Google, se OAuth
    isEmailVerified: { type: Boolean, default: false },
    createdAt: Date,
    updatedAt: Date
  }
);

habitSchema.index({ userId: 1, isArchived: 1 });

export default mongoose.model("Habit", habitSchema);