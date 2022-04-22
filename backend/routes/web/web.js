"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const web_controller_1 = __importDefault(require("../../controllers/web/web_controller"));
let router = (0, express_1.Router)();
router.post('/get-profile', web_controller_1.default.getProfile);
router.post('/get-resume', web_controller_1.default.getResume);
router.post('/get-project', web_controller_1.default.getProject);
router.post('/get-blog', web_controller_1.default.getBlog);
router.post('/get-post', web_controller_1.default.getPost);
router.post('/get-other-post', web_controller_1.default.getOtherPost);
router.post('/get-skill', web_controller_1.default.getSkill);
router.post('/send-contact', web_controller_1.default.sendContact);
router.post('/get-captcha', web_controller_1.default.getCaptcha);
exports.default = router;
