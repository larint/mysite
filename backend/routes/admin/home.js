"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = __importDefault(require("../../controllers/admin/home_controller"));
let router = express_1.Router();
router.get('/', home_controller_1.default.index);
router.get('/log', home_controller_1.default.log);
router.post('/blog/save', home_controller_1.default.savePost);
router.post('/blog/list', home_controller_1.default.getListPost);
router.post('/blog/get-post', home_controller_1.default.getPost);
router.put('/blog/save', home_controller_1.default.updatePost);
exports.default = router;
