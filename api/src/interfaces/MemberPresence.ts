import { Member } from "./Member";

export interface MemberPresence {
  _id: string;
  member: Member;
  archived: string;
  cancelled: string;
  present: string;
}
