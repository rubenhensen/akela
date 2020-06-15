import { Service, Inject } from "typedi";

@Service()
export default class UserService {
  constructor(
    @Inject("userModel") private userModel: Models.UserModel,
    @Inject("logger") private logger
  ) {}

  public async GetAllUsers(): Promise<{}> {
    try {
      const allUsers = await this.userModel.find({});

      return allUsers;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
