import Garage from "./garage.js";
import {getCar} from './server.js';
//https://ru.stackoverflow.com/questions/555303/%D0%9A%D0%B0%D0%BA-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9-pagination-js
//pagination

const garage = new Garage(await getCar());
