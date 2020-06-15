import mongoose from "mongoose";
import { Member } from "../interfaces/Member";

export const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a full name"],
      index: true,
    },

    role: {
      type: String,
      default: "Scout",
    },
  },
  { timestamps: true }
);

export const MemberModel = mongoose.model<Member & mongoose.Document>(
  "Member",
  MemberSchema
);
