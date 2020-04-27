import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import {Container} from "typedi";
import AuthService from "../../services/auth";
import UserService from "../../services/user";

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/me',
      middlewares.isAuth,
      middlewares.attachCurrentUser,
      (req: Request, res: Response) => res.json({ user: req.currentUser })
          .status(200));

  route.get('/all',
      middlewares.isAuth,
      async (req: Request, res: Response) => {
        const userServiceInstance = Container.get(UserService);
        const allUsers = await userServiceInstance.GetAllUsers();

        res.json(allUsers)
            .status(200);
      })
};
