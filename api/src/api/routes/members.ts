import {Router, Request, Response} from 'express';
import middlewares from '../middlewares';
import {Container} from "typedi";
import AuthService from "../../services/auth";
import MemberService from "../../services/member";

const route = Router();

export default (app: Router) => {
    app.use('/members', route);

    route.get('/all',
        middlewares.isAuth,
        (req: Request, res: Response) => {
            const memberServiceInstance = Container.get(MemberService);
            memberServiceInstance.GetAllMembers()
                .then((members) => res.json(members).status(200));

        });

    route.get('/:memberId',
        middlewares.isAuth,
        async (req: Request, res: Response) => {
            const memberServiceInstance = Container.get(MemberService);
            memberServiceInstance.GetAllMembers()
                .then((members) => res.json(members).status(200));
        })
};
