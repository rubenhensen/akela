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

  public async UpdateUser(
    id: string,
    name: string,
    email: string
  ): Promise<{}> {
    try {
      this.logger.silly(`Searching user with id: ${id}`);
      const user = await this.userModel.findOneAndUpdate(
        { _id: id },
        { name, email }
      );
      this.logger.silly(`User updated ${user}`);
      return user;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
