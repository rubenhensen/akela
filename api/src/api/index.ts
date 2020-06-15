import { Router } from "express";
import auth from "./routes/auth";
import user from "./routes/user";
import continents from "./routes/continents";
import members from "./routes/members";
import presence from "./routes/presence";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  continents(app);
  members(app);
  presence(app);
  return app;
};
