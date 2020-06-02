import {IMember} from "./IMember";

export interface IMemberPresence {
    _id: string;
    member: IMember;
    archived: string;
    cancelled: string;
    present: string;
}
