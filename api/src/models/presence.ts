import mongoose from "mongoose";
import { MemberPresence } from "../interfaces/MemberPresence";
import { MemberSchema } from "./member";

export const PresenceSchema = new mongoose.Schema(
  {
    member: {
      type: MemberSchema,
      required: true,
    },

    archived: Boolean,
    cancelled: Boolean,
    present: Boolean,
  },
  { timestamps: true }
);

export const PresenceModel = mongoose.model<
  MemberPresence & mongoose.Document
>("Presence", PresenceSchema);
