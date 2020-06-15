import { Router, Request, Response } from "express";
import middlewares from "../middlewares";
import { Container } from "typedi";
import AuthService from "../../services/auth";
import UserService from "../../services/user";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.get(
    "/me",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    (req: Request, res: Response) => {
      res.json({ user: req.currentUser }).status(200);
    }
  );

  route.get(
    "",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response) => {
      const userServiceInstance = Container.get(UserService);
      const allUsers = await userServiceInstance.GetAllUsers();

      res.json(allUsers).status(200);
    }
  );

  route.put(
    "/:id",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const { name, email } = req.body;
      const userServiceInstance = Container.get(UserService);
      const newUser = await userServiceInstance.UpdateUser(id, name, email);

      res.json(newUser).status(200);
    }
  );
};
