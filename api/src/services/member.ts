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

            return allUsers;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
}
