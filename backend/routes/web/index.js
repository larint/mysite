"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiWebRoute = void 0;
const express_1 = require("express");
const web_1 = __importDefault(require("./web"));
let apiWebRoute = (0, express_1.Router)();
exports.apiWebRoute = apiWebRoute;
apiWebRoute.use('/', web_1.default);
