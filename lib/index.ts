import getAuth from "./auth";
import createCollection from "./collection";
import createConnection from "./connection";
import subscribeConfig from "./config";
import subscribeServices from "./services";
import subscribeEntities from "./entities";
import {
  ERR_CANNOT_CONNECT,
  ERR_INVALID_AUTH,
  ERR_CONNECTION_LOST,
  ERR_HASS_HOST_REQUIRED
} from "./const";

export {
  ERR_CANNOT_CONNECT,
  ERR_INVALID_AUTH,
  ERR_CONNECTION_LOST,
  ERR_HASS_HOST_REQUIRED,
  getAuth,
  createCollection,
  createConnection,
  subscribeConfig,
  subscribeServices,
  subscribeEntities
};
