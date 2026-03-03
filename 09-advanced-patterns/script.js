import { calculateTotal } from "./01-es-modules";
import calculateTotalDefault from "./01-es-modules";

// old way of doing it
const { calculateTotal } = require("./01-es-modules");

calculateTotal(100, 2);

// old way of doing it
const { calculateTotal } = require("./01-es-modules");

calculateTotal(100, 2);