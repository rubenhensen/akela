import { Router, Request, Response } from "express";
import middlewares from "../middlewares";
import { Container } from "typedi";
import AuthService from "../../services/auth";
import MemberService from "../../services/member";
import LoggerInstance from "../../loaders/logger";
import UserService from "../../services/user";
//import {MemberModel} from "../../models/member";

const route = Router();

export default (app: Router) => {
  app.use("/members", route);

  route.get("", middlewares.isAuth, (req: Request, res: Response) => {
    const memberServiceInstance = Container.get(MemberService);
    memberServiceInstance
      .GetAllMembers()
      .then((members) => res.json(members).status(200));
  });

  route.get(
    "/:memberId",
    middlewares.isAuth,
    async (req: Request, res: Response) => {
      const { memberId } = req.params;
      const memberServiceInstance = Container.get(MemberService);
      memberServiceInstance
        .GetMember(memberId)
        .then((member) => res.json(member).status(200));
    }
  );

  route.put(
    "/:memberId",
    middlewares.isAuth,
    async (req: Request, res: Response) => {
      const { memberId } = req.params;
      const { name, role } = req.body;
      const memberServiceInstance = Container.get(MemberService);
      memberServiceInstance
        .UpdateMember(memberId, name, role)
        .then((member) => res.json(member).status(200));
    }
  );

  route.delete(
    "/:memberId",
    middlewares.isAuth,
    async (req: Request, res: Response) => {
      const { memberId } = req.params;
      const { name, role } = req.body;
      const memberServiceInstance = Container.get(MemberService);
      memberServiceInstance
        .RemoveMember(memberId)
        .then((member) => res.json(member).status(200));
    }
  );

  route.post("/", middlewares.isAuth, (req: Request, res: Response) => {
    const { name, role } = req.body;
    const memberServiceInstance = Container.get(MemberService);
    memberServiceInstance
      .CreateMember(name, role)
      .then((member) => res.json(member).status(200));
  });
};
