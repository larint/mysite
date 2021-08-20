"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const web_controller_1 = __importDefault(require("../../controllers/web/web_controller"));
let router = express_1.Router();
router.post('/get-profile', web_controller_1.default.getProfile);
exports.default = router;
