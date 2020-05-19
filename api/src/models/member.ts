import mongoose from 'mongoose';
import {IMember} from '../interfaces/IMember';

const Member = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a full name'],
            index: true,
        },

        role: {
            type: String,
            default: 'Scout',
        },
    },
    {timestamps: true},
);

export default mongoose.model <IMember & mongoose.Document>('Member', Member);
