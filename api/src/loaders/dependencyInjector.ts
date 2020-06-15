import { Container } from "typedi";
import mailgun from "mailgun-js";
import LoggerInstance from "./logger";
import config from "../config";

export default ({
  mongoConnection,
  models,
}: {
  mongoConnection;
  models: { name: string; model: any }[];
}) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    });

    Container.set("logger", LoggerInstance);
    Container.set(
      "emailClient",
      mailgun({ apiKey: config.emails.apiKey, domain: config.emails.domain })
    );

    LoggerInstance.info("✌️ Agenda injected into container");

    return {};
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
