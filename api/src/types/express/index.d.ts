import {Document, Model} from 'mongoose';
import {IUser} from '../../interfaces/IUser';
import {IMember} from "../../interfaces/IMember";

declare global {
    namespace Express {
        export interface Request {
            currentUser: IUser & Document;
        }
    }

    namespace Models {
        export type UserModel = Model<IUser & Document>;
        export type MemberModel = Model<IMember & Document>;
    }
}
