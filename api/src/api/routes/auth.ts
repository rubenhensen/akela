import {
    Router, Request, Response, NextFunction,
} from 'express';
import {Container} from 'typedi';
import {celebrate, Joi} from 'celebrate';
import winston from "winston";
import AuthService from '../../services/auth';
import {IUserInputDTO} from '../../interfaces/IUser';
import middlewares from '../middlewares';

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);

    route.post(
        '/signup',
        celebrate({
            body: Joi.object({
                name: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().required(),
            }),
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            const logger = Container.get<winston.Logger>('logger');
            logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
            try {
                const authServiceInstance = Container.get(AuthService);
                const {user, token} = await authServiceInstance.SignUp(req.body as IUserInputDTO);
                return res.status(201).json({user, token});
            } catch (e) {
                logger.error('🔥 error: %o', e);
                return next(e);
            }
        },
    );

    route.post(
        '/signin',
        celebrate({
            body: Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().required(),
            }),
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            const logger = Container.get<winston.Logger>('logger');
            // @ts-ignore
            logger.debug('Calling Sign-In endpoint with body: %o', req.body);
            try {
                const {email, password} = req.body;
                const authServiceInstance = Container.get(AuthService);
                const {user, token} = await authServiceInstance.SignIn(email, password);
		const isProduction = process.env.NODE_ENV !== "development";
		console.log(isProduction);
		console.log(process.env.NODE_ENV);
                return res.cookie('access_token', `Bearer ${token}`, {
                    expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
		    secure: false,
		    httpOnly: true,
                })
                    .status(200)
                    .json({user, token});
            } catch (e) {
                logger.error('🔥 error: %o', e);
                return next(e);
            }
        },
    );

    /**
     * @TODO Let's leave this as a place holder for now
     * The reason for a logout route could be deleting a 'push notification token'
     * so the device stops receiving push notifications after logout.
     *
     * Another use case for advance/enterprise apps, you can store a record of the jwt token
     * emitted for the session and add it to a black list.
     * It's really annoying to develop that but if you had to, please use Redis as your data store
     */
    route.post('/logout', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
        const logger = Container.get('logger');
        // @ts-ignore
        logger.debug('Calling Sign-Out endpoint with body: %o', req.body);
        try {
            // @TODO AuthService.Logout(req.user) do some clever stuff
            return res.status(200).end();
        } catch (e) {
            // @ts-ignore
            logger.error('🔥 error %o', e);
            return next(e);
        }
    });
};
