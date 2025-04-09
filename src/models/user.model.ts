import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
  },
  { versionKey: false }
);

export const User = mongoose.model("Users", userSchema);
