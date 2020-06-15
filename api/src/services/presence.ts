import { Service, Inject } from "typedi";

@Service()
export default class PresenceService {
  constructor(
    @Inject("presenceModel") private presenceModel: Models.PresenceModel,
    @Inject("logger") private logger
  ) {}

  public async GetAllPresences(): Promise<{}> {
    try {
      const allPresences = await this.presenceModel.find({});
      this.logger.silly(`All presences found ${allPresences}`);
      return allPresences;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async CreatePresence(
    member: any,
    archived: boolean,
    cancelled: boolean,
    present: boolean
  ): Promise<{}> {
    try {
      const presenceRecord = this.presenceModel.create({
        member,
        archived,
        cancelled,
        present,
      });
      this.logger.silly(`Presence made: ${presenceRecord}`);
      return presenceRecord;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  // public async GetMember(memberId: any) {
  //     try {
  //         this.logger.silly(`Searching user with id: ${memberId}`);
  //         const user = await this.memberModel.findOne({_id: memberId});
  //         this.logger.silly(`User found ${user}`);
  //         return user;
  //     } catch (e) {
  //         this.logger.error(e);
  //         throw e;
  //     }
  // }
  //
  public async UpdatePresence(presenceId: any, presence: any) {
    try {
      this.logger.silly(`Searching user with id: ${presenceId}`);
      const presenceRecord = await this.presenceModel.findOneAndUpdate(
        { _id: presenceId },
        presence
      );
      this.logger.silly(`Presence updated ${presenceRecord}`);
      return presenceRecord;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  // public async RemoveMember(memberId: any) {
  //     try {
  //         this.logger.silly(`Searching user with id: ${memberId}`);
  //         const user = await this.memberModel.findOneAndRemove({_id: memberId});
  //         this.logger.silly(`User removed ${user}`);
  //         return user;
  //     } catch (e) {
  //         this.logger.error(e);
  //         throw e;
  //     }
  // }
}
