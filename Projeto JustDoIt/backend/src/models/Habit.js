import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: String,
    category: String,
    frequency: {
      type: { type: String, enum: ["daily", "weekly", "custom"], default: "daily" },
      daysOfWeek: [Number]
    },
    color: { type: String, default: "#6366f1" },
    isArchived: { type: Boolean, default: false },
    isPublic: { type: Boolean, default: false },
    currentStreak: { type: Number, default: 0 },
    bestStreak: { type: Number, default: 0 }
  },
  { timestamps: true } // cria createdAt/updatedAt automaticamente
);

habitSchema.index({ userId: 1, isArchived: 1 });

export default mongoose.model("Habit", habitSchema);