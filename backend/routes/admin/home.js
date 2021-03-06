"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = __importDefault(require("../../controllers/admin/home_controller"));
const celebrate_1 = require("celebrate");
let router = (0, express_1.Router)();
router.get('/', home_controller_1.default.index);
router.get('/log', home_controller_1.default.log);
router.post('/blog/save', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        title: celebrate_1.Joi.string().required(),
        content: celebrate_1.Joi.string().required()
    }
}), home_controller_1.default.savePost);
router.post('/blog/list', home_controller_1.default.getListPost);
router.post('/blog/get-post', home_controller_1.default.getPost);
router.put('/blog/save', home_controller_1.default.updatePost);
router.post('/blog/delete', home_controller_1.default.deletePost);
router.post('/blog/get-statistic', home_controller_1.default.getStatisticPost);
router.post('/get-profile', home_controller_1.default.getProfile);
router.post('/save-profile', home_controller_1.default.saveProfile);
router.post('/do-login', home_controller_1.default.doLogin);
router.post('/do-logout', home_controller_1.default.doLogout);
router.post('/check-auth', home_controller_1.default.checkAuth);
exports.default = router;
