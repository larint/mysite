"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../utility/db");
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            var _a;
            let users = await db_1.DB.select('users');
            return res.json((_a = users.data[0]) === null || _a === void 0 ? void 0 : _a.data);
        };
        this.getResume = async (req, res) => {
            let resume = await db_1.DB.select('resume');
            let data = resume.data.map((el) => el.data);
            return res.status(200).json(data);
        };
        this.getProject = async (req, res) => {
            let project = await db_1.DB.select('project');
            let data = project.data.map((el) => el.data);
            return res.status(200).json(data);
        };
        this.getBlog = async (req, res) => {
            let post = await db_1.DB.select('post');
            let data = post.data.map((el) => el.data);
            return res.status(200).json(data);
        };
        this.getPost = async (req, res) => {
            let post = await db_1.DB.selectPost(req.body.slug);
            return res.status(200).json(post.data);
        };
        this.getOtherPost = async (req, res) => {
            let post = await db_1.DB.selectPost(req.body.slug);
            return res.status(200).json(post.data);
        };
    }
}
exports.default = new WebController;
