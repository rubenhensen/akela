import {Document, Model} from 'mongoose';
import {IUser} from '../../interfaces/IUser';
import {IMember} from "../../interfaces/IMember";
import {IMemberPresence} from "../../interfaces/IMemberPresence";

declare global {
    namespace Express {
        export interface Request {
            currentUser: IUser & Document;
        }
    }

    namespace Models {
        export type UserModel = Model<IUser & Document>;
        export type MemberModel = Model<IMember & Document>;
        export type PresenceModel = Model<IMemberPresence & Document>;
    }
}
