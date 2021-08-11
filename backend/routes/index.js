"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoute = void 0;
const express_1 = require("express");
const home_1 = __importDefault(require("./home"));
let apiRoute = express_1.Router();
exports.apiRoute = apiRoute;
apiRoute.use('/', home_1.default);
