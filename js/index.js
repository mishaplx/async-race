/* eslint-disable no-new */
import Garage from "./garage.js";
import { getCar } from "./server.js";

new Garage(await getCar());
