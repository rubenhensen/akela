import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "../api";
import config from "../config";
import Logger from "./logger";

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  const corsOptions = {
    origin: true,
    // origin: config.frontendUrl,
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  // app.use(cors(corsOptions));
  // app.options('*', cors()); // include before other routes
  app.use(cors(corsOptions));

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Middleware that enables the cookies of req.cookie
  app.use(cookieParser());

  // Enable preflight
  app.options("*", cors());

  // Load API routes
  app.use(config.api.prefix, routes());

  // / catch 404 and forward to error handler
  app.use((req, res, next) => {
    Logger.error("Route not found error");
    const err = new Error("Not Found");
    res.status(404);
    next(err);
  });

  // / error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      Logger.error("Route unauthorized error");
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err, req, res, next) => {
    Logger.error("Route internal server error");
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
