import Garage from "./garage.js";
import {getCar} from './server.js';
const garage = new Garage(await getCar());
