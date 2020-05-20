import {Service, Inject} from 'typedi';

@Service()
export default class MemberService {
    constructor(
        @Inject('memberModel') private memberModel: Models.MemberModel,
        @Inject('logger') private logger
    ) {
    }

    public async GetAllMembers(): Promise<{}> {
        try {
            const allUsers = await this.memberModel.find({});
            this.logger.silly(`All users to found ${allUsers}`);
            return allUsers;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    public async CreateMember(name: any, role: any): Promise<{}> {
        try {
            const memberRecord = this.memberModel.create({
                name,
                role
            });
            this.logger.silly(`User made: ${memberRecord}`);
            return memberRecord;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    public async GetMember(memberId: any) {
        try {
            this.logger.silly(`Searching user with id: ${memberId}`);
            const user = await this.memberModel.findOne({_id: memberId});
            this.logger.silly(`User found ${user}`);
            return user;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    public async UpdateMember(memberId: any, name: any, role: any) {
        try {
            this.logger.silly(`Searching user with id: ${memberId}`);
            const user = await this.memberModel.findOneAndUpdate({_id: memberId}, {name, role});
            this.logger.silly(`User updated ${user}`);
            return user;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    public async RemoveMember(memberId: any) {
        try {
            this.logger.silly(`Searching user with id: ${memberId}`);
            const user = await this.memberModel.findOneAndRemove({_id: memberId});
            this.logger.silly(`User removed ${user}`);
            return user;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
}
