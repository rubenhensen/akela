import mongoose from 'mongoose';
import {IMemberPresence} from '../interfaces/IMemberPresence';
import {MemberSchema} from "./member";

export const PresenceSchema = new mongoose.Schema(
    {
        member: {
            type: MemberSchema,
            required: true
        },

        archived: Boolean,
        cancelled: Boolean,
        present: Boolean
    },
    {timestamps: true},
);

export const PresenceModel = mongoose.model <IMemberPresence & mongoose.Document>('Presence', PresenceSchema);
