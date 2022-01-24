import Garage from "./garage.js";
import { getCar } from "./server.js";

// eslint-disable-next-line no-new
new Garage(await getCar()); 
