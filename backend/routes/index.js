"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const home_1 = __importDefault(require("./home"));
let router = express_1.Router();
exports.router = router;
router.use('/', home_1.default);
