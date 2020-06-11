import {Router, Request, Response} from 'express';
import middlewares from '../middlewares';
import {Container} from "typedi";
import AuthService from "../../services/auth";
import PresenceService from "../../services/presence";
import LoggerInstance from '../../loaders/logger';
import UserService from "../../services/user";
//import member from "../../models/member";

const route = Router();

export default (app: Router) => {
    app.use('/presence', route);

    route.get('',
        middlewares.isAuth,
        (req: Request, res: Response) => {
            const presenceServiceInstance = Container.get(PresenceService);
            presenceServiceInstance.GetAllPresences().then((presences) => res.json(presences).status(200));


        });

    // route.get('/:memberId',
    //     middlewares.isAuth,
    //     async (req: Request, res: Response) => {
    //         const {memberId} = req.params;
    //         const memberServiceInstance = Container.get(MemberService);
    //         memberServiceInstance.GetMember(memberId)
    //             .then((member) => res.json(member).status(200));
    //     });
    //
     route.put('/:presenceId',
         middlewares.isAuth,
         async (req: Request, res: Response) => {
             const {presenceId} = req.params;
             const presence = req.body;
             const presenceServiceInstance = Container.get(PresenceService);
             presenceServiceInstance.UpdatePresence(presenceId, presence)
                 .then((result) => res.json(result).status(200));
         });
    //
    // route.delete('/:memberId',
    //     middlewares.isAuth,
    //     async (req: Request, res: Response) => {
    //         const {memberId} = req.params;
    //         const {name, role} = req.body;
    //         const memberServiceInstance = Container.get(MemberService);
    //         memberServiceInstance.RemoveMember(memberId)
    //             .then((member) => res.json(member).status(200));
    //     });


    route.post('/',
        middlewares.isAuth,
        (req: Request, res: Response) => {
            const {member, archived, cancelled, present} = req.body;
            const presenceServiceInstance = Container.get(PresenceService);
            presenceServiceInstance.CreatePresence(member, archived, cancelled, present).then((presences) => res.json(presences).status(200));
        });
};
