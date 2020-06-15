import { Document, Model } from "mongoose";
import { User } from "../../interfaces/User";
import { Member } from "../../interfaces/Member";
import { MemberPresence } from "../../interfaces/MemberPresence";

declare global {
  namespace Express {
    export interface Request {
      currentUser: User & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<User & Document>;
    export type MemberModel = Model<Member & Document>;
    export type PresenceModel = Model<MemberPresence & Document>;
  }
}
